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
    year: '2020–Now',
    role: 'Lead Mobile Developer',
    company: 'Raw Code Developers',
    location: 'Kuwait City, Kuwait · Remote',
    desc: 'Senior mobile ownership across production client products, from architecture and implementation through release systems, QA coordination, and App Store delivery.',
    highlights: [
      'Shipped 8+ App Store apps across logistics, marketplaces, fitness, events, and service businesses.',
      'Introduced Fastlane and GitHub Actions workflows that moved releases from week-scale handoffs to day-scale shipping.',
      'Owned SwiftUI architecture, API integration, localization, QA coordination, and release readiness.',
      'Delivered bilingual English and Arabic mobile products for client-facing businesses across Kuwait, UAE, Qatar and other GCC countries.',
    ],
  },
]
