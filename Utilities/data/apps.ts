import { svgIcon } from '../utils/svg'

export interface AppStoreLinks {
  appStore: string | null;
  playStore: string | null;
}

export interface AppMeta {
  platform: string;
  languages: string;
}

export interface AppScreenshot {
  label: string;
  src: string;
}

export interface App {
  id: string;
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

const makeScreenshots = (id: string, labels: string[]): AppScreenshot[] =>
  labels.map((label, i) => ({ label, src: `/screenshots/${id}/${i + 1}.png` }))

const makeApp = (base: any): App => ({
  ...base,
  get iconImage() { return svgIcon(this.color, this.accent, this.icon) },
})

export const apps: App[] = [
  makeApp({
    id: 'secondhand-souq', name: 'SecondHand Souq', category: 'Marketplace', tech: 'SwiftUI',
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
    meta: { platform: 'iOS · macOS · visionOS', languages: 'EN + AR' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com/in/app/secondhand-souq/id6741193174', playStore: null },
    screenshots: makeScreenshots('secondhand-souq', ['Browse', 'Listing', 'Sell', 'Profile', 'Search']),
  }),
  makeApp({
    id: 'lorrynow', name: 'LorryNow', category: 'Logistics', tech: 'SwiftUI',
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
    meta: { platform: 'iOS', languages: 'EN + AR' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com/in/app/lorrynow/id6746252731', playStore: null },
    screenshots: makeScreenshots('lorrynow', ['Book', 'Track', 'Pricing', 'History', 'Wallet']),
  }),
  makeApp({
    id: 'vite-kuwait', name: 'Vite Kuwait', category: 'Events', tech: 'SwiftUI',
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
    meta: { platform: 'iOS', languages: 'EN + AR' },
    year: '2025',
    stores: { appStore: 'https://apps.apple.com/in/app/vite-kuwait/id6755060002', playStore: null },
    screenshots: makeScreenshots('vite-kuwait', ['Events', 'Guests', 'RSVPs', 'Tracking', 'Invites']),
  }),
  makeApp({
    id: 'fit-habibi', name: 'Fit Habibi', category: 'Health & Fitness', tech: 'SwiftUI',
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
    meta: { platform: 'iOS', languages: 'EN + AR' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com/in/app/fit-habibi/id6736990371', playStore: null },
    screenshots: makeScreenshots('fit-habibi', ['Dashboard', 'Programs', 'Progress', 'Schedule', 'Analytics']),
  }),
  makeApp({
    id: 'petbook-kuwait', name: 'Petbook Kuwait', category: 'Pet Services', tech: 'SwiftUI',
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
    meta: { platform: 'iOS', languages: 'EN + AR' },
    year: '2023',
    stores: { appStore: 'https://apps.apple.com/us/app/petbook-kuwait/id6476278399', playStore: null },
    screenshots: makeScreenshots('petbook-kuwait', ['Services', 'Book', 'Vets', 'Profile', 'Supplies']),
  }),
  makeApp({
    id: 'reflex-kuwait', name: 'Reflex Kuwait', category: 'Health & Fitness', tech: 'Swift · UIKit',
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
    meta: { platform: 'iOS', languages: 'EN' },
    year: '2022',
    stores: { appStore: 'https://apps.apple.com/us/app/reflex-kuwait/id1640988212', playStore: null },
    screenshots: makeScreenshots('reflex-kuwait', ['Home', 'Services', 'Activities', 'Members', 'Wellness']),
  }),
]
