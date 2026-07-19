/**
 * validate-content.js
 * Moonlight Peaks Compass — content validation
 *
 * Checks built HTML output for forbidden phrases that must not appear
 * outside their acceptable context (HOLD / not confirmed / needs playtest).
 * Uses simple string includes so HTML markup between words does not break detection.
 * Run after: npm run build
 */

import { readFileSync, readdirSync } from 'fs';
import { join, resolve } from 'path';

const DIST_DIR = resolve('dist');

// Forbidden phrases — never publish these without proper context markers
const BANNED = [
  // Romance / dating
  'best gifts',
  'all gifts',
  'gift preferences',
  'romance guide',
  'dating route',
  'heart events',
  'romance options',
  // Character / villager
  'all characters',
  'full character list',
  'all villagers',
  'villager list',
  // Crops / recipes / economy
  'all crops',
  'crop prices',
  'crop list',
  'growth time',
  'recipe list',
  'all recipes',
  'crop table',
  // Walkthrough
  'full walkthrough',
  'exact walkthrough',
  'complete walkthrough',
  'walkthrough',
  // Save / progress
  'demo save carries over',
  'demo save does not carry over',
  'save transfer confirmed',
  'cross-save',
  'progress carries over',
  'demo progress carryover',
  // Wiki / Fandom
  'official wiki',
  'from the wiki',
  'wiki says',
  // Screenshots / media
  'official screenshot',
  'official image',
  'steam screenshot',
  'steam capsule',
  // Misc risky
  'hands-on tested',
  'hands on tested',
  'tested by us',
  'we tested',
  'I tested',
  'verified by us',
  'official interactive map',
  'exact puzzle solution',
  'best build',
  'best class',
  'tier list',
  'known issues',
];

// Context keywords that make a forbidden phrase acceptable.
// Must appear within 500 chars (before or after) the phrase.
const CONTEXT_KEYWORDS = [
  'not confirmed',
  'cannot verify',
  'cannot confirm',
  'pending verification',
  'not verified',
  'cannot be confirmed',
  'community lead',
  'lead only',
  'unverified',
  'mislead',
  'not publish',
  'do not publish',
  'never publish',
  'what we do not',
  'what we never',
  'not published',
  'cannot publish',
  'verify first',
  'check first',
  'not yet confirmed',
  'not yet tested',
  'not yet hands-on',
  'not yet playtested',
  'not hands-on tested',
  'not playtested',
  'needs hands-on',
  'requires hands-on',
  'needs playtest',
  'requires playtest',
  'untested',
  'not officially confirmed',
  'not final',
  'source-backed',
  'needs in-game',
  'requires in-game',
  'needs gameplay',
  'not played',
  'pending',
  'needs playtest',
  'not playtested',
  'source-backed not tested',
  'untested',
  'held',
  'not published yet',
  'not yet published',
  'not on this site',
  'on hold',
  'why held',
  'publication condition',
  'held until',
  'requires official',
  'needs official',
  'official steam announcement',
  'official steam patch notes',
  'official steam known issues',
  'moonlight-steam-known-issues-2026-07-09',
  'not yet available',
  'has not been confirmed',
  'not been officially',
  'do not assume',
  'HOLD',
  'no detailed',
  'not published',
  'not covered',
  'not included',
  'official steam known issues',
  'known issues notice',
  'official known issues',
  'known issues under investigation',
  'known issues are still under investigation',
  'still under investigation',
  'registered in this guide',
  'no registered first-party',
  'no direct first-party',
  'official patch page',
  'unresolved',
  'official source confirms',
  'official steam announcements',
  'no walkthrough',
  'not a walkthrough',
];

let errors = 0;
let pagesChecked = 0;

function scanFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const rel = filePath.replace(DIST_DIR, '');

  for (const phrase of BANNED) {
    let pos = 0;
    while (true) {
      const idx = content.toLowerCase().indexOf(phrase.toLowerCase(), pos);
      if (idx === -1) break;
      pos = idx + 1;

      const beforeStart = Math.max(0, idx - 500);
      const afterEnd = Math.min(content.length, idx + phrase.length + 500);

      const beforeSlice = content.slice(beforeStart, idx + phrase.length).toLowerCase();
      const afterSlice = content.slice(idx, afterEnd).toLowerCase();

      const hasContext = CONTEXT_KEYWORDS.some(kw =>
        beforeSlice.includes(kw) || afterSlice.includes(kw)
      );

      if (!hasContext) {
        const snippetStart = Math.max(0, idx - 80);
        const snippetEnd = Math.min(content.length, idx + phrase.length + 80);
        const snippet = content.slice(snippetStart, snippetEnd).replace(/\n/g, ' ').trim();
        console.error(`[VIOLATION] ${rel}`);
        console.error(`  Forbidden phrase: "${phrase}"`);
        console.error(`  Context: ...${snippet}...`);
        errors++;
      }
    }
  }
  pagesChecked++;
}

function walkDir(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full);
    } else if (entry.name.endsWith('.html')) {
      scanFile(full);
    }
  }
}

try {
  walkDir(DIST_DIR);
} catch (err) {
  if (err.code === 'ENOENT') {
    console.error('Error: dist/ directory not found. Run npm run build first.');
    process.exit(1);
  }
  throw err;
}

console.log(`\nValidated ${pagesChecked} pages against ${BANNED.length} forbidden phrases.`);
if (errors > 0) {
  console.error(`\n❌ ${errors} violation(s) found. Fix before deploying.`);
  process.exit(1);
} else {
  console.log('\n✅ No forbidden phrase violations found.');
  process.exit(0);
}
