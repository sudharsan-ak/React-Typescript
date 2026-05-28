# Learning Roadmap - React + TypeScript

Source backbone:
https://github.com/Asabeneh/30-Days-Of-React

## Purpose

This file tracks the overall 30-day React + TypeScript learning path and the local app structure reference.

This is a roadmap/reference file only. Workflow rules live in `project_rules.md`.

## Modernized stack

```text
React
TypeScript
Vite
Function components
Hooks
Modern React patterns
Portfolio-style exercises
```

## 30-day plan

| Day | Topic |
|---|---|
| Day 1 | Setup, Vite, React app structure, `main.tsx`, `App.tsx` |
| Day 2 | React mental model, components, JSX |
| Day 3 | Props |
| Day 4 | TypeScript props with `type` and `interface` |
| Day 5 | State with `useState` |
| Day 6 | Event handling |
| Day 7 | Conditional rendering and list rendering |
| Day 8 | Component composition and reusable components |
| Day 9 | Controlled forms |
| Day 10 | Form validation and error messages |
| Day 11 | `useEffect` basics |
| Day 12 | Browser APIs with React: `localStorage`, `document`, `window` |
| Day 13 | Fetch/API calls |
| Day 14 | Loading, error, empty, and success states with API data |
| Day 15 | TypeScript API response types |
| Day 16 | Routing |
| Day 17 | Layouts, pages, and shared UI structure |
| Day 18 | Context API |
| Day 19 | `useReducer` |
| Day 20 | Custom hooks |
| Day 21 | React Query / TanStack Query basics |
| Day 22 | Styling: CSS, Tailwind mindset, component styling |
| Day 23 | Accessibility basics |
| Day 24 | Performance basics: re-renders, memoization, lazy loading |
| Day 25 | Testing with React Testing Library |
| Day 26 | Mini project: contact form |
| Day 27 | Mini project: projects grid/cards |
| Day 28 | Mini project: theme system |
| Day 29 | Portfolio refactor and polish |
| Day 30 | Final review, interview explanations, next roadmap |

## Week grouping

| Week | Scope | Theme |
|---|---|---|
| Week 1 | Day 1 to Day 7 | React foundations |
| Week 2 | Day 8 to Day 14 | Composition, forms, effects, API basics |
| Week 3 | Day 15 to Day 21 | App architecture and advanced state/data patterns |
| Week 4 | Day 22 to Day 28 | Production-level frontend skills |
| Final block | Day 29 to Day 30 | Portfolio polish and interview review |

## Local VS Code app structure reference

Current local app style:

```text
React-TypeScript/
  README.md
  package.json
  index.html
  vite.config.ts
  src/
    main.tsx
    App.tsx
    index.css
    App.css
    week1/
      day01-setup/
      day02-components-jsx/
      day03-props/
      day04-typescript-props/
```

Current Day 4 folder after completion:

```text
src/week1/day04-typescript-props/
  Day04TypeScriptProps.tsx
  OptionalUnionPropsPractice.tsx
  PortfolioTypedCardPractice.tsx
  Day04FinalPractice.tsx
```

## Current app render flow reference

```text
index.html
  -> main.tsx
    -> App.tsx
      -> current day's main learning component
```

Detailed rules about file organization and App.tsx switchboard behavior live in `project_rules.md`.
