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
    id: 1, name: 'ShiftPilot', category: 'Operations', tech: 'SwiftUI',
    color: '#6b7a8f', accent: '#465468', icon: 'SP',
    tagline: 'Scheduling and dispatch for field teams.',
    description: 'A workforce scheduling app used by service teams to assign shifts, track live job status, and reduce missed appointments. Built for speed and reliability with a clean operator-first UI.',
    features: ['Real-time shift board', 'Geo-aware dispatching', 'In-app team messaging', 'Offline mode for low network areas', 'Calendar + reminder sync', 'Role-based access controls'],
    stats: { downloads: '74K', rating: '4.8', reviews: '2.3K' },
    year: '2025',
    stores: { appStore: 'https://apps.apple.com', playStore: null },
    get screenshots() {
      return [
        { label: 'Shift Board', src: svgScreen(this.color, this.accent, 'Shift Board', 0) },
        { label: 'Team Availability', src: svgScreen(this.color, this.accent, 'Availability', 1) },
        { label: 'Dispatch View', src: svgScreen(this.color, '#5a6a80', 'Dispatch', 2) },
        { label: 'Live Activity', src: svgScreen(this.color, '#c9d1db', 'Live Jobs', 3) },
      ]
    },
  }),
  makeApp({
    id: 2, name: 'LedgerLoop', category: 'Fintech', tech: 'SwiftUI + UIKit',
    color: '#34D399', accent: '#059669', icon: 'LL',
    tagline: 'Business cashflow without spreadsheet chaos.',
    description: "A finance companion for founders and small teams. It tracks invoices, recurring expenses, and runway in one dashboard with strong performance on large transaction datasets.",
    features: ['Bank feed ingestion', 'Smart invoice reminders', 'Cashflow forecasting', 'Statement export to CSV/PDF', 'Custom recurring rules engine', 'Widget summaries'],
    stats: { downloads: '112K', rating: '4.7', reviews: '3.1K' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com', playStore: null },
    get screenshots() {
      return [
        { label: 'Cashflow', src: svgScreen(this.color, this.accent, 'Cashflow', 0) },
        { label: 'Invoices', src: svgScreen(this.color, '#6ee7b7', 'Invoices', 1) },
        { label: 'P&L Summary', src: svgScreen(this.color, this.accent, 'P and L', 2) },
        { label: 'Forecast', src: svgScreen(this.color, '#a7f3d0', 'Forecast', 3) },
      ]
    },
  }),
  makeApp({
    id: 3, name: 'RouteDesk', category: 'Logistics', tech: 'UIKit',
    color: '#60A5FA', accent: '#2563EB', icon: 'RD',
    tagline: 'Routing intelligence for delivery teams.',
    description: 'A last-mile operations app focused on route planning, stop optimization, and proof-of-delivery capture. Built in UIKit for granular control and smooth map-heavy interactions.',
    features: ['Stop optimization engine', 'Turn-by-turn handoff', 'Proof of delivery with camera', 'Route replay and auditing', 'Driver scorecards', 'Push alerts for delays'],
    stats: { downloads: '93K', rating: '4.8', reviews: '2.6K' },
    year: '2023',
    stores: { appStore: 'https://apps.apple.com', playStore: null },
    get screenshots() {
      return [
        { label: 'Route Map', src: svgScreen(this.color, this.accent, 'Route Map', 0) },
        { label: 'Stop Detail', src: svgScreen(this.color, '#93c5fd', 'Stop Detail', 1) },
        { label: 'Driver Queue', src: svgScreen(this.color, this.accent, 'Driver Queue', 2) },
        { label: 'Delivery Proof', src: svgScreen(this.color, '#bfdbfe', 'Delivery Proof', 3) },
      ]
    },
  }),
  makeApp({
    id: 4, name: 'CareNest', category: 'Health Tech', tech: 'Flutter',
    color: '#FB923C', accent: '#EA580C', icon: 'CN',
    tagline: 'Care plans for families and clinics.',
    description: 'A cross-platform patient companion for medication schedules, appointment reminders, and caregiver updates. Designed for clarity and accessibility across age groups.',
    features: ['Care plan timelines', 'Medication reminders', 'Shared caregiver notes', 'HIPAA-conscious architecture', 'Telehealth handoff links', 'Push + SMS fallback reminders'],
    stats: { downloads: '58K', rating: '4.9', reviews: '1.7K' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com', playStore: 'https://play.google.com' },
    get screenshots() {
      return [
        { label: 'Care Dashboard', src: svgScreen(this.color, this.accent, 'Care Dashboard', 0) },
        { label: 'Medication Plan', src: svgScreen(this.color, '#fdba74', 'Medication', 1) },
        { label: 'Appointments', src: svgScreen(this.color, this.accent, 'Appointments', 2) },
        { label: 'Family Updates', src: svgScreen(this.color, '#fed7aa', 'Family Updates', 3) },
      ]
    },
  }),
  makeApp({
    id: 5, name: 'ShelfSense', category: 'Retail', tech: 'SwiftUI',
    color: '#c08457', accent: '#8f5d3a', icon: 'SS',
    tagline: 'Inventory visibility for fast-moving teams.',
    description: 'A retail operations app used to track low stock, transfer requests, and receiving workflows across multiple store locations with a lightweight and fast daily UX.',
    features: ['Barcode scanning flow', 'Realtime stock snapshots', 'Stock transfer approvals', 'Purchase order intake', 'Team action history', 'Role-specific dashboards'],
    stats: { downloads: '46K', rating: '4.8', reviews: '1.3K' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com', playStore: null },
    get screenshots() {
      return [
        { label: 'Stock Health', src: svgScreen(this.color, this.accent, 'Stock Health', 0) },
        { label: 'Product Search', src: svgScreen(this.color, '#dfb08a', 'Product Search', 1) },
        { label: 'Transfer Queue', src: svgScreen(this.color, this.accent, 'Transfer Queue', 2) },
        { label: 'Receiving', src: svgScreen(this.color, '#f3e0cf', 'Receiving', 3) },
      ]
    },
  }),
  makeApp({
    id: 6, name: 'Briefcase AI', category: 'Productivity', tech: 'SwiftUI + UIKit',
    color: '#FBBF24', accent: '#D97706', icon: 'BA',
    tagline: 'Capture notes, turn them into action.',
    description: 'A meeting capture app that records notes, summarizes decisions, and auto-generates action lists. Designed for professionals who need fast capture and structured follow-up.',
    features: ['Voice-to-text note capture', 'On-device summary generation', 'Project folder organization', 'Follow-up reminders', 'Export to Notion/Slack', 'Global search'],
    stats: { downloads: '138K', rating: '4.7', reviews: '4.1K' },
    year: '2022',
    stores: { appStore: 'https://apps.apple.com', playStore: null },
    get screenshots() {
      return [
        { label: 'Inbox', src: svgScreen(this.color, this.accent, 'Inbox', 0) },
        { label: 'Meeting Notes', src: svgScreen(this.color, '#fde68a', 'Meeting Notes', 1) },
        { label: 'AI Summary', src: svgScreen(this.color, this.accent, 'AI Summary', 2) },
        { label: 'Action Board', src: svgScreen(this.color, '#fef3c7', 'Action Board', 3) },
      ]
    },
  }),
]
