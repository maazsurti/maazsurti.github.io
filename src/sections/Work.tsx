import { apps } from '../Utilities/data/apps'
import AppCard from '../components/AppCard'

export default function Work({ onSelectApp }) {
  const handleAppSelect = (app) => () => onSelectApp(app)

  return (
    <section id="work" className="relative z-[1] mb-20">
      <div className="rounded-[28px] border border-[#d8cec1] bg-brand-surface p-5 sm:p-8 md:p-10">
        <div className="mb-14">
          <span className="section-label">02 / Selected Work</span>
          <h2 className="section-title" style={{ fontSize:'clamp(32px,4vw,52px)' }}>
            Products shipped, <span className="text-[#5f5143]">results delivered.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {apps.map(app => (
            <AppCard key={app.id} app={app} onClick={handleAppSelect(app)} />
          ))}
        </div>
      </div>
    </section>
  )
}
