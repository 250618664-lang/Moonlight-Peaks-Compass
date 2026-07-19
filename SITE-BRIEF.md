# Moonlight Peaks Fast-Test Site Brief

Status: PLAN_READY_DRAFT  
Created: 2026-07-02  
Mode: independent fast-test site  
Working title: Moonlight Peaks Compass  
Repository: create a new independent public repository only for this site code  
Default deploy target: Vercel temporary domain  
Domain: do not buy at D0  
Ads: off  
Analytics: off unless separately approved  

## Positioning

Build a narrow launch-window fast-test site for:

```text
Moonlight Peaks Launch & Demo Checklist
```

The site helps players quickly answer:

- Is there a demo?
- Which platforms have the demo?
- When does Moonlight Peaks launch?
- What platform/date differences should I know?
- Which details are confirmed, and which are not safe to assume yet?

This is not a full wiki, database, romance guide, crop guide, or walkthrough site.

## Core Player Problem

Players are seeing launch/demo/platform interest for `Moonlight Peaks` and need a compact, source-backed checklist before playing or buying.

## First Player-Usable Component

`Launch & Demo Status Matrix`

Fields:

- platform;
- demo available;
- launch date / regional note;
- source confidence;
- player action;
- last checked date.

## Evidence Boundary

Use only facts registered in:

```text
research/moonlight-peaks/claims.yaml
research/moonlight-peaks/source-log.csv
research/moonlight-peaks/content-gaps.md
research/moonlight-peaks/asset-rights.csv
```

## Allowed First-Version Facts

- Moonlight Peaks identity and supernatural life-sim positioning.
- July 7, 2026 launch for official US/EU/Steam context.
- July 9, 2026 Clouded Leopard regional Switch/Switch 2 context.
- Platforms listed by official sources: Windows PC / Steam, Nintendo Switch, Nintendo Switch 2, Google Play Games.
- Demo availability on Steam and Nintendo Switch.
- Officially described broad demo scope: character creation, magical mini-games, town-resident interactions, deeper glimpse into the full game.
- Officially described broad premise/features: vampire life sim, mystical crops, potion-making, spell-casting, befriending/romancing supernatural locals.

## Must Hold

- romance gifts;
- dating routes;
- full character database;
- crop, recipe, price, or growth-time tables;
- exact demo walkthrough;
- save transfer / demo progress carryover;
- screenshots, logos, key art, wiki images, and media images;
- any fact sourced only from Reddit, Discord, YouTube, wiki.gg, Fandom, or competitor guides.

## Visual Direction

Use a quiet gothic-cozy layout with text-first status cards. Do not use official images or downloaded media. Avoid a full-screen decorative hero. The first viewport should show the status matrix and primary checklist entry.

## Build Constraints

- Astro + TypeScript static site preferred, consistent with existing fast-test sites.
- No database.
- No external image assets.
- No ads.
- No cookies or tracking.
- Public repo must contain only the site code. Do not upload `research/`, `runs/`, `data/`, `docs/`, or `.agents/`.
- Add validators to block forbidden phrases and unsupported content.

## Current Decision

Proceed to build only after user accepts this launch scope.

## 2026-07-19 Superseding Live-Site Status

The historical fast-test brief above is retained for provenance but is no
longer the active product state. Moonlight Peaks has released, the formal domain
`peakscompass.com` is live, and the site is a continuing Guide Hub under
targeted V2 maintenance.

Active decision:

```text
SCALE_CONTENT / TARGETED_V2_RETROFIT
```

Use `BUILD-HANDOFF.md` and
`runs/2026-07-19-moonlight-peaks-d16-v2-review.md` as the current implementation
scope. Do not restore pre-launch, temporary-domain, ads-off, or fast-test copy.
No new route is approved in this batch.
