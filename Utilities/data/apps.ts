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

export interface AppCaseStudy {
  problem: string;
  ownership: string;
  technical: string;
  outcome: string;
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
  impact: string;
  description: string;
  features: string[];
  meta: AppMeta;
  year: string;
  stores: AppStoreLinks;
  screenshots: AppScreenshot[];
  caseStudy: AppCaseStudy;
  iconImage?: string;
}

const makeScreenshots = (id: string, labels: string[]): AppScreenshot[] =>
  labels.map((label, i) => ({ label, src: `/screenshots/${id}/${i + 1}.jpg` }))

type AppInput = Omit<App, 'iconImage'>

const makeApp = (base: AppInput): App => ({
  ...base,
  iconImage: svgIcon(base.color, base.accent, base.icon),
})

export const apps: App[] = [
  makeApp({
    id: 'lorrynow', name: 'SwiftHaul', category: 'Logistics', tech: 'SwiftUI',
    color: '#F97316', accent: '#EA580C', icon: 'LN',
    tagline: 'On-demand logistics booking for time-sensitive moves.',
    impact: 'Built the customer-facing booking, tracking, wallet, and bilingual service flows for a live logistics marketplace.',
    description: 'A production logistics app for Kuwait customers booking transport across multiple lorry types. The experience needed to feel fast, predictable, and trustworthy from quote selection through driver tracking and payment.',
    caseStudy: {
      problem: 'Customers needed a fast, trustworthy way to book transport, compare lorry options, configure helpers, and track active moves without operational back-and-forth.',
      ownership: 'Owned customer-facing booking, tracking, wallet, service configuration, bilingual flows, and release support for the live iOS product.',
      technical: 'Built SwiftUI flows around service selection, pricing state, driver tracking, wallet interactions, API integration, and English/Arabic localization.',
      outcome: 'A live App Store logistics product with booking and tracking workflows ready for real customer operations.',
    },
    features: [
      'Instant booking across open box, closed box, and full lorry options',
      'Real-time driver tracking for active moves',
      'Transparent pricing, helper add-ons, and service configuration',
      'Secure wallet and payment-ready flows',
      'English and Arabic localization',
      'App Store release support for a live client product',
    ],
    meta: { platform: 'iOS', languages: 'EN + AR' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com/in/app/lorrynow/id6746252731', playStore: null },
    screenshots: makeScreenshots('lorrynow', ['Book', 'Track', 'Pricing', 'History', 'Wallet']),
  }),
  makeApp({
    id: 'secondhand-souq', name: 'LoopMarket', category: 'Marketplace', tech: 'SwiftUI',
    color: '#10B981', accent: '#059669', icon: 'SS',
    tagline: 'A bilingual marketplace for pre-owned goods in Kuwait.',
    impact: 'Owned a multi-platform SwiftUI marketplace release across iPhone, macOS, and visionOS with localized buyer and seller flows.',
    description: 'A secondhand marketplace designed for browsing, listing, and discovering pre-owned goods. The product required clear trust cues, low-friction listing creation, and a codebase that could scale across Apple platforms.',
    caseStudy: {
      problem: 'The product needed low-friction listing, browsing, and search flows that felt clear for both buyers and sellers in a bilingual marketplace.',
      ownership: 'Owned buyer and seller flows, listing creation, discovery, localization, platform readiness, and App Store release lifecycle support.',
      technical: 'Used one SwiftUI codebase across iPhone, macOS, and visionOS, with reusable marketplace patterns and privacy-conscious permission handling.',
      outcome: 'A live App Store marketplace with localized flows and multi-platform Apple support from a shared SwiftUI foundation.',
    },
    features: [
      'Listing creation, browsing, search, and discovery flows',
      'English and Arabic localization',
      'iPhone, macOS, and visionOS from one SwiftUI codebase',
      'Privacy-conscious data and permission handling',
      'Buyer and seller confidence flows',
      'App Store release lifecycle ownership',
    ],
    meta: { platform: 'iOS · macOS · visionOS', languages: 'EN + AR' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com/in/app/secondhand-souq/id6741193174', playStore: null },
    screenshots: makeScreenshots('secondhand-souq', ['Browse', 'Listing', 'Sell', 'Profile', 'Search']),
  }),
  makeApp({
    id: 'vite-kuwait', name: 'Gatherly', category: 'Events', tech: 'SwiftUI',
    color: '#8B5CF6', accent: '#7C3AED', icon: 'VK',
    tagline: 'Digital invitation and RSVP management for events.',
    impact: 'Delivered guest, RSVP, and attendance workflows that help event teams coordinate invites without spreadsheet-heavy operations.',
    description: 'An event invitation platform for Kuwait, built around guest lists, digital invites, RSVPs, and attendance coordination. The app turns a high-touch service process into a clean mobile workflow for clients and organizers.',
    caseStudy: {
      problem: 'Event teams needed to manage guest lists, invitations, RSVPs, and attendance without spreadsheet-heavy coordination.',
      ownership: 'Delivered guest, RSVP, invite, and attendance workflows for organizer-facing event operations.',
      technical: 'Built SwiftUI event flows with guest state, invitation details, RSVP tracking, API-backed coordination, and English/Arabic usage patterns.',
      outcome: 'A live mobile workflow that gives event teams cleaner visibility into invite and attendance operations.',
    },
    features: [
      'Digital invitation creation and delivery',
      'Guest list management',
      'RSVP tracking',
      'Attendance coordination',
      'Event detail sharing',
      'English and Arabic event workflows',
    ],
    meta: { platform: 'iOS', languages: 'EN + AR' },
    year: '2025',
    stores: { appStore: 'https://apps.apple.com/in/app/vite-kuwait/id6755060002', playStore: null },
    screenshots: makeScreenshots('vite-kuwait', ['Events', 'Guests', 'RSVPs', 'Tracking', 'Invites']),
  }),
  makeApp({
    id: 'fit-habibi', name: 'MotionFit', category: 'Health & Fitness', tech: 'SwiftUI',
    color: '#EC4899', accent: '#DB2777', icon: 'FH',
    tagline: 'Coach and trainee workflows for modern fitness teams.',
    impact: 'Built mobile workflows for coaches, trainees, programs, schedules, and progress tracking in a bilingual fitness product.',
    description: 'A fitness platform for coaches and trainees in the Middle East. The product supports client management, workout planning, appointment scheduling, and progress visibility across both coach-facing and trainee-facing journeys.',
    caseStudy: {
      problem: 'Coaches and trainees needed shared mobile workflows for programs, schedules, client progress, and recurring fitness operations.',
      ownership: 'Built coach and trainee flows across client management, workout planning, appointment scheduling, progress tracking, and bilingual product surfaces.',
      technical: 'Implemented reusable SwiftUI patterns for repeated fitness workflows, API-backed data views, scheduling state, and localized screens.',
      outcome: 'A live App Store fitness product supporting both operational coach work and trainee-facing progress visibility.',
    },
    features: [
      'Coach-facing client management dashboard',
      'Workout creation and exercise libraries',
      'Training program scheduling',
      'Client progress analytics',
      'Subscription and session management',
      'English and Arabic localization',
      'Reusable SwiftUI patterns for repeated fitness workflows',
    ],
    meta: { platform: 'iOS', languages: 'EN + AR' },
    year: '2024',
    stores: { appStore: 'https://apps.apple.com/in/app/fit-habibi/id6736990371', playStore: null },
    screenshots: makeScreenshots('fit-habibi', ['Dashboard', 'Programs', 'Progress', 'Schedule', 'Analytics']),
  }),
  makeApp({
    id: 'petbook-kuwait', name: 'Pawline', category: 'Pet Services', tech: 'SwiftUI',
    color: '#F59E0B', accent: '#D97706', icon: 'PK',
    tagline: 'Pet services, booking, and supplies in one mobile app.',
    impact: 'Shipped marketplace-style booking flows for grooming, veterinary care, walking, sitting, training, and pet supplies.',
    description: 'A pet services marketplace for Kuwait customers who need booking, service discovery, and supplies in one place. The app brings multiple appointment-heavy categories into a single mobile experience.',
    caseStudy: {
      problem: 'Customers needed one place to discover and book several appointment-heavy pet services while also browsing pet supplies.',
      ownership: 'Shipped booking and discovery flows across grooming, veterinary care, walking, sitting, training, and supplies.',
      technical: 'Built SwiftUI marketplace-style flows for service categories, scheduling, appointment management, profile state, and product discovery.',
      outcome: 'A live App Store pet services product that consolidates multiple service categories into one mobile experience.',
    },
    features: [
      'Grooming appointment booking',
      'Pet sitting and walking services',
      'Veterinary care access',
      'Training services',
      'Pet supplies store',
      'Easy scheduling and appointment management',
    ],
    meta: { platform: 'iOS', languages: 'EN + AR' },
    year: '2023',
    stores: { appStore: 'https://apps.apple.com/us/app/petbook-kuwait/id6476278399', playStore: null },
    screenshots: makeScreenshots('petbook-kuwait', ['Services', 'Book', 'Vets', 'Profile', 'Supplies']),
  }),
  makeApp({
    id: 'reflex-kuwait', name: 'Wellnest', category: 'Health & Fitness', tech: 'Swift · UIKit',
    color: '#EF4444', accent: '#DC2626', icon: 'RK',
    tagline: 'A mobile companion for Kuwait health club members.',
    impact: 'Delivered a UIKit-based member app that makes club services easier to discover, navigate, and access on mobile.',
    description: 'A mobile companion for Reflex Health Club, designed to help members explore services and activities across wellness, fitness, and family entertainment. The app focuses on clear navigation and approachable service discovery.',
    caseStudy: {
      problem: 'Health club members needed a clearer mobile way to explore services, activities, wellness options, and member information.',
      ownership: 'Delivered UIKit service discovery, navigation, member information, and release-ready app surfaces for an established client brand.',
      technical: 'Built UIKit screens for service directories, activities, wellness content, member access, and brand-aligned navigation patterns.',
      outcome: 'A live App Store member companion that makes club services easier to find and access on mobile.',
    },
    features: [
      'Full club services directory',
      'Spa and wellness access',
      'Swimming and cycling activities',
      'Family entertainment hub',
      'Member access and information',
      'Service discovery and navigation',
      'UIKit implementation for an established client brand',
    ],
    meta: { platform: 'iOS', languages: 'EN' },
    year: '2022',
    stores: { appStore: 'https://apps.apple.com/us/app/reflex-kuwait/id1640988212', playStore: null },
    screenshots: makeScreenshots('reflex-kuwait', ['Home', 'Services', 'Activities', 'Members', 'Wellness']),
  }),
]
