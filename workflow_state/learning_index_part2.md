# Learning Index Part 2 - Week 2

Historical progress archive for the React + TypeScript learning project.

Source backbone:
https://github.com/Asabeneh/30-Days-Of-React

## Scope

```text
Part 2 covers Week 2.
Week 2: Day 8 to Day 14
Status: In progress
Current: Day 8 cleared
Next: Day 9 - Controlled forms
```

---

## Week 2 plan

| Day | Topic | Status | Notes |
|---|---|---|---|
| Day 8 | Component composition and reusable components | Cleared | `day8_notes.md` |
| Day 9 | Controlled forms | Next | Pending |
| Day 10 | Form validation and error messages | Pending | Pending |
| Day 11 | `useEffect` basics | Pending | Pending |
| Day 12 | Browser APIs with React: `localStorage`, `document`, `window` | Pending | Pending |
| Day 13 | Fetch/API calls | Pending | Pending |
| Day 14 | Loading, error, empty, and success states with API data | Pending | Pending |

---

## Day 8 summary

Status:

```text
Cleared
```

Main topic:

```text
Component composition and reusable components
```

Covered:

```text
composition mental model
when to split components
avoiding bloated components
parent/child composition
reusable components with props
children prop basics
wrapper components
cleanup habits
real-world file splitting judgment
final mixed exercise
```

Key mental model:

```text
Page component -> composes sections
Section component -> owns one focused UI area
Reusable card component -> same structure, different props
Wrapper component -> same outer layout, flexible children
```

Important distinctions:

```text
A TypeScript type describes props; it does not render JSX.
A component renders JSX.
children is the JSX placed between opening and closing component tags.
React does not automatically replace sections; you manually choose to use wrapper components.
```

Final mixed exercise:

```text
Online course dashboard
```

Final exercise practiced:

```text
Day08FinalPractice as parent composer
CourseHeader as focused section
LessonsSection as data-owning section
LessonCard as reusable props-based card
DashboardSection as children-based wrapper
map() rendering repeated lesson cards
conditional rendering for optional status
```

Final exercise status:

```text
Cleared
```

---

## Day 8 interview reminder

In my React projects, I use component composition to keep the app readable. A page-level component should mostly organize the major sections instead of holding every detail itself. Section components own focused areas of the UI, and repeated patterns like cards or list items can become reusable child components that receive data through props.

When the same outer layout repeats but the inner content changes, I can use the `children` prop. The wrapper component owns the common structure, while the parent passes whatever JSX belongs inside. The goal is to keep components focused without overengineering tiny pieces into unnecessary files.

---

## Current confidence level

```text
Day 8 cleared.
Ready for Day 9 - Controlled forms.
```
