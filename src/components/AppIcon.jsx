// iOS squircle: Apple uses ~22.37% border-radius of the icon size
export default function AppIcon({ app, size = 52, shadow = true }) {
  const radius = Math.round(size * 0.2237)

  return (
    <div
      className="flex-shrink-0 relative overflow-hidden"
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: `linear-gradient(135deg, ${app.color}22, ${app.accent}33)`,
        border: `1px solid ${app.color}44`,
        boxShadow: shadow ? `0 ${Math.round(size*0.08)}px ${Math.round(size*0.4)}px ${app.accent}33` : 'none',
      }}
    >
      {app.iconImage
        ? <img src={app.iconImage} alt={`${app.name} icon`} className="w-full h-full object-cover block" />
        : <div className="w-full h-full flex items-center justify-center" style={{ fontSize: size * 0.46 }}>
            {app.icon}
          </div>
      }
    </div>
  )
}
