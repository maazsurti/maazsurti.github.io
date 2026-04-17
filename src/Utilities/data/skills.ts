export interface LevelMetadata {
  label: string;
  color: string;
  bg: string;
  border: string;
  dot: number;
}

export const levelMeta: Record<string, LevelMetadata> = {
  Expert:     { label: 'Expert',     color: '#00d4ff', bg: 'rgba(0,212,255,0.08)',   border: 'rgba(0,212,255,0.25)',   dot: 4 },
  Advanced:   { label: 'Advanced',   color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.25)', dot: 3 },
  Proficient: { label: 'Proficient', color: '#34d399', bg: 'rgba(52,211,153,0.08)',  border: 'rgba(52,211,153,0.25)',  dot: 2 },
  Learning:   { label: 'Learning',   color: '#fb923c', bg: 'rgba(251,146,60,0.08)',  border: 'rgba(251,146,60,0.25)',  dot: 1 },
}

export interface Skill {
  name: string;
  level: string;
  years: string;
  detail: string;
}

export interface SkillGroupData {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillGroups: SkillGroupData[] = [
  {
    category: 'Native iOS', icon: '◆', color: '#00d4ff',
    skills: [
      { name: 'SwiftUI',       level: 'Expert',     years: '4 yrs', detail: 'Animations, custom layouts, matched geometry' },
      { name: 'UIKit',         level: 'Expert',     years: '5 yrs', detail: 'Custom views, collection layouts, transitions' },
      { name: 'Swift',         level: 'Expert',     years: '5 yrs', detail: 'Concurrency, generics, protocol-oriented' },
      { name: 'Objective-C',   level: 'Proficient', years: '2 yrs', detail: 'Legacy codebase maintenance & bridging' },
    ],
  },
  {
    category: 'Cross-Platform', icon: '◈', color: '#a78bfa',
    skills: [
      { name: 'Flutter', level: 'Advanced', years: '2 yrs', detail: 'Custom painters, complex state, platform channels' },
      { name: 'Dart',    level: 'Advanced', years: '2 yrs', detail: 'Async patterns, isolates, null safety' },
    ],
  },
  {
    category: 'Apple Frameworks', icon: '◉', color: '#34d399',
    skills: [
      { name: 'Core Data / CloudKit',  level: 'Advanced',   years: '4 yrs', detail: 'Complex schemas, migrations, sync' },
      { name: 'Combine & async/await', level: 'Expert',     years: '3 yrs', detail: 'Reactive pipelines, structured concurrency' },
      { name: 'HealthKit / CoreMotion',level: 'Advanced',   years: '3 yrs', detail: 'Workouts, sleep, biometric data' },
      { name: 'AVFoundation',          level: 'Proficient', years: '2 yrs', detail: 'Video recording, custom camera pipeline' },
      { name: 'Core ML / Vision',      level: 'Proficient', years: '2 yrs', detail: 'On-device inference, image classification' },
      { name: 'ARKit / RealityKit',    level: 'Learning',   years: '1 yr',  detail: 'World tracking, surface detection, visionOS' },
    ],
  },
  {
    category: 'Tooling & Process', icon: '◎', color: '#fb923c',
    skills: [
      { name: 'Xcode & Instruments',  level: 'Expert',   years: '5 yrs', detail: 'Profiling, memory leaks, Time Profiler' },
      { name: 'XCTest & UI Testing',  level: 'Advanced', years: '3 yrs', detail: 'Unit tests, snapshot tests, CI integration' },
      { name: 'GitHub Actions / CI',  level: 'Advanced', years: '3 yrs', detail: 'Automated builds, TestFlight deployment' },
      { name: 'StoreKit 2',           level: 'Advanced', years: '2 yrs', detail: 'Subscriptions, in-app purchases, receipts' },
    ],
  },
]

export interface TimelineItemData {
  year: string;
  role: string;
  company: string;
  desc: string;
}

export const timeline: TimelineItemData[] = [
  { year: '2024', role: 'Senior iOS Engineer', company: 'Velocity Labs',   desc: 'Leading SwiftUI architecture for a Series B fintech startup. Shipped 3 major features used by 500K+ users.' },
  { year: '2023', role: 'iOS Developer',        company: 'Craft Studios',   desc: 'Built two flagship apps from scratch using SwiftUI and UIKit hybrid approach. Grew DAU by 40%.' },
  { year: '2022', role: 'Junior iOS Developer', company: 'AppForge Inc.',   desc: 'Started mobile career building UIKit apps. Learned best practices in MVVM architecture and CI/CD.' },
  { year: '2021', role: 'Freelance Developer',  company: 'Self-employed',   desc: 'Launched first App Store apps while studying CS. Gained experience across SwiftUI and Flutter.' },
]

export const toolkit: string[] = [
  'MapKit','StoreKit 2','App Clips','Widgets / WidgetKit',
  'Live Activities','Dynamic Island','Spotlight','SharePlay',
  'Push Notifications (APNs)','TestFlight','GitHub Actions','Fastlane',
  'Firebase','Supabase','Figma → Dev Handoff','Accessibility (VoiceOver)',
]

export interface ArchitectureData {
  pattern: string;
  desc: string;
  color: string;
}

export const architectures: ArchitectureData[] = [
  { pattern: 'MVVM',              desc: 'Primary — SwiftUI apps',          color: '#00d4ff' },
  { pattern: 'MVC + Coordinator', desc: 'UIKit heavy codebases',           color: '#a78bfa' },
  { pattern: 'TCA',               desc: 'State management exploration',    color: '#34d399' },
  { pattern: 'VIPER',             desc: 'Enterprise modular apps',         color: '#fb923c' },
]
