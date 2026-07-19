// Moonlight Peaks Compass — site registry
// Minimal registry for page运行 and validator needs only.
// Does NOT contain research notes, screenshots, or full source-log.

export const SITE = {
  title: 'Moonlight Peaks Compass',
  description: 'Unofficial post-launch guide hub for Moonlight Peaks. Official updates, demo status, platform availability, and release dates — source-backed only, not affiliated with Little Chicken Game Company or Marvelous.',
  mode: 'formal-domain',
  theme: 'moonlight-gothic',
  ads: true,
  analytics: false,
  gameName: 'Moonlight Peaks',
  platform: 'PC / Switch / Switch 2 / Google Play',
  publisher: 'Marvelous / XSEED / Little Chicken Game Company',
  developer: 'Little Chicken Game Company',
  gameId: '2209900',
  // Evidence pack retrieval date
  lastChecked: '2026-07-19',
  gameVersion: 'post-launch',
  launchDate: '2026-07-07',
  demoReleaseDate: '2026-06',
  officialUrl: 'https://www.moonlightpeaks.com/',
  steamUrl: 'https://store.steampowered.com/app/2209900/Moonlight_Peaks/',
  steamDemoUrl: 'https://store.steampowered.com/app/2209900/Moonlight_Peaks/',
  // Pages in this build (11 pages)
  pages: [
    { url: '/',                        title: 'Home',                   label: 'Hub' },
    { url: '/updates/',               title: 'Official Updates',        label: 'Updates' },
    { url: '/demo/',                   title: 'Demo Status',            label: 'Demo' },
    { url: '/switch-steam/',           title: 'Platform Status',        label: 'Platforms' },
    { url: '/release-date/',           title: 'Release Date',            label: 'Release' },
    { url: '/starter-checklist/',      title: 'Starter Checklist',       label: 'Checklist' },
    { url: '/sources/',                title: 'Sources',                label: 'Trust' },
    { url: '/about/',                  title: 'About',                  label: 'Policy' },
    { url: '/editorial/',              title: 'Editorial Policy',        label: 'Standards' },
    { url: '/contact/',                title: 'Contact',                 label: 'Contact' },
    { url: '/privacy/',                title: 'Privacy',                label: 'Privacy' },
  ] as const,
} as const;

export const NAV = [
  { url: '/updates/',          label: 'Updates' },
  { url: '/demo/',             label: 'Demo' },
  { url: '/switch-steam/',     label: 'Platforms' },
  { url: '/release-date/',     label: 'Release' },
  { url: '/starter-checklist/', label: 'Checklist' },
  { url: '/sources/',          label: 'Sources' },
] as const;
