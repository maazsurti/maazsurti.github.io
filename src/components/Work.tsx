import { apps } from '../Utilities/data/apps'
import AppCard from './AppCard'

export default function Work({ onSelectApp }) {
  return (
    <section id="work" className="py-20 px-[8vw] pb-32 relative z-10">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="section-label">02 / Selected Work</span>
          <h2
            className="font-syne font-extrabold leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(32px,4vw,52px)' }}
          >
            Apps shipped,{' '}
            <span className="text-neon-violet">lessons learned.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))' }}>
          {apps.map((app) => (
            <AppCard key={app.id} app={app} onClick={() => onSelectApp(app)} />
          ))}
        </div>
      </div>
    </section>
  )
}
