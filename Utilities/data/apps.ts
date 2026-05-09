import { svgIcon, svgScreen } from '../utils/svg'

export interface AppStoreLinks {
  appStore: string | null;
  playStore: string | null;
}

export interface AppMeta {
  platform: string;
  languages: string;
  year: string;
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
  meta: AppMeta;
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
    id: 1, name: 'SecondHand Souq', category: 'Marketplace', tech: 'SwiftUI',
    color: '#10B981', accent: '#059669', icon: 'SS',
    tagline: "Kuwait's freshest way to buy and sell pre-loved items.",
    description: "End-to-end marketplace for buying and selling secondhand goods in Kuwait. Built with a single codebase targeting iPhone, macOS, and visionOS — with full English and Arabic localization and a privacy-first data architecture.",
    features: [
      'Listing, browsing & discovery experience',
      'English + Arabic localization',
      'iPhone, macOS & visionOS from one codebase',
      'Apple privacy standards compliance',
      'Buyer & seller confidence flows',
      'Full App Store release lifecycle ownership',
    ],
    meta: { platform: 'iOS · macOS · visionOS', languages: 'EN + AR', year: '2024' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com/in/app/secondhand-souq/id6741193174', playStore: null },
    get screenshots() {
      return [
        { label: 'Browse', src: svgScreen(this.color, this.accent, 'Browse', 0) },
        { label: 'Listing', src: svgScreen(this.color, '#6ee7b7', 'Listing', 1) },
        { label: 'Sell', src: svgScreen(this.color, this.accent, 'Sell', 2) },
        { label: 'Profile', src: svgScreen(this.color, '#a7f3d0', 'Profile', 3) },
      ]
    },
  }),
  makeApp({
    id: 2, name: 'LorryNow', category: 'Logistics', tech: 'SwiftUI',
    color: '#F97316', accent: '#EA580C', icon: 'LN',
    tagline: 'Move anything, anytime, on your fingertips.',
    description: 'On-demand logistics and transport booking for Kuwait. Instant booking across lorry types, real-time driver tracking, transparent pricing, and a helper add-on system — designed for reliability in time-sensitive deliveries.',
    features: [
      'Instant lorry booking (open box, closed box, full lorry)',
      'Real-time driver tracking',
      'Transparent pricing & service options',
      'Helper add-ons',
      'Secure in-app payment wallet',
      'English + Arabic localization',
    ],
    meta: { platform: 'iOS', languages: 'EN + AR', year: '2024' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com/in/app/lorrynow/id6746252731', playStore: null },
    get screenshots() {
      return [
        { label: 'Book', src: svgScreen(this.color, this.accent, 'Book', 0) },
        { label: 'Track', src: svgScreen(this.color, '#fdba74', 'Track', 1) },
        { label: 'Pricing', src: svgScreen(this.color, this.accent, 'Pricing', 2) },
        { label: 'History', src: svgScreen(this.color, '#fed7aa', 'History', 3) },
      ]
    },
  }),
  makeApp({
    id: 3, name: 'Vite Kuwait', category: 'Events', tech: 'SwiftUI',
    color: '#8B5CF6', accent: '#7C3AED', icon: 'VK',
    tagline: 'Event invitations, managed end to end.',
    description: 'Digital invitation management platform for Kuwait events. Share your guest list and event details with the Vite team, who handle all digital invites, RSVPs, and attendance tracking — so the occasion runs smoothly.',
    features: [
      'Digital invitation creation & delivery',
      'Guest list management',
      'RSVP tracking',
      'Attendance coordination',
      'Event detail sharing',
      'Smooth occasion management',
    ],
    meta: { platform: 'iOS', languages: 'EN + AR', year: '2025' },
    year: '2025',
    stores: { appStore: 'https://apps.apple.com/in/app/vite-kuwait/id6755060002', playStore: null },
    get screenshots() {
      return [
        { label: 'Events', src: svgScreen(this.color, this.accent, 'Events', 0) },
        { label: 'Guests', src: svgScreen(this.color, '#c4b5fd', 'Guests', 1) },
        { label: 'RSVPs', src: svgScreen(this.color, this.accent, 'RSVPs', 2) },
        { label: 'Tracking', src: svgScreen(this.color, '#ddd6fe', 'Tracking', 3) },
      ]
    },
  }),
  makeApp({
    id: 4, name: 'Fit Habibi', category: 'Health & Fitness', tech: 'SwiftUI',
    color: '#EC4899', accent: '#DB2777', icon: 'FH',
    tagline: 'Connecting coaches, gyms, and trainees.',
    description: 'Fitness platform for coaches and trainees in the Middle East. Coaches manage clients, training programs, and schedules from a dedicated dashboard. Trainees track workouts, progress, and appointments — with full English and Arabic support.',
    features: [
      'Coach-facing client management dashboard',
      'Workout creation & exercise libraries',
      'Training program scheduling',
      'Client progress analytics',
      'Subscription & session management',
      'English + Arabic localization',
    ],
    meta: { platform: 'iOS', languages: 'EN + AR', year: '2024' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com/in/app/fit-habibi/id6736990371', playStore: null },
    get screenshots() {
      return [
        { label: 'Dashboard', src: svgScreen(this.color, this.accent, 'Dashboard', 0) },
        { label: 'Programs', src: svgScreen(this.color, '#f9a8d4', 'Programs', 1) },
        { label: 'Progress', src: svgScreen(this.color, this.accent, 'Progress', 2) },
        { label: 'Schedule', src: svgScreen(this.color, '#fce7f3', 'Schedule', 3) },
      ]
    },
  }),
  makeApp({
    id: 5, name: 'Petbook Kuwait', category: 'Pet Services', tech: 'SwiftUI',
    color: '#F59E0B', accent: '#D97706', icon: 'PK',
    tagline: 'Every pet service in Kuwait, one app.',
    description: 'Comprehensive pet services marketplace for Kuwait. Owners can book grooming, sitting, walking, veterinary care, and training — with easy appointment scheduling and a curated supplies section, all in one place.',
    features: [
      'Grooming appointment booking',
      'Pet sitting & walking services',
      'Veterinary care access',
      'Training services',
      'Pet supplies store',
      'Easy scheduling & management',
    ],
    meta: { platform: 'iOS', languages: 'EN + AR', year: '2023' },
    year: '2023',
    stores: { appStore: 'https://apps.apple.com/us/app/petbook-kuwait/id6476278399', playStore: null },
    get screenshots() {
      return [
        { label: 'Services', src: svgScreen(this.color, this.accent, 'Services', 0) },
        { label: 'Book', src: svgScreen(this.color, '#fde68a', 'Book', 1) },
        { label: 'Vets', src: svgScreen(this.color, this.accent, 'Vets', 2) },
        { label: 'Profile', src: svgScreen(this.color, '#fef3c7', 'Profile', 3) },
      ]
    },
  }),
  makeApp({
    id: 6, name: 'Reflex Kuwait', category: 'Health & Fitness', tech: 'Swift · UIKit',
    color: '#EF4444', accent: '#DC2626', icon: 'RK',
    tagline: "Kuwait's premier health club, in your pocket.",
    description: "Mobile companion for Reflex Health Club — Kuwait's leading family entertainment and fitness institute. Members can explore and access the full range of club services including spa, swimming, cycling, and more.",
    features: [
      'Full club services directory',
      'SPA & wellness access',
      'Swimming & cycling activities',
      'Family entertainment hub',
      'Member access & info',
      'Service discovery & navigation',
    ],
    meta: { platform: 'iOS', languages: 'EN', year: '2022' },
    year: '2022',
    stores: { appStore: 'https://apps.apple.com/us/app/reflex-kuwait/id1640988212', playStore: null },
    get screenshots() {
      return [
        { label: 'Home', src: svgScreen(this.color, this.accent, 'Home', 0) },
        { label: 'Services', src: svgScreen(this.color, '#fca5a5', 'Services', 1) },
        { label: 'Activities', src: svgScreen(this.color, this.accent, 'Activities', 2) },
        { label: 'Members', src: svgScreen(this.color, '#fecaca', 'Members', 3) },
      ]
    },
  }),
]
