# ProjectACE — Research & Innovation Platform

ProjectACE is a student-led science, engineering, research, and creative technology initiative. The repository contains the original static landing page and a Next.js App Router implementation on the feature/ace-research-platform branch.

## Technology

- Next.js App Router and React with TypeScript
- Tailwind CSS 4 via PostCSS, plus a small custom CSS design system
- Recharts for charts in the browser-based CSV explorer
- Structured content in lib/data.ts, designed to move to a CMS or database later only if needed
- Node test runner through tsx for CSV parsing and content-integrity checks

No database, authentication system, paid API, or external submission endpoint is required for the current features.

## Requirements and local development

Use Node.js 20.9+ and npm.

    npm install
    npm run dev

Open http://localhost:3000.

## Checks

    npm run lint
    npm run typecheck
    npm test
    npm run build

Do not report a check as passing unless you ran it successfully.

## Routes

- / — Homepage
- /departments — All six departments
- /departments/aeroace
- /departments/aquaace
- /departments/landace
- /departments/roboace
- /departments/astroace
- /departments/ace-canvas
- /projects — Searchable and filterable project catalogue
- /projects/[slug] — Project details and limitations
- /research — Source-first resource directory
- /datasets — Data provider links and provenance guidance
- /lab — CSV explorer and illustrative orbital geometry demo
- /people — Empty state until a consented public directory is configured
- /news — Empty state until dated announcements are added
- /join — Department discovery and external form setup
- /about — Mission and research approach
- /contact — Contact and privacy configuration

## Environment variables

Copy .env.example to .env.local for local development, if needed. Never commit .env.local.

- APPLICATION_FORM_URL — optional HTTPS URL for a real, externally hosted application form. If absent or invalid, the Join page explains that the endpoint is not configured.
- CONTACT_EMAIL — optional approved public contact email. If absent, the Contact page shows configuration instructions.

Add approved values through Vercel Project Settings → Environment Variables. These are public application/contact configuration values, not API secrets. Never put private credentials into client-side code or commit them to GitHub.

## Scientific data integrity

- Proposed ideas and planned workflows are not completed results.
- Demonstration and simulated content is labelled.
- Basic visual checks do not establish that water is safe to drink.
- Document dataset sources, retrieval dates, units, methods, missing values, and limitations.
- Add team profiles only with consent; do not fabricate contributor names or roles.
- CSV uploads are processed in the local browser and are not sent to a ProjectACE endpoint. The tool accepts files up to 5 MB, 50,000 rows, and 100 columns.

The research directory links to external starting points. No live NASA, NOAA, SIMBAD, or mapping API integration is enabled by this implementation.

## GitHub workflow

Substantial changes should be developed on a feature branch and reviewed in a pull request. This implementation is on feature/ace-research-platform to keep it separate from main.

The GitHub Actions workflow is set to install dependencies, lint, type check, run unit tests, and build on pushes to main/feature branches and pull requests. Its results still need to be observed in the GitHub Actions tab after the branch is pushed.

## Vercel deployment

1. Review the feature branch and open a pull request to main.
2. In Vercel, choose Add New → Project and import TheProjectACE/ProjectACE.
3. Select the Next.js framework preset. Use npm run build; leave the output directory managed by Next.js.
4. Configure APPLICATION_FORM_URL and CONTACT_EMAIL only when real endpoints have been approved.
5. Deploy a preview and test homepage navigation, all department pages, project filtering, CSV upload/chart/export, and mobile layouts.
6. Promote to production only after checks pass. If a release fails, use Vercel deployment history to promote the last known-good deployment or redeploy the prior production commit.

Do not assume a deployment is live or a domain is connected until Vercel confirms it in the dashboard.

## Current limitations

- Project and research content is local structured data; there is no admin CMS.
- No authentication, database, private application storage, contact-message processing, or role management is included.
- News and public people lists intentionally start empty.
- Real external scientific APIs, maps, astronomy catalogue queries, and validated engineering simulators are future work.
- The environment used to create this branch does not run npm install or a Next.js production build, so build verification remains outstanding.
