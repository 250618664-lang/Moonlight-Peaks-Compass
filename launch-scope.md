# Moonlight Peaks Launch Scope

Status: PLAN_READY_DRAFT  
Mode: independent fast-test site v0.1  
Do not build until accepted.

## Launch Decision

This candidate can be built as a fast-test site if the scope stays narrow:

```text
Moonlight Peaks Launch & Demo Checklist
```

Do not build a broad guide/wiki/database site in v0.1.

## First Publishable Slice

Launch with 10 pages:

1. `/`
2. `/demo/`
3. `/switch-steam/`
4. `/release-date/`
5. `/starter-checklist/`
6. `/sources/`
7. `/about/`
8. `/editorial/`
9. `/contact/`
10. `/privacy/`

The five core pages must contain real player value:

- status matrix;
- platform matrix;
- regional release-date explanation;
- starter checklist;
- source/HOLD table.

## Required Components

- Launch & Demo Status Matrix.
- Platform availability matrix.
- Regional date note.
- Source confidence chips: official, platform, press lead, community lead, hold.
- Held-claims table.
- Last checked date.

## Forbidden First-Version Content

- Romance gifts.
- Dating routes.
- Full character list.
- Crop / recipe / price / growth-time tables.
- Exact demo walkthrough.
- Save transfer / progress carryover claim.
- Official/wiki/media images.
- Ads or analytics.
- A domain purchase.

## Validator Requirements

Add a validator that fails if published content contains unsupported risky phrases such as:

```text
best gifts
all gifts
romance guide
dating route
all characters
all crops
crop prices
growth time
recipe list
full walkthrough
demo save carries over
save transfer confirmed
official wiki
```

Allow these phrases only inside explicit HOLD/source-risk sections if the validator supports scoped exceptions; otherwise use safer wording.

## Build Requirements For Claude Code

- Create an independent Astro + TypeScript static site under `sites/moonlight-peaks`.
- This must not reuse another site's Git repo, Vercel project, GSC property, domain, or site identity.
- Public repository should include only `sites/moonlight-peaks` site runtime files.
- Do not upload `research/`, `runs/`, `data/`, `docs/`, or `.agents/`.
- Use no external images.
- Keep ads and analytics disabled.
- Include `robots.txt` and `sitemap-index.xml`.
- Include build/check/validate commands.

## Acceptance Criteria

- `npm run build` passes.
- `npm run check` passes if Astro check is configured.
- `npm run validate` passes.
- Generated sitemap includes the 10 launch URLs.
- No unsupported romance/crop/character/walkthrough/save-transfer claims.
- No official, Steam, wiki, Fandom, or press images are used.
- Mobile layout has no horizontal overflow.
- First viewport shows a usable status/checklist interface, not a marketing-only hero.

## Current Recommendation

Can build after user approval.

Do not buy domain at launch. Use Vercel temporary domain, then D3/D7/D14 GSC review.

## 2026-07-13 Post-Launch Superseding Scope

The site is live on `peakscompass.com` and has entered constrained
`SCALE_CONTENT`. The current public scope is 11 pages, including `/updates/`.

Approved maintenance actions:

- strengthen `/updates/` with registered official support and patch notices;
- strengthen `/demo/` with the direct unresolved carryover status;
- link official video sources without copying thumbnails, frames, or transcripts;
- use third-party videos, press, community posts, and telemetry only for private
  demand discovery unless a claim is independently verified.

Still forbidden: a separate save-transfer page, community workarounds, exact
walkthroughs, gifts, crops, recipes, maps, tier lists, best builds, and
unlicensed media.
