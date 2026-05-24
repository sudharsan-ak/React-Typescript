# Learn React + TypeScript from Scratch

This project is for learning React from the basics using Asabeneh's 30 Days Of React repo as the backbone, but adapted to a modern React + TypeScript workflow.

Source backbone:
https://github.com/Asabeneh/30-Days-Of-React

Main rule:
Use the repo as the roadmap, not as a script to follow blindly.

The original repo includes older React topics like class components, lifecycle methods, and higher-order components. We will still understand those at a high level for interviews, but our main coding path should use:

```text
React
TypeScript
Vite
Function components
Hooks
Modern React patterns
Portfolio-style exercises
```

## Goal

The goal is not just to read React notes.

The goal is to code React in VS Code every day until the fundamentals are strong enough to:

```text
build UI from components
use JSX correctly
pass props
manage state
handle events
render lists
build controlled forms
use effects safely
fetch API data
type React code with TypeScript
structure a real app
explain React clearly in interviews
connect concepts back to the portfolio
```

## Project structure

Use one ChatGPT Project and create a separate chat for each learning day.

To keep Project Sources clean, notes should be consolidated by week after each 7-day block.

Recommended long-term source structure:

```text
README.md
learning_index.md
week1_notes.md      # Day 1 to Day 7
week2_notes.md      # Day 8 to Day 14, once complete
week3_notes.md      # Day 15 to Day 21, once complete
week4_notes.md      # Day 22 to Day 28, once complete
day29_notes.md
day30_notes.md
```

During an active week, keep individual daily notes for that week only.

Example after Day 1:

```text
README.md
learning_index.md
day1_notes.md
```

Example after Day 8:

```text
README.md
learning_index.md
week1_notes.md
day8_notes.md
```

After Day 14, consolidate Day 8 to Day 14 into:

```text
week2_notes.md
```

Then remove the individual Day 8 to Day 14 notes from Project Sources if possible.

## What each file is for

### README.md

Permanent project instructions.

This file should rarely change.

### learning_index.md

Short rolling progress tracker.

This should be updated at the end of every completed day.

It should include:

```text
days completed
current next day
important global React/TypeScript rules
recurring mistakes to watch for
current source file structure
portfolio mappings learned
```

Do not put full lessons or long code blocks here.

Use `learning_index.md` as the source of truth for current progress.

### weekX_notes.md

Clean consolidated study/reference notes for a 7-day block.

Each weekly notes file should include:

```text
week status
day-by-day concept summaries
key syntax
small examples only where useful
common mistakes/corrections
portfolio mappings
interview wording
week-level takeaways
what to remember for the next week
```

Do not paste every daily exercise.

Do not turn weekly notes into a chat transcript.

Do not make weekly notes a huge stitched-together dump.

### dayX_notes.md

Use daily notes only for days in the current active week.

Each daily notes file should include:

```text
topics covered
key concepts
small examples only where useful
summary of exercises practiced
corrections/mistakes
portfolio mapping
interview-ready wording
final mixed exercise status
Day X status
what to remember before the next day
```

Do not include every exercise block or full practice-file code.

Do not turn notes into a chat transcript or code dump.

## Local VS Code project

Create one React + TypeScript app for all exercises.

Recommended app setup:

```bash
npm create vite@latest react-30-days-lab -- --template react-ts
cd react-30-days-lab
npm install
npm run dev
```

Recommended app structure:

```text
react-30-days-lab/
  src/
    days/
      day01-setup/
      day02-components-jsx/
      day03-props/
      day04-typescript-props/
      day05-state/
      day06-events/
      day07-conditionals-lists/
      day08-composition/
      day09-forms/
      day10-form-validation/
      day11-useeffect/
      day12-browser-apis/
      day13-fetch-api/
      day14-api-types/
      day15-routing/
      day16-layouts/
      day17-context/
      day18-usereducer/
      day19-custom-hooks/
      day20-react-query/
      day21-styling/
      day22-accessibility/
      day23-performance/
      day24-testing/
      day25-project-contact-form/
      day26-project-projects-grid/
      day27-project-theme-system/
      day28-project-dashboard/
      day29-portfolio-refactor/
      day30-final-review/
    App.tsx
    main.tsx
```

The exact folder names can change, but the idea is simple:

```text
one day
one folder
small focused React exercises
```

## 30-day learning plan

This is the React + TypeScript version of the 30-day track.

It uses Asabeneh's 30 Days Of React as the backbone, but modernizes the order and coding style.

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

## Topics from the original repo to handle carefully

The original 30 Days Of React repo includes some older React patterns.

Do not skip them completely, but do not over-invest.

### Class components

Learn what they are and how to recognize them.

Do not spend many days building class-based React.

Modern React work should mainly use function components and hooks.

### Lifecycle methods

Understand the mapping:

```text
componentDidMount       -> useEffect(..., [])
componentDidUpdate      -> useEffect(..., [dependency])
componentWillUnmount    -> useEffect cleanup
```

Do not make lifecycle methods the main learning path.

### Higher-order components

Understand the idea:

```text
a function that takes a component and returns an enhanced component
```

But do not prioritize it over hooks, context, React Query, forms, accessibility, or testing.

## Teaching style

Use this style for every day:

```text
1. Brief recap of previous day
2. Start current day topic
3. Explain the concept in plain English
4. Show a tiny beginner-friendly example
5. Give a VS Code exercise as a copy-paste comment block
6. Review submitted code strictly but fairly
7. Fix mistakes before moving on
8. Map the concept to the portfolio
9. Give interview-ready wording
10. Move to the next concept only after the current one is cleared
11. End with a focused final mixed exercise
12. Review the final mixed exercise
13. Ask before generating notes or updating the learning index
```

## Exercise style

React exercises should be code-first.

Each exercise should usually ask for one of these:

```text
create a component
return JSX
pass props
type props
use state
handle a click
handle input typing
render a list
conditionally show UI
submit a form
fetch data
show loading/error UI
create a custom hook
use context
write a small test
```

Use copy-paste starter blocks.

Good exercise format:

```tsx
// Day X - Topic Exercise
// 1. Create a component called UserCard
// 2. It should receive name, role, and location as props
// 3. Type the props using a type or interface
// 4. Render the values in JSX
// 5. Import and render the component in App.tsx
```

Avoid massive exercises too early.

React is visual. Every day should produce something visible in the browser or a clear code-level result.

## Review rules

Review code strictly but fairly.

Separate issues into:

```text
Actual mistake
Prompt mismatch
TypeScript issue
React concept issue
Optional style improvement
```

Do not call something wrong if it is just a different valid style.

Do call out bad habits directly.

Examples of bad habits:

```text
mutating state directly
missing key in list rendering
using index as key when data can change
calling handlers immediately during render
using any unnecessarily
storing derived state unnecessarily
using useEffect when render calculation is enough
ignoring loading/error states
ignoring accessibility labels
```

## Daily workflow

Every day should follow this pattern:

1. Brief recap of previous day
2. Start current day topic
3. Explain one concept
4. Give a small example
5. Give one small exercise
6. Review submitted code
7. Fix mistakes
8. Move to next concept only after clearing the current one
9. End with a focused mixed final exercise
10. Review the final mixed exercise
11. If cleared, ask whether to generate notes and update the learning index
12. Generate notes/index only after confirmation

## How to start a new day chat

Start a new chat inside this project and say:

```text
Check the README and learning_index.md in this project.

Continue my React + TypeScript learning from the project context.

Start the next day listed in learning_index.md using Asabeneh's 30 Days Of React repo as the backbone, but modernize it for React + TypeScript + Vite.

Teach me one topic at a time. Give examples and VS Code exercises. Review my code strictly but fairly before moving forward.
```

If you want to specify the day manually, use this:

```text
Check the README and learning_index.md in this project.

I have completed through Day X-1. Start Day X - [Topic Name] from the React + TypeScript learning plan.

Use Asabeneh's 30 Days Of React repo as the backbone, but modernize it for React + TypeScript + Vite.

Teach me one topic at a time. Give examples and VS Code exercises. Review my code strictly but fairly before moving forward.
```

## How to end each day

After the final mixed exercise is reviewed and cleared, first ask:

```text
Are you ready for me to generate dayX_notes.md and update learning_index.md?
```

Only after confirmation, generate:

```text
Create dayX_notes.md as clean study/reference notes:
- topics covered
- key concepts
- small examples only where useful
- summary of exercises practiced
- corrections/mistakes
- portfolio mapping
- interview-ready wording
- final mixed exercise status
- Day X status
- what to remember before Day X+1

Do not include every exercise block.
Do not include the full final mixed exercise code unless I explicitly ask.
Do not make it a chat transcript.

Also update learning_index.md:
- mark Day X as Cleared
- set Day X+1 as Next
- add any new global rules or recurring mistakes
- update current project source file list if needed
```

Then download both files and upload them back into Project Sources.

## How to end each week

After each 7-day block is complete, consolidate the daily notes into one weekly file.

Week blocks:

```text
Week 1 -> Day 1 to Day 7
Week 2 -> Day 8 to Day 14
Week 3 -> Day 15 to Day 21
Week 4 -> Day 22 to Day 28
Final block -> Day 29 to Day 30
```

Ask:

```text
Can you generate weekX_notes.md and update README.md and learning_index.md so I can upload the consolidated weekly notes and remove the individual day notes for that week?
```

Weekly consolidation rules:

```text
Create weekX_notes.md as clean study/reference notes.
Keep the useful concepts and examples.
Include portfolio mappings and interview wording.
Do not paste every exercise.
Do not include full practice-file code.
Do not make it a chat transcript.
Keep it organized by day plus a week-level recap.
```

After uploading the weekly file, remove that week's individual day notes from Project Sources if possible.

## What to upload into Project Sources after each day

Upload only these:

```text
dayX_notes.md
learning_index.md
```

Do not upload a new README every day.

During an active week, keep that week's individual day notes.

## What to upload after weekly consolidation

Upload:

```text
weekX_notes.md
learning_index.md
README.md
```

Then remove the individual daily files for that completed week if possible.

Example after Week 1 consolidation:

```text
KEEP:
README.md
learning_index.md
week1_notes.md
day8_notes.md

REMOVE IF POSSIBLE:
day1_notes.md
day2_notes.md
day3_notes.md
day4_notes.md
day5_notes.md
day6_notes.md
day7_notes.md
```

## Replace vs keep

Replace regularly:

```text
learning_index.md
```

Replace README only when project workflow rules change:

```text
README.md
```

Keep consolidated weekly notes:

```text
week1_notes.md
week2_notes.md
week3_notes.md
week4_notes.md
```

Keep individual daily notes only while that week is still active.

## Coding rules for now

```text
Use React function components.
Use TypeScript from the beginning.
Prefer `type` or `interface` for props.
Avoid `any` unless there is a clear reason.
Use `unknown` instead of `any` when data is truly unknown.
Use `useState` for UI state.
Never mutate state directly.
Use functional state updates when the next value depends on the previous value.
Use controlled inputs for forms.
Use stable keys when rendering lists.
Use buttons for actions and links for navigation.
Handle loading, error, empty, and success states for API work.
Do not use useEffect for values that can be calculated during render.
Always clean up event listeners and timers in useEffect.
Keep components focused.
Prefer readable code over clever code.
```

## Notes style rules

Daily and weekly notes should be clean study/reference material.

They should explain what was learned, but they should not re-create the full chat or practice files.

Good notes include:

```text
concept explanations
important syntax
small examples
exercise summary
mistakes and corrections
portfolio mapping
interview wording
final status
next-day prep
week-level recap when consolidating
```

Avoid:

```text
every exercise prompt
full practice-file code
long repeated explanations
chat transcript style
bloated textbook-style notes
```

Preferred size guideline:

```text
Daily notes should usually stay around 250-500 lines.
Weekly notes can be longer, but should still be compact and organized.
A weekly file should summarize and consolidate, not simply paste all daily files together.
```

## Portfolio mapping rule

Whenever possible, connect the concept back to the portfolio.

Examples:

```text
Components -> Hero, Projects, Contact, Navigation
Props -> AI assistant button receiving isOpen, setIsOpen, theme
State -> contact form state, loading state, AI assistant open state
Events -> onClick, onChange, onSubmit
Lists -> project cards, technology badges, skills
Forms -> contact form
useEffect -> theme/localStorage, scroll listener, click-outside listener
Fetch/API -> contact form POST request, project/API data
Context -> theme system
Routing -> home, resume, api docs, not found
```

## Interview wording rule

Every day should end with one or two natural interview-ready explanations.

The wording should be human, direct, and grounded in real code.

Avoid fancy wording.

Good style:

```text
I used controlled forms in the contact section so React owns the input values. Each field is tied to state, and every change updates the matching state field. That made it easier to validate, submit, show loading state, and reset the form after success.
```

Bad style:

```text
I architected a robust declarative input orchestration system to enable seamless user-data synchronization.
```

## Current progress source of truth

Use `learning_index.md` as the source of truth for current progress.

The README should not need daily edits.
