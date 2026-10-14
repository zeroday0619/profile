This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## TypeScript tooling

Type checking and Next.js builds use TypeScript 7. The `lint` script uses [Oxlint](https://oxc.rs/docs/guide/usage/linter/migrate-from-eslint.html), which parses TypeScript without the TypeScript 6 compiler API. `.oxlintrc.json` preserves the previous Next.js, React, accessibility, and TypeScript lint rules. JavaScript plugins retain the React Hooks checks and rules that are not implemented natively by Oxlint. ESLint remains a development dependency to satisfy those plugins' peer dependency.

Run `corepack yarn typecheck`, `corepack yarn lint`, and `corepack yarn build` to validate updates. Preserve `yarn.lock` when installing dependencies.

## Cloudflare build compatibility

The Cloudflare scripts require Node.js 22.15+ on the 22.x release line or Node.js 23.5+ and run OpenNext through `scripts/opennext.mjs`. Its module loader applies the [upstream preview manifest fix](https://github.com/opennextjs/opennextjs-cloudflare/pull/1356) in memory because OpenNext 1.20.11 otherwise fails to load Next.js 16.4's `server/preview-props.json`. The loader preserves the actual manifest contents and rejects unexpected adapter changes. Remove the wrapper once the installed adapter includes the fix.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
