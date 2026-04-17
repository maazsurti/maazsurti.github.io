import { apps } from '../Utilities/data/apps'
import AppCard from '../components/AppCard'

export default function Work({ onSelectApp }) {
  return (
    <section id="work" className="relative z-[1] pt-20 pb-28 px-[8vw]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <span className="section-label">02 / Selected Work</span>
          <h2 className="section-title" style={{ fontSize:'clamp(32px,4vw,52px)' }}>
            Products shipped, <span className="text-brand-violet">results delivered.</span>
          </h2>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))' }}>
          {apps.map(app => (
            <AppCard key={app.id} app={app} onClick={() => onSelectApp(app)} />
          ))}
        </div>
      </div>
    </section>
  )
}
