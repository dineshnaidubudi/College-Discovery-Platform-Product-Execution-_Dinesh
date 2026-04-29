# Implementation Tasks

## 1. Project Setup

- [x] Create Next.js app.
- [x] Add TypeScript.
- [x] Add Tailwind CSS.
- [x] Add Prisma.
- [ ] Configure PostgreSQL connection.
- [x] Create environment example file.
- [x] Add base project layout.

## 2. Database

- [x] Define College model.
- [x] Define Course model.
- [x] Define Review model.
- [x] Define PredictorRule model.
- [x] Create seed script.
- [x] Seed 30-50 colleges.
- [ ] Verify seeded data locally.

## 3. College Listing

- [ ] Build `GET /api/colleges`.
- [ ] Add search by college name.
- [ ] Add location filter.
- [ ] Add fees filter.
- [ ] Add course filter.
- [ ] Add pagination.
- [x] Build listing page UI.
- [x] Add loading, empty, and error states.

## 4. College Details

- [ ] Build `GET /api/colleges/:slug`.
- [x] Add dynamic detail route.
- [x] Render overview section.
- [x] Render courses section.
- [x] Render placements section.
- [x] Render reviews section.
- [x] Handle invalid college slug.

## 5. Compare Colleges

- [ ] Build `GET /api/compare`.
- [x] Add college selector.
- [x] Limit selection to 2-3 colleges.
- [x] Build comparison table.
- [ ] Highlight useful differences.
- [x] Add mobile horizontal scroll.
- [x] Handle fewer than two selected colleges.

## 6. Predictor

- [ ] Build `POST /api/predictor`.
- [x] Validate exam and rank inputs.
- [x] Match colleges by predictor rules.
- [x] Add course and location preference support.
- [x] Build predictor page UI.
- [x] Add no-match and invalid-input states.

## 7. Polish

- [ ] Apply `DESIGN.md` consistently.
- [ ] Check mobile responsiveness.
- [ ] Check keyboard focus states.
- [ ] Check table accessibility.
- [ ] Add final README setup instructions.
- [ ] Remove unused code.

## 8. Deployment

- [ ] Create production database.
- [ ] Add production environment variables.
- [ ] Deploy app.
- [ ] Run production smoke test.
- [ ] Record Loom video.
- [ ] Submit live URL and GitHub repository.
