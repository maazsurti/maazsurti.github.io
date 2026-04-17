import { svgIcon, svgScreen } from '../utils/svg'

export interface AppStoreLinks {
  appStore: string | null;
  playStore: string | null;
}

export interface AppStats {
  downloads: string;
  rating: string;
  reviews: string;
}

export interface AppScreenshot {
  label: string;
  src: string;
}

export interface App {
  id: number;
  name: string;
  category: string;
  tech: string;
  color: string;
  accent: string;
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  stats: AppStats;
  year: string;
  stores: AppStoreLinks;
  screenshots: AppScreenshot[];
  iconImage?: string; 
}

const makeApp = (base: any): App => ({
  ...base,
  get iconImage() { return svgIcon(this.color, this.accent, this.icon) },
})

export const apps: App[] = [
  makeApp({
    id: 1, name: 'Luminary', category: 'Health & Wellness', tech: 'SwiftUI',
    color: '#A78BFA', accent: '#7C3AED', icon: '🌙',
    tagline: 'Sleep intelligence, redefined.',
    description: 'A sleep tracking app that uses Apple Health data and ML-powered insights to optimize your rest cycles. Features custom SwiftUI animations, HealthKit integration, and a stunning dark ambient UI.',
    features: ['HealthKit & CoreMotion integration', 'Custom SwiftUI chart animations', 'Haptic feedback system', 'iCloud sync across devices', 'Siri Shortcuts support', 'Apple Watch companion app'],
    stats: { downloads: '48K', rating: '4.9', reviews: '1.2K' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com', playStore: null },
    get screenshots() {
      return [
        { label: 'Sleep Dashboard', src: svgScreen(this.color, this.accent, 'Sleep Dashboard', 0) },
        { label: 'Sleep Stages', src: svgScreen(this.color, this.accent, 'Sleep Stages', 1) },
        { label: 'Smart Alarm', src: svgScreen(this.color, '#7C3AED', 'Smart Alarm', 2) },
        { label: 'Health Trends', src: svgScreen(this.color, '#ddd6fe', 'Health Trends', 3) },
      ]
    },
  }),
  makeApp({
    id: 2, name: 'Stride', category: 'Fitness', tech: 'SwiftUI + UIKit',
    color: '#34D399', accent: '#059669', icon: '⚡',
    tagline: 'Train smarter, not harder.',
    description: "A professional workout tracker combining SwiftUI's declarative UI with UIKit's performance for complex animations. Features real-time muscle group visualization and adaptive training plans.",
    features: ['Hybrid SwiftUI + UIKit architecture', 'SceneKit 3D muscle visualization', 'CoreData with CloudKit sync', 'AVFoundation video analysis', 'Subscription via StoreKit 2', 'Live Activities on Lock Screen'],
    stats: { downloads: '120K', rating: '4.8', reviews: '3.4K' },
    year: '2023',
    stores: { appStore: 'https://apps.apple.com', playStore: null },
    get screenshots() {
      return [
        { label: "Today's Workout", src: svgScreen(this.color, this.accent, 'Workout', 0) },
        { label: 'Muscle Map', src: svgScreen(this.color, '#6ee7b7', 'Muscle Map', 1) },
        { label: 'Progress Charts', src: svgScreen(this.color, this.accent, 'Progress', 2) },
        { label: 'Live Activity', src: svgScreen(this.color, '#a7f3d0', 'Live Activity', 3) },
      ]
    },
  }),
  makeApp({
    id: 3, name: 'Folio', category: 'Finance', tech: 'UIKit',
    color: '#60A5FA', accent: '#2563EB', icon: '📈',
    tagline: 'Your wealth, beautifully organized.',
    description: 'A portfolio tracker built with UIKit for maximum performance. Features custom collection view layouts, real-time WebSocket data, and interactive charts built with Core Graphics.',
    features: ['Custom UICollectionView layouts', 'WebSocket real-time data', 'Core Graphics charting', 'Touch ID / Face ID security', 'Widget extensions', 'Push notifications via APNs'],
    stats: { downloads: '85K', rating: '4.7', reviews: '2.1K' },
    year: '2023',
    stores: { appStore: 'https://apps.apple.com', playStore: null },
    get screenshots() {
      return [
        { label: 'Portfolio Overview', src: svgScreen(this.color, this.accent, 'Portfolio', 0) },
        { label: 'Stock Detail', src: svgScreen(this.color, '#93c5fd', 'Stock Detail', 1) },
        { label: 'Watchlist', src: svgScreen(this.color, this.accent, 'Watchlist', 2) },
        { label: 'News Feed', src: svgScreen(this.color, '#bfdbfe', 'News Feed', 3) },
      ]
    },
  }),
  makeApp({
    id: 4, name: 'Wander', category: 'Travel', tech: 'Flutter',
    color: '#FB923C', accent: '#EA580C', icon: '🗺️',
    tagline: 'Every trip, a story worth telling.',
    description: 'A cross-platform travel journal built with Flutter, shipping on both iOS and Android. Features offline-first architecture, custom map overlays, and beautiful animated transitions.',
    features: ['Flutter cross-platform (iOS + Android)', 'Offline-first with Hive/Drift', 'Custom Google Maps overlays', 'Hero animations & page transitions', 'Firebase Auth & Firestore', 'Photo AI tagging via ML Kit'],
    stats: { downloads: '62K', rating: '4.8', reviews: '1.8K' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com', playStore: 'https://play.google.com' },
    get screenshots() {
      return [
        { label: 'Trip Map', src: svgScreen(this.color, this.accent, 'Trip Map', 0) },
        { label: 'Journal Entry', src: svgScreen(this.color, '#fdba74', 'Journal', 1) },
        { label: 'Photo Gallery', src: svgScreen(this.color, this.accent, 'Gallery', 2) },
        { label: 'Trip Stats', src: svgScreen(this.color, '#fed7aa', 'Trip Stats', 3) },
      ]
    },
  }),
  makeApp({
    id: 5, name: 'Echo', category: 'Social', tech: 'SwiftUI',
    color: '#F472B6', accent: '#DB2777', icon: '🎵',
    tagline: "Share what you're hearing.",
    description: 'A music sharing social app built entirely in SwiftUI with a focus on fluid motion and expressive typography. Integrates MusicKit API and features real-time collaborative playlists.',
    features: ['MusicKit & Apple Music API', 'Real-time via Multipeer Connectivity', 'Custom SwiftUI matched geometry', 'SharePlay for FaceTime sessions', 'CloudKit public database', 'Dynamic Island integration'],
    stats: { downloads: '31K', rating: '4.9', reviews: '890' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com', playStore: null },
    get screenshots() {
      return [
        { label: 'Now Playing', src: svgScreen(this.color, this.accent, 'Now Playing', 0) },
        { label: 'Feed', src: svgScreen(this.color, '#f9a8d4', 'Feed', 1) },
        { label: 'Shared Playlist', src: svgScreen(this.color, this.accent, 'Playlist', 2) },
        { label: 'Dynamic Island', src: svgScreen(this.color, '#fce7f3', 'Dynamic Island', 3) },
      ]
    },
  }),
  makeApp({
    id: 6, name: 'Lens AI', category: 'Productivity', tech: 'SwiftUI + UIKit',
    color: '#FBBF24', accent: '#D97706', icon: '🔍',
    tagline: 'See text. Understand everything.',
    description: 'A document scanner and AI summarizer that leverages VisionKit for scanning, on-device Core ML for summarization, and a polished SwiftUI interface for a seamless experience.',
    features: ['VisionKit document scanning', 'On-device Core ML NLP', 'PDFKit document rendering', 'Natural Language framework', 'Custom UIMenuController', 'Spotlight search integration'],
    stats: { downloads: '200K', rating: '4.6', reviews: '5.2K' },
    year: '2022',
    stores: { appStore: 'https://apps.apple.com', playStore: null },
    get screenshots() {
      return [
        { label: 'Scanner', src: svgScreen(this.color, this.accent, 'Scanner', 0) },
        { label: 'Document View', src: svgScreen(this.color, '#fde68a', 'Document', 1) },
        { label: 'AI Summary', src: svgScreen(this.color, this.accent, 'AI Summary', 2) },
        { label: 'Library', src: svgScreen(this.color, '#fef3c7', 'Library', 3) },
      ]
    },
  }),
]
