# College Discovery Platform

A full-stack college discovery and decision platform built for the internship demo task.

## Chosen Track

Track B: College Discovery Platform.

## Product Scope

The MVP helps students:

- Search and filter colleges.
- View college detail pages.
- Compare 2-3 colleges.
- Get college suggestions from a simple predictor tool.

## Planned Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Node.js APIs
- PostgreSQL
- Prisma

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run lint checks:

```bash
npm run lint
```

Validate the Prisma schema:

```bash
npm run db:validate
```

Generate the Prisma client:

```bash
npm run db:generate
```

Push the schema and seed data after setting `DATABASE_URL`:

```bash
npm run db:push
npm run db:seed
```

## Core Features

- College listing with search, filters, and pagination.
- College detail page with overview, courses, placements, and reviews.
- College comparison table.
- Rank-based predictor tool.

## Project Docs

- [plan.md](./plan.md): execution plan and feature scope.
- [DESIGN.md](./DESIGN.md): product design system and UI rules.
- [agent.md](./agent.md): working rules for future tasks.
- [TASKS.md](./TASKS.md): implementation checklist.

## Submission Requirements

Final submission should include:

- Live working URL.
- GitHub repository.
- Loom video explaining architecture, decisions, edge cases, and tradeoffs.
