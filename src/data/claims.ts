// Moonlight Peaks Compass — minimal claims registry
// Only source-log-backed claims used by pages.
// Does NOT contain raw research notes or full evidence.

// ─── Identity ───────────────────────────────────────────────────────────────
export const GAME_IDENTITY = {
  name: 'Moonlight Peaks',
  developer: 'Little Chicken Game Company',
  publisher: 'Marvelous / XSEED / Marvelous Europe',
  genre: 'Farming, Simulation, Indie',
  playerCount: '1 Player',
  source: 'source-log: moonlight-marvelous-usa-game-page',
  confidence: 'confirmed' as const,
} as const;

// ─── Core Premise ───────────────────────────────────────────────────────────
export const GAME_PREMISE = {
  description: 'A supernatural life-sim about life as a vampire in the town of Moonlight Peaks. Players raise mystical crops, make potions, cast spells, and befriend or romance werewolves, witches, and mermaids.',
  steamTagline: 'Show a skeptical father that a life of compassion is possible for the undead.',
  source: 'source-log: moonlight-official-site, moonlight-steam-store',
  confidence: 'confirmed' as const,
} as const;

// ─── Release Status ─────────────────────────────────────────────────────────
export const RELEASE_STATUS = {
  // US/EU/Steam primary launch
  primaryDate: 'July 7, 2026',
  primarySource: 'source-log: moonlight-official-site, moonlight-steam-store, moonlight-marvelous-usa-platforms-2026-03',
  // Clouded Leopard regional (Hong Kong / Taiwan / Korea Switch/Switch 2)
  regionalDate: 'July 9, 2026',
  regionalSource: 'source-log: moonlight-clouded-leopard-page',
  regionalPlatforms: 'Nintendo Switch / Nintendo Switch 2 (Hong Kong, Taiwan, Korea)',
  confidence: 'confirmed' as const,
  note: 'July 9 is specific to Clouded Leopard Entertainment\'s regional pages. Do not generalize to all regions.',
} as const;

// ─── Platform Status ────────────────────────────────────────────────────────
export const PLATFORM_STATUS = {
  platforms: [
    { id: 'steam',       name: 'Windows PC / Steam',  demo: true,  source: 'moonlight-steam-store, moonlight-official-site' },
    { id: 'switch',      name: 'Nintendo Switch',      demo: true,  source: 'moonlight-official-site, moonlight-marvelous-eu-demo-2026-06' },
    { id: 'switch2',     name: 'Nintendo Switch 2',    demo: true,  source: 'moonlight-marvelous-eu-demo-2026-06, moonlight-clouded-leopard-page' },
    { id: 'googleplay',  name: 'Google Play Games',    demo: false, source: 'moonlight-marvelous-usa-game-page' },
  ],
  source: 'source-log: moonlight-marvelous-usa-game-page, moonlight-marvelous-eu-demo-2026-06, moonlight-clouded-leopard-page',
  confidence: 'confirmed' as const,
} as const;

// ─── Demo Status ────────────────────────────────────────────────────────────
export const DEMO_STATUS = {
  hasDemo: true as const,
  demoPlatforms: ['Steam (Windows PC)', 'Nintendo Switch (also playable on Switch 2)'] as const,
  demoScope: 'Character creation, magical mini-games, interactions with town residents, and a deeper glimpse into the full game.',
  demoScopeSource: 'source-log: moonlight-marvelous-eu-demo-2026-06',
  demoNote: 'Demo availability and scope from official press releases. Exact demo walkthrough not published.',
  saveTransferConfirmed: false,
  saveTransferNote: 'Demo progress carryover has not been confirmed by official sources.',
  source: 'source-log: moonlight-official-site, moonlight-marvelous-eu-demo-2026-06',
  confidence: 'confirmed' as const,
} as const;

// ─── Official Post-Launch Updates ──────────────────────────────────────────
export const UPDATE_STATUS = {
  latestPatch: '1.1.44',
  patch141: '1.1.41',
  patch144: '1.1.44',
  patch141Published: 'July 15, 2026',
  patch144Published: 'July 16, 2026',
  knownIssuesPublished: 'July 9, 2026',
  patch138Published: 'July 10, 2026',
  fixes141: [
    'Loading improvements',
    'Storage improvements',
    'Quick-transfer improvements',
    'Seed-label fixes',
    'Embroidery-access improvements',
    'Bug fixes',
  ] as const,
  fixes144: [
    'Embroidery-table visibility fixes',
    'Loading fix after house upgrade',
    'Tree-seed planting and seasons fix',
    'Table or shelf inventory removal fix',
    'Crops growing on rainy nights fix',
    'Steam save-corruption fix when exiting during save',
  ] as const,
  fixes138: [
    'Recurring short freezes every 5-20 seconds',
    'Slow-walking state after exiting doors',
    'Nokturna soft lock during the new-card sequence',
  ] as const,
  platformRolloutSnapshot: {
    steam: '1.1.41 live worldwide',
    switch: '1.1.3 — update to follow',
    switch2: '1.1.3 — update to follow',
    googleplay: '1.1.3 — update to follow',
    note: 'Dated July 15 snapshot. Do not infer current platform versions.',
  } as const,
  futureUpdatesNote: 'Official page says other known issues remain under investigation; no dated roadmap or exact schedule is published.',
  officialTrailerUrl: 'https://www.youtube.com/watch?v=VL_15TiRRAM',
  officialTrailerViewsAtCheck: '24,578',
  sourceIds: [
    'moonlight-steam-known-issues-2026-07-09',
    'moonlight-steam-patch-1-1-38-2026-07-10',
    'moonlight-marvelous-patch-1-1-41-1-1-44-2026-07-15',
    'moonlight-youtube-release-date-trailer-2026-03',
  ] as const,
  confidence: 'confirmed' as const,
} as const;

// ─── Rating ─────────────────────────────────────────────────────────────────
export const GAME_RATING = {
  descriptors: ['Suggestive Themes', 'Use of Alcohol'],
  source: 'source-log: moonlight-marvelous-usa-game-page',
  confidence: 'confirmed' as const,
} as const;

// ─── Page Verification Status ───────────────────────────────────────────────
export const PAGE_STATUS = {
  'updates': {
    verificationStatus: 'official-confirmed',
    gameVersion: 'Patch 1.1.44 / post-launch',
    requiresPlaytest: false,
    claimIds: ['moonlight-known-issues-001', 'moonlight-patch-1-1-38-001', 'moonlight-patch-1-1-41-001', 'moonlight-patch-1-1-44-001', 'moonlight-update-outlook-001', 'moonlight-official-video-001'],
    sourceIds: ['moonlight-steam-known-issues-2026-07-09', 'moonlight-steam-patch-1-1-38-2026-07-10', 'moonlight-marvelous-patch-1-1-41-1-1-44-2026-07-15', 'moonlight-youtube-release-date-trailer-2026-03'],
  },
  'demo': {
    verificationStatus: 'official-confirmed',
    gameVersion: 'post-launch',
    requiresPlaytest: false,
    claimIds: ['moonlight-demo-001', 'moonlight-demo-002', 'moonlight-demo-003', 'moonlight-demo-004', 'moonlight-demo-005', 'moonlight-demo-carryover-status-001'],
    sourceIds: ['moonlight-official-site', 'moonlight-steam-store', 'moonlight-marvelous-eu-demo-2026-06', 'moonlight-steam-store-live-2026-07'],
  },
  'switch-steam': {
    verificationStatus: 'official-confirmed',
    gameVersion: 'post-launch',
    requiresPlaytest: false,
    claimIds: ['moonlight-platform-001', 'moonlight-switch-001', 'moonlight-switch-002'],
    sourceIds: ['moonlight-marvelous-usa-game-page', 'moonlight-marvelous-eu-demo-2026-06', 'moonlight-clouded-leopard-page'],
  },
  'release-date': {
    verificationStatus: 'official-confirmed',
    gameVersion: 'post-launch',
    requiresPlaytest: false,
    claimIds: ['moonlight-release-001', 'moonlight-release-002', 'moonlight-release-003', 'moonlight-regional-001'],
    sourceIds: ['moonlight-official-site', 'moonlight-steam-store', 'moonlight-marvelous-usa-platforms-2026-03', 'moonlight-clouded-leopard-page'],
  },
  'starter-checklist': {
    verificationStatus: 'source-backed-not-tested',
    gameVersion: 'post-launch',
    requiresPlaytest: true,
    claimIds: ['moonlight-demo-005', 'moonlight-features-001', 'moonlight-features-002', 'moonlight-demo-lead-001'],
    sourceIds: ['moonlight-official-site', 'moonlight-marvelous-eu-demo-2026-06', 'moonlight-pcgamer-demo-2026-06'],
    note: 'Checklist uses official facts and clearly labeled press leads. No exact route, gifts, crop tables, or walkthrough.',
  },
} as const;
