# Repository Guidelines

## Project Overview

- This repository contains a bilingual personal profile site built with Next.js 16, React 19, and TypeScript.
- It uses the Pages Router. Route components live in `pages/`, shared UI lives in `components/`, and global styles live in `styles/globals.css`.
- The site targets Cloudflare Workers through OpenNext. Deployment configuration lives in `open-next.config.ts` and `wrangler.jsonc`.

## Development

- Preserve `yarn.lock` as the dependency lockfile. Do not add `package-lock.json` or another lockfile.
- Use Corepack-managed Yarn when Yarn is not available directly: `corepack yarn <command>`.
- Start the local development server with `corepack yarn dev`.
- Build the Next.js application with `corepack yarn build`.
- Run ESLint with `corepack yarn lint`.
- Run the TypeScript check with `corepack yarn typecheck`.
- Use the OpenNext scripts only for Cloudflare-specific work: `preview`, `deploy`, `upload`, and `cf-typegen`.

## Code Conventions

- Keep TypeScript strict and preserve the `@/*` import alias.
- Follow the existing functional React component style and default-export page components.
- Keep user-facing profile content synchronized in Korean and English through `LanguageContext` and the existing `t(korean, english)` pattern.
- Use `DESIGN.md` as the visual authority: `#76b900` accent, black hero/header/footer chapters, flat hairline cards, 2px radii, and no decorative gradients or card shadows.
- Use `next/image` for local images unless an external source cannot be handled by the configured image policy.
- Preserve accessible labels, alternative text, keyboard behavior, and `noopener noreferrer` on external links.
- Do not expose or copy values from `.dev.vars`, environment files, or Cloudflare secrets.

## Validation

- For TypeScript or React changes, run `corepack yarn typecheck` and `corepack yarn lint`.
- For routing, configuration, dependency, or deployment changes, also run `corepack yarn build`.
- For visible UI changes, verify both Korean and English, light and dark themes, and desktop and mobile layouts.
- Report checks that were not run and do not treat lint or type checks as runtime verification.

## Change Scope

- Keep changes focused on the requested behavior.
- Do not add production dependencies without approval.
- Do not edit generated or ignored output under `.next/`, `.open-next/`, `.wrangler/`, or `node_modules/`.
- Use Conventional Commits for commit subjects when a commit is requested.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
