import { useEffect } from 'react';

const ease = 0.14;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const maxScrollY = () =>
  Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

const normalizeDelta = (event: WheelEvent) => {
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) return event.deltaY * 18;
  if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) return event.deltaY * window.innerHeight;
  return event.deltaY;
};

const canScrollInside = (target: EventTarget | null, deltaY: number) => {
  if (!(target instanceof Element)) return false;

  let node: Element | null = target;
  while (node && node !== document.body) {
    const style = window.getComputedStyle(node);
    const scrollsY = /(auto|scroll)/.test(style.overflowY);

    if (scrollsY && node.scrollHeight > node.clientHeight) {
      const canScrollUp = deltaY < 0 && node.scrollTop > 0;
      const canScrollDown =
        deltaY > 0 && node.scrollTop + node.clientHeight < node.scrollHeight;

      if (canScrollUp || canScrollDown) return true;
    }

    node = node.parentElement;
  }

  return false;
};

export default function RefinedScroll() {
  useEffect(() => {
    let frame = 0;
    let targetY = window.scrollY;
    let currentY = window.scrollY;

    const syncToWindow = () => {
      targetY = window.scrollY;
      currentY = window.scrollY;
    };

    const tick = () => {
      currentY += (targetY - currentY) * ease;

      if (Math.abs(targetY - currentY) < 0.5) {
        window.scrollTo({ top: targetY, left: 0, behavior: 'instant' });
        currentY = targetY;
        frame = 0;
        return;
      }

      window.scrollTo({ top: currentY, left: 0, behavior: 'instant' });
      frame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (!frame) frame = window.requestAnimationFrame(tick);
    };

    const onWheel = (event: WheelEvent) => {
      const reduced = document.documentElement.classList.contains('reduce-motion');
      if (reduced || event.ctrlKey || event.metaKey || event.defaultPrevented) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      const deltaY = normalizeDelta(event);
      if (!deltaY || canScrollInside(event.target, deltaY)) return;

      event.preventDefault();
      targetY = clamp(targetY + deltaY, 0, maxScrollY());
      start();
    };

    const onScroll = () => {
      if (!frame) syncToWindow();
    };

    const onKeyDown = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
      syncToWindow();
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown, { passive: true });
    window.addEventListener('resize', syncToWindow, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', syncToWindow);
    };
  }, []);

  return null;
}
