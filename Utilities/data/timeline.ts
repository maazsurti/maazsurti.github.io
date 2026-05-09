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
    role: 'iOS Developer',
    company: 'Raw Code Developers',
    location: 'Kuwait City, Kuwait · Remote',
    desc: 'Leading the mobile development team across iOS and Android. Spearheaded CI/CD pipelines with Fastlane and GitHub Actions, cutting release cycles from weeks to days. Shipped 8+ App Store apps for clients across logistics, marketplace, fitness, and business sectors.',
  },
  {
    year: '2020–2022',
    role: 'Junior iOS Developer',
    company: 'Technostacks Infotech Pvt. Ltd.',
    location: 'Ahmedabad, India',
    desc: 'Built intuitive UIs with UIKit, Storyboard, and Interface Builder. Developed reusable custom UI components that accelerated delivery across multiple projects. Configured CI/CD pipelines and integrated RESTful APIs for data-driven features.',
  },
]
