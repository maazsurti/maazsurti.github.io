export interface TimelineItemData {
  year: string;
  role: string;
  company: string;
  location: string;
  desc: string;
  highlights: string[];
}

export const timeline: TimelineItemData[] = [
  {
    year: '2022–Now',
    role: 'Lead Mobile Developer',
    company: 'Raw Code Developers',
    location: 'Kuwait City, Kuwait · Remote',
    desc: 'Senior mobile ownership across production client products, from architecture and implementation through release systems, QA coordination, and App Store delivery.',
    highlights: [
      'Shipped 8+ App Store apps across logistics, marketplaces, fitness, events, and service businesses.',
      'Introduced Fastlane and GitHub Actions workflows that moved releases from week-scale handoffs to day-scale shipping.',
      'Owned SwiftUI architecture, API integration, localization, QA coordination, and release readiness.',
      'Delivered bilingual English and Arabic mobile products for client-facing businesses in Kuwait.',
    ],
  },
  {
    year: '2020–2022',
    role: 'Junior iOS Developer',
    company: 'Technostacks Infotech Pvt. Ltd.',
    location: 'Ahmedabad, India',
    desc: 'Early iOS foundation across UIKit interfaces, reusable UI components, API-driven features, debugging, and release hygiene.',
    highlights: [
      'Built UIKit screens, reusable UI components, and REST-backed mobile features across client projects.',
      'Developed practical habits around debugging, code maintainability, and production release hygiene.',
      'Worked across product requirements, QA feedback, and implementation details in delivery-focused teams.',
    ],
  },
]
