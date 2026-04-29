# College Discovery Platform - Execution Plan

## 1. Chosen Track

Build **Track B: College Discovery Platform**.

This is the best choice because it has a clear product scope, strong full-stack requirements, and a realistic path to a polished deployed MVP. The goal is to build a production-grade college discovery and decision platform with 3-4 complete end-to-end features.

## 2. Product Goal

Create a web platform where students can:

- Search and filter colleges.
- View detailed college information.
- Compare colleges side by side.
- Get college suggestions from a simple rank-based predictor.

The platform should feel like a focused MVP inspired by Careers360 and Collegedunia, but smaller and cleaner.

## 3. Selected Features

### Feature 1: College Listing + Search

Build a college listing page with:

- College cards.
- College name.
- Location.
- Fees.
- Rating.
- Course information.
- Search by college name.
- Filters for:
  - Location.
  - Fees.
  - Course.
- Pagination.

Expected outcome:

- Fast and usable listing UI.
- Data fetched from backend APIs.
- Colleges stored in PostgreSQL, not hardcoded in the UI.

### Feature 2: College Detail Page

Build a detail page for each college with:

- Overview section.
- Fees.
- Courses offered.
- Location.
- Rating.
- Placement information.
- Reviews section using mock data.

Expected outcome:

- Proper dynamic routing.
- Clean layout.
- Data loaded from backend/database.

### Feature 3: Compare Colleges

Build a comparison feature where users can:

- Select 2-3 colleges.
- View a comparison table.
- Compare:
  - Fees.
  - Placement percentage.
  - Rating.
  - Location.
  - Courses.

Expected outcome:

- This should behave like a real decision-making feature, not just a visual table.
- Selected colleges should be fetched by ID from the backend.

### Feature 4: Simple Predictor Tool

Build a rule-based predictor where users enter:

- Exam name, for example JEE.
- Rank.
- Course preference.
- Optional location preference.

Output:

- Suggested colleges based on rank range and filters.

Expected outcome:

- Rule-based or dataset-driven logic.
- Results should come from database-backed college data.
- Predictor should handle invalid or missing input cleanly.

## 4. Optional Feature If Time Allows

### Auth + Saved Items

Add basic authentication if the core features are complete.

Users should be able to:

- Sign up.
- Log in.
- Save colleges.
- Save comparison sets.

This is useful but should not block completion of the main MVP.

## 5. Tech Stack

### Frontend

- Next.js
- React
- Tailwind CSS

### Backend

- Node.js
- TypeScript
- REST APIs
- Next.js API routes or Express

### Database

- PostgreSQL
- Prisma ORM

### Deployment

- Frontend: Vercel
- Backend/API: Vercel API routes, Render, or Railway
- Database: Supabase, Neon, Railway, or Render PostgreSQL

## 6. Database Plan

### College

Fields:

- id
- name
- slug
- location
- state
- city
- fees
- rating
- placementPercentage
- averagePackage
- description
- imageUrl
- createdAt
- updatedAt

### Course

Fields:

- id
- collegeId
- name
- duration
- fee
- eligibility

### Review

Fields:

- id
- collegeId
- authorName
- rating
- comment
- createdAt

### PredictorRule

Fields:

- id
- collegeId
- exam
- course
- minRank
- maxRank

### SavedCollege

Only if auth is implemented.

Fields:

- id
- userId
- collegeId
- createdAt

## 7. API Plan

### Colleges

- `GET /api/colleges`
  - Query params:
    - `search`
    - `location`
    - `course`
    - `minFees`
    - `maxFees`
    - `page`
    - `limit`

- `GET /api/colleges/:slug`
  - Returns full college detail.

### Compare

- `GET /api/compare?ids=1,2,3`
  - Returns normalized comparison data for selected colleges.

### Predictor

- `POST /api/predictor`
  - Body:
    - `exam`
    - `rank`
    - `course`
    - `location`
  - Returns matching colleges.

### Auth Optional

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/saved-colleges`
- `POST /api/saved-colleges`
- `DELETE /api/saved-colleges/:id`

## 8. Frontend Pages

### `/`

Home/listing page:

- Search bar.
- Filters.
- College cards.
- Pagination.
- Quick compare selection.

### `/colleges/[slug]`

College detail page:

- Overview.
- Courses.
- Placements.
- Reviews.
- Compare/save actions.

### `/compare`

Comparison page:

- College selector.
- Comparison table.
- Highlight best values where useful.

### `/predictor`

Predictor page:

- Exam input.
- Rank input.
- Course selector.
- Location selector.
- Suggested colleges list.

### `/login` and `/signup`

Only if auth is added.

## 9. UI Requirements

- Clean, responsive layout.
- Mobile-ready pages.
- Tailwind CSS styling.
- Loading states for API calls.
- Empty states for no results.
- Error states for failed requests.
- Clear filters and reset controls.
- Usable comparison table on mobile.

## 10. Data Strategy

Use a mock or AI-generated dataset, but store it in PostgreSQL.

Minimum dataset:

- 30-50 colleges.
- 3-5 courses per college.
- Placement data for each college.
- 2-3 mock reviews per college.
- Rank ranges for predictor logic.

The UI should never rely on a hardcoded static array for core data.

## 11. Development Milestones

### Milestone 1: Project Setup

- Create Next.js project.
- Configure Tailwind CSS.
- Add Prisma.
- Connect PostgreSQL.
- Create database schema.
- Add seed script.

### Milestone 2: College Listing

- Build colleges API.
- Implement search.
- Implement filters.
- Add pagination.
- Build listing UI.

### Milestone 3: College Details

- Build detail API.
- Add dynamic route.
- Render overview, courses, placements, and reviews.

### Milestone 4: Compare Feature

- Add compare API.
- Add compare selector.
- Build comparison table.
- Handle 2-3 selected colleges.

### Milestone 5: Predictor Tool

- Add predictor API.
- Add rule-based matching.
- Build predictor form.
- Render suggested colleges.
- Add validation and empty states.

### Milestone 6: Polish + Deployment

- Add loading and error states.
- Test mobile responsiveness.
- Seed production database.
- Deploy frontend/backend/database.
- Record Loom video.
- Submit live URL and GitHub repo.

## 12. Edge Cases To Handle

- No colleges match search.
- Invalid page number.
- Missing filters.
- Very high or very low rank in predictor.
- College detail page for invalid slug.
- Compare page with fewer than 2 colleges.
- Compare page with more than 3 colleges.
- API/database failure.
- Slow loading state.

## 13. Evaluation Checklist

- Frontend works end to end.
- Backend APIs are functional.
- PostgreSQL stores the data.
- UI is not hardcoded from static arrays.
- 3-4 selected features are complete.
- App is deployed.
- GitHub repository is clean.
- README explains setup and architecture.
- Loom video explains:
  - Product scope.
  - Architecture.
  - Database schema.
  - APIs.
  - Edge cases.
  - Tradeoffs.

## 14. Recommended Submission Story

In the Loom video, present the project as a decision-support platform for students.

Focus on:

- Search and filtering for discovery.
- Detail pages for research.
- Compare feature for decision-making.
- Predictor for personalized recommendations.
- Database-backed implementation.
- Clean API structure.
- Practical tradeoffs made to ship a reliable MVP.

