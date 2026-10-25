// Bundles the resume JSX with esbuild and renders it to a PDF via @react-pdf/renderer.
// Usage: node scripts/render-resume.mjs
import { build } from 'esbuild';
import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const entry = path.join(root, 'scripts/resume-entry.jsx');
const outDir = path.join(root, '.resume-build');
const bundle = path.join(outDir, 'resume-bundle.mjs');
const pdf = path.join(outDir, 'resume.pdf');

mkdirSync(outDir, { recursive: true });

await build({
  entryPoints: [entry],
  outfile: bundle,
  bundle: true,
  format: 'esm',
  platform: 'node',
  packages: 'external',
  jsx: 'automatic',
  logLevel: 'warning',
});

execFileSync(process.execPath, [bundle, pdf], { stdio: 'inherit' });
