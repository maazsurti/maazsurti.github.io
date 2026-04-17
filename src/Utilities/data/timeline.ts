export interface TimelineItemData {
  year: string;
  role: string;
  company: string;
  desc: string;
}

export const timeline: TimelineItemData[] = [
  {
    year: "2024",
    role: "Senior iOS Engineer",
    company: "Velocity Labs",
    desc: "Leading SwiftUI architecture for a Series B fintech startup. Shipped 3 major features used by 500K+ users.",
  },
  {
    year: "2023",
    role: "iOS Developer",
    company: "Craft Studios",
    desc: "Built two flagship apps from scratch using SwiftUI and UIKit hybrid approach. Grew DAU by 40%.",
  },
  {
    year: "2022",
    role: "Junior iOS Developer",
    company: "AppForge Inc.",
    desc: "Started mobile career building UIKit apps. Learned best practices in MVVM architecture and CI/CD.",
  },
  {
    year: "2021",
    role: "Freelance Developer",
    company: "Self-employed",
    desc: "Launched first App Store apps while studying CS. Gained experience across SwiftUI and Flutter.",
  },
];
