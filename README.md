# Finance Calculators Hub

Finance Calculators Hub is a public utility website built with Next.js for US-focused financial calculators. The project currently includes interactive calculators for mortgages, auto loans, retirement projections, savings goals, and student loan payoff estimates, along with trust, policy, SEO, and structured-data pages needed for an initial public release.

The calculators and content are educational estimates only. The site does not provide financial, tax, legal, or investment advice.

## Local setup

1. Install dependencies:

```bash
pnpm install
```

2. Copy `.env.example` to `.env.local` and adjust values as needed for local development:

```bash
cp .env.example .env.local
```

Example local values:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=hello@your-domain.com
```

3. Start the development server:

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Development commands

Start local development:

```bash
pnpm dev
```

Run lint:

```bash
pnpm lint
```

Run TypeScript type-checking:

```bash
pnpm exec tsc --noEmit
```

Attempt a production build:

```bash
pnpm build
```

## Deployment on Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project into Vercel.
3. Set the production environment variables in Vercel before the first public deployment:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (when ready)
4. Deploy the default branch.
5. Confirm that:
   - the production domain is correct
   - the contact email is no longer a placeholder
   - sitemap and robots resolve to the production domain
   - policy pages and structured data are visible in the deployed build

## Production readiness notes

### Where to change the site URL

Primary location:

- Vercel environment variable: `NEXT_PUBLIC_SITE_URL`

Fallback code location:

- [src/lib/site.ts](./src/lib/site.ts)

This value is used by metadata, sitemap, robots, and structured data helpers.

### Where to change the contact email

Primary location:

- Vercel environment variable: `NEXT_PUBLIC_CONTACT_EMAIL`

Fallback code location:

- [src/lib/site.ts](./src/lib/site.ts)

The contact page reads from the shared site config.

### Where to add Google Search Console verification

Add the verification value in:

- Vercel environment variable: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

It is read in:

- [src/app/layout.tsx](./src/app/layout.tsx)

Before launch, set this in Vercel Environment Variables rather than relying on code defaults.

### Where to add Google AdSense later

Recommended future integration point:

- [src/app/layout.tsx](./src/app/layout.tsx)

If AdSense is added later, place the verification or script include in the root layout or a dedicated analytics/ads component. Review privacy-policy, terms, and any cookie/consent requirements before enabling ads in production.

When you add AdSense, configure the production values in Vercel Environment Variables and update the privacy-policy and any consent flow as needed.

## Placeholder values to replace before launch

- `hello@your-domain.com`
- fallback domain values such as `https://finance-calculators-hub.vercel.app`
- local development URL references such as `http://localhost:3000`

At minimum, replace the contact email and production site URL before publishing the first live version.
