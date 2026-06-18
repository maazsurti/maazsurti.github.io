import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    // Returning home from a detail page: re-center the card we came from
    // (set by AppCard on click) instead of jumping to the top.
    if (pathname === '/') {
      const id = sessionStorage.getItem('returnTo');
      if (id) {
        sessionStorage.removeItem('returnTo');
        const el = document.getElementById(`app-${id}`);
        if (el) {
          el.scrollIntoView({ block: 'center', behavior: 'instant' });
          return;
        }
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
