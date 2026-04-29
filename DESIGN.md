# DESIGN.md

# College Discovery Platform Design System

## 1. Visual Theme

The interface should feel like a structured decision workspace for students. It should be friendly, clear, and data-rich without feeling corporate or heavy.

Use an Airtable-inspired direction:

- Light surfaces.
- Clear grids.
- Friendly accent colors.
- Compact data cards.
- Rounded but restrained components.
- Tables and filters that feel easy to scan.

The product should feel trustworthy for college decisions, not like a marketing landing page. Prioritize utility, comparison, and readability.

## 2. Design Principles

- Make search and filtering the center of the experience.
- Keep college data scannable.
- Make comparison feel decisive and useful.
- Avoid oversized hero sections.
- Avoid decorative gradients as primary backgrounds.
- Use color to classify data, status, course tags, and actions.
- Keep pages dense enough for research, but not visually crowded.

## 3. Color Palette

### Core Colors

- Background: `#F7F8FA`
- Surface: `#FFFFFF`
- Surface muted: `#F1F3F5`
- Border: `#DDE1E6`
- Border strong: `#C8CED6`
- Text primary: `#1F2933`
- Text secondary: `#52606D`
- Text muted: `#7B8794`

### Brand Colors

- Primary blue: `#2563EB`
- Primary blue hover: `#1D4ED8`
- Primary blue soft: `#E8F0FF`
- Teal: `#0F9F8F`
- Teal soft: `#E6F7F5`
- Amber: `#F59E0B`
- Amber soft: `#FFF4D6`
- Green: `#16A34A`
- Green soft: `#E8F8EE`
- Red: `#DC2626`
- Red soft: `#FDECEC`

### Usage Rules

- Use blue for primary actions, links, selected filters, and active navigation.
- Use teal for recommendation and predictor success states.
- Use amber for ratings, highlights, and rank-related signals.
- Use green for positive placement or affordability indicators.
- Use red only for errors or destructive actions.
- Do not let one color dominate the full interface.

## 4. Typography

Use a clean sans-serif stack:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Type Scale

- Page title: 32px, 700 weight, 40px line height.
- Section title: 24px, 700 weight, 32px line height.
- Card title: 18px, 650 weight, 26px line height.
- Body: 15px, 400 weight, 24px line height.
- Small body: 14px, 400 weight, 20px line height.
- Metadata: 13px, 500 weight, 18px line height.
- Label: 12px, 600 weight, 16px line height.

### Typography Rules

- Keep letter spacing at `0`.
- Do not scale font sizes based on viewport width.
- Use bold text only for names, labels, and important numeric values.
- College names should be prominent but not oversized.
- Tables should use compact type with strong alignment.

## 5. Layout System

### Page Shell

- Max content width: `1200px`.
- Page horizontal padding:
  - Mobile: `16px`.
  - Tablet: `24px`.
  - Desktop: `32px`.
- Main vertical spacing: `24px`.
- Section spacing: `32px`.

### Grid

- Listing desktop layout:
  - Left filters: `260px`.
  - Main results: remaining width.
- Listing mobile layout:
  - Filters collapse into a drawer or stacked panel.
  - Cards use one column.
- College cards:
  - Desktop: one or two columns depending on available width.
  - Mobile: one column.

### Spacing Scale

- `4px`: tiny gaps inside badges.
- `8px`: compact element gaps.
- `12px`: form field gaps.
- `16px`: card padding and control groups.
- `24px`: section groups.
- `32px`: page sections.
- `48px`: major page separation.

## 6. Components

### Buttons

Primary button:

- Background: `#2563EB`.
- Text: white.
- Border radius: `8px`.
- Height: `40px`.
- Padding: `0 16px`.
- Font size: `14px`.
- Font weight: `600`.

Secondary button:

- Background: white.
- Text: `#1F2933`.
- Border: `1px solid #DDE1E6`.
- Hover background: `#F1F3F5`.

Ghost button:

- Background: transparent.
- Text: `#2563EB`.
- Hover background: `#E8F0FF`.

Button rules:

- Use icons for common actions when possible.
- Do not use pill buttons unless representing selected filters or tags.
- Disabled buttons should use `#C8CED6` text and `#F1F3F5` background.

### Inputs

- Background: white.
- Border: `1px solid #DDE1E6`.
- Border radius: `8px`.
- Height: `40px`.
- Padding: `0 12px`.
- Focus border: `#2563EB`.
- Focus shadow: `0 0 0 3px #E8F0FF`.

Search input:

- Include a search icon.
- Use placeholder text like `Search colleges`.
- Keep it visually dominant on the listing page.

### Cards

College card:

- Background: white.
- Border: `1px solid #DDE1E6`.
- Border radius: `8px`.
- Padding: `16px`.
- Shadow: `0 1px 2px rgba(31, 41, 51, 0.06)`.
- Hover border: `#C8CED6`.
- Hover shadow: `0 6px 18px rgba(31, 41, 51, 0.08)`.

Card content order:

1. College name and rating.
2. Location.
3. Fees and placement summary.
4. Course tags.
5. Actions.

Do not nest cards inside cards.

### Badges And Tags

Course tags:

- Background: `#E8F0FF`.
- Text: `#1D4ED8`.
- Border radius: `999px`.
- Padding: `4px 8px`.
- Font size: `12px`.
- Font weight: `600`.

Location tags:

- Background: `#F1F3F5`.
- Text: `#52606D`.

Recommendation tag:

- Background: `#E6F7F5`.
- Text: `#0F766E`.

Rating tag:

- Background: `#FFF4D6`.
- Text: `#92400E`.

### Tables

Use tables for comparison and structured course data.

Table style:

- Header background: `#F1F3F5`.
- Header text: `#52606D`.
- Row background: white.
- Row border: `1px solid #DDE1E6`.
- Cell padding: `12px 16px`.
- Font size: `14px`.

Comparison rules:

- First column should name the metric.
- Each selected college gets one column.
- Highlight best values with soft green or amber backgrounds.
- On mobile, allow horizontal scrolling.

### Filters

Filter panel:

- Background: white.
- Border: `1px solid #DDE1E6`.
- Border radius: `8px`.
- Padding: `16px`.
- Sticky on desktop where useful.

Filter groups:

- Label at top.
- Controls below.
- Clear spacing between groups.
- Include reset button.

### Navigation

Top navigation:

- Height: `64px`.
- Background: white.
- Border bottom: `1px solid #DDE1E6`.
- Content max width: `1200px`.

Navigation links:

- Default text: `#52606D`.
- Active text: `#2563EB`.
- Active background: `#E8F0FF`.
- Border radius: `8px`.

## 7. Page Patterns

### Listing Page

The listing page is the main workspace.

Structure:

- Header with product name and navigation.
- Search and quick stats row.
- Filter sidebar.
- Results count and sort control.
- College cards.
- Pagination.

Avoid a large marketing hero. The first viewport should immediately show search, filters, and college results.

### College Detail Page

Structure:

- College name, location, rating, and primary actions.
- Summary metric row:
  - Fees.
  - Placement percentage.
  - Average package.
  - Courses count.
- Tabs or sections:
  - Overview.
  - Courses.
  - Placements.
  - Reviews.

Use compact sections and clear headings.

### Compare Page

Structure:

- College selector at top.
- Selected college summary chips.
- Comparison table.
- Best value highlights.
- Empty state when fewer than two colleges are selected.

The page should feel like a decision tool.

### Predictor Page

Structure:

- Compact form panel.
- Inputs for exam, rank, course, and location.
- Result cards below.
- Explanation line for why a college matched.

Predictor results should use teal and amber accents to signal recommendation and rank fit.

## 8. States

### Loading

- Use skeleton rows or skeleton cards.
- Avoid full-page spinners except during initial app load.

### Empty

Use friendly direct messages:

- `No colleges match your filters.`
- `Try changing the fee range or course.`
- `Select at least two colleges to compare.`

### Error

- Use red soft background.
- Keep text specific.
- Provide retry action when possible.

### Success

- Use green or teal soft backgrounds.
- Keep success messages short.

## 9. Responsive Behavior

### Mobile

- One-column layout.
- Filter panel collapses into a drawer or stacked section.
- Cards take full width.
- Comparison table scrolls horizontally.
- Touch targets must be at least `40px`.
- Keep action buttons stacked when width is tight.

### Tablet

- Listing can use filters above results or a narrow sidebar.
- Cards can use one or two columns.

### Desktop

- Use sidebar filters.
- Keep comparison table fully visible when possible.
- Avoid excessive whitespace on wide screens.

## 10. Accessibility

- Maintain strong color contrast.
- Do not rely on color alone for comparison highlights.
- Inputs must have labels.
- Buttons must have clear accessible names.
- Focus states must be visible.
- Tables must use proper headers.

## 11. Do

- Use clean grids and clear hierarchy.
- Make data easy to compare.
- Keep action placement predictable.
- Show meaningful loading, empty, and error states.
- Use badges for courses, locations, and recommendation signals.
- Keep the UI student-friendly and practical.

## 12. Do Not

- Do not build a marketing-style landing page as the main screen.
- Do not use oversized decorative sections.
- Do not use dark mode as the default.
- Do not use heavy gradients or decorative background blobs.
- Do not nest cards inside cards.
- Do not make comparison data hard to scan.
- Do not hide critical college data behind too many clicks.
- Do not use em dashes.

## 13. Implementation Notes

- Use Tailwind CSS tokens mapped to this design system.
- Create reusable components for buttons, inputs, cards, badges, filters, tables, empty states, and error states.
- Keep card border radius at `8px` or less.
- Prefer lucide icons for search, filter, map pin, star, compare, bookmark, and arrow actions.
- Use real college imagery only if it helps recognition. Otherwise, keep cards data-first.
- Make sure all text fits within cards and controls on mobile.

