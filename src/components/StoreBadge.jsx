const AppleIcon = () => (
  <svg width="18" height="22" viewBox="0 0 18 22" fill="currentColor">
    <path d="M14.98 11.65c-.02-2.18 1.79-3.24 1.87-3.29-1.02-1.49-2.6-1.69-3.16-1.72-1.35-.14-2.63.8-3.32.8-.68 0-1.74-.78-2.86-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.65-.39 6.58 1.1 8.73.73 1.05 1.6 2.23 2.74 2.19 1.1-.05 1.52-.71 2.85-.71 1.33 0 1.71.71 2.87.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.33-.9-2.35-3.52zM12.8 4.52c.6-.74 1.01-1.76.9-2.78-.87.04-1.93.58-2.55 1.31-.56.64-1.05 1.67-.92 2.66.97.07 1.96-.49 2.57-1.19z"/>
  </svg>
)
const PlayIcon = () => (
  <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.3.17.64.24.99.19L16.41 11.71 12.17 7.5 3.18 23.76zM20.93 10.04l-2.79-1.6-3.44 3.44 3.44 3.44 2.82-1.62c.8-.46.8-1.2-.03-1.66zM2.09 1.05C2.03 1.23 2 1.43 2 1.65v20.7c0 .22.03.42.09.6l.09.09 11.6-11.6v-.27L2.18.96l-.09.09zM16.34 16.96L4.1 23.2c-.32.19-.63.2-.91.06l12.06-12.06 1.09 1.09-3.44 3.44 3.44 3.44z"/>
  </svg>
)

export default function StoreBadge({ type, url, color, compact = false }) {
  const isApple = type === 'appStore'
  const label   = isApple ? 'App Store'          : 'Google Play'
  const sub     = isApple ? 'Download on the'    : 'Get it on'

  if (compact) {
    return (
      <a
        href={url} target="_blank" rel="noopener noreferrer"
        onClick={e => e.stopPropagation()}
        title={`View on ${label}`}
        className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#999]
                   bg-white/[0.06] border border-white/10 rounded-[8px] px-2.5 py-[5px]
                   no-underline flex-shrink-0 transition-all duration-200"
        onMouseEnter={e => {
          e.currentTarget.style.background = color + '18'
          e.currentTarget.style.borderColor = color + '44'
          e.currentTarget.style.color = color
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
          e.currentTarget.style.color = '#999'
        }}
      >
        {isApple ? '🍎 iOS' : '▶ Android'}
      </a>
    )
  }

  return (
    <a
      href={url} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-[14px] px-5 py-3 no-underline flex-1
                 min-w-0 transition-all duration-200"
      style={{
        background: isApple ? 'linear-gradient(135deg,#1a1a2e,#111120)' : 'linear-gradient(135deg,#0f1e0f,#0a160a)',
        border: `1px solid ${isApple ? color + '33' : '#34d39933'}`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = `0 8px 30px ${isApple ? color : '#34d399'}22`
        e.currentTarget.style.borderColor = `${isApple ? color : '#34d399'}55`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
        e.currentTarget.style.borderColor = `${isApple ? color : '#34d399'}33`
      }}
    >
      <span className="flex-shrink-0 flex" style={{ color: isApple ? color : '#34d399' }}>
        {isApple ? <AppleIcon /> : <PlayIcon />}
      </span>
      <div>
        <div className="font-outfit text-[10px] text-[#555] tracking-[0.04em] mb-px">{sub}</div>
        <div className="font-syne font-bold text-[15px] text-[#e0e0e0]">{label}</div>
      </div>
      <span className="ml-auto text-[#444] text-base">↗</span>
    </a>
  )
}
