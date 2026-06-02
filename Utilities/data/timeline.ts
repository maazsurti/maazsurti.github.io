export interface TimelineItemData {
  year: string;
  role: string;
  company: string;
  location: string;
  desc: string;
}

export const timeline: TimelineItemData[] = [
  {
    year: '2022–Now',
    role: 'Lead iOS Developer',
    company: 'Raw Code Developers',
    location: 'Kuwait City, Kuwait · Remote',
    desc: 'Lead mobile delivery for client products across iOS and Android, with ownership from architecture and implementation through QA, CI/CD, and App Store release. Introduced Fastlane and GitHub Actions workflows that moved releases from week-scale handoffs to day-scale shipping. Shipped 8+ App Store apps across logistics, marketplaces, fitness, events, and service businesses.',
  },
  {
    year: '2020–2022',
    role: 'Junior iOS Developer',
    company: 'Technostacks Infotech Pvt. Ltd.',
    location: 'Ahmedabad, India',
    desc: 'Built UIKit interfaces, reusable UI components, and API-driven features across client projects. Developed a strong foundation in debugging, release hygiene, REST integrations, and maintainable mobile UI delivery.',
  },
]
