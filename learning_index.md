# React + TypeScript Learning Index

Lightweight rolling tracker for the React + TypeScript learning project.

Source backbone:
https://github.com/Asabeneh/30-Days-Of-React

Portfolio GitHub for reference:
https://github.com/sudharsan-ak/personal-portfolio/

Actual Portfolio Live Site:
https://sudharsansrinivasan.com/

Portfolio mapping rule:
Use the GitHub repo to verify actual component/file/code structure.
Use the live site to understand visible UI behavior.
Do not guess exact portfolio implementation if it has not been verified.

Learning approach:

```text
Use Asabeneh's 30 Days Of React as the roadmap.
Modernize the actual coding path to React + TypeScript + Vite.
Code every day in VS Code.
Use function components and hooks as the main path.
Lightly cover older class-based React only for recognition/interview awareness.
Map concepts back to the portfolio whenever useful.
```

---

## Current status

```text
React + TypeScript coding track - Day 2 cleared
Next: Day 3 - Props
```

Detailed status:

```text
Day 1 - Cleared
Day 2 - Cleared
Day 3 - Not started
Day 4 - Not started
Day 5 - Not started
Day 6 - Not started
Day 7 - Not started
Day 8 - Not started
Day 9 - Not started
Day 10 - Not started
Day 11 - Not started
Day 12 - Not started
Day 13 - Not started
Day 14 - Not started
Day 15 - Not started
Day 16 - Not started
Day 17 - Not started
Day 18 - Not started
Day 19 - Not started
Day 20 - Not started
Day 21 - Not started
Day 22 - Not started
Day 23 - Not started
Day 24 - Not started
Day 25 - Not started
Day 26 - Not started
Day 27 - Not started
Day 28 - Not started
Day 29 - Not started
Day 30 - Not started
Next: Day 3 - Props
```

---

## Current Project Sources structure

Current source structure after Day 2:

```text
README.md
learning_index.md
day1_notes.md
day2_notes.md
```

Optional existing context sources if already uploaded:

```text
react_portfolio_learning_checkpoint_FIXED.txt
react-learning-index.md
```

Notes:

```text
Use README.md for permanent workflow rules.
Use learning_index.md as the current source of truth.
After each completed day, upload dayX_notes.md and replace learning_index.md.
After each completed 7-day block, consolidate daily notes into weekX_notes.md.
```

---

## Local VS Code app structure

Current local app folder structure:

```text
React-TypeScript/
  README.md
  learning_index.md
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
        Day01Setup.tsx
        day1_notes.md
        main-tsx-notes.md
      day02-components-jsx/
        Day02ComponentsJSX.tsx
        DayBadge.tsx
        JSXRulesPractice.tsx
        CompositionPractice.tsx
        Day02FinalPractice.tsx
```

Chosen structure rule:

```text
Use src/week1/dayXX-topic folders.
Do not create separate Vite apps per day or week.
App.tsx acts as the switchboard for the current day's component.
Group related practice into focused files when one daily file becomes bloated.
Do not create one file per tiny exercise unless it improves clarity.
```

Current render flow:

```text
index.html -> main.tsx -> App.tsx -> src/week1/day02-components-jsx/Day02ComponentsJSX.tsx -> browser UI
```

Current Day 2 render tree:

```text
App
  -> Day02ComponentsJSX
      -> DayHeader
      -> DaySummary
      -> LearningStatus
      -> PortfolioConnection
      -> DayBadge
      -> JSXBasics
      -> WrapperRule
      -> JSXRulesPractice
           -> ClassNameRule
           -> JavaScriptValuesRule
           -> SelfClosingRule
      -> CompositionPractice
           -> CompositionIntro
           -> ParentChildReminder
      -> Day02FinalPractice
           -> FinalHeader
           -> ConceptSummary
           -> JSXRuleList
           -> SelfClosingReminder
```

---

## 30-day React + TypeScript plan

| Day | Topic | Status | Notes file |
|---|---|---|---|
| Day 1 | Setup, Vite, React app structure, `main.tsx`, `App.tsx` | Cleared | day1_notes.md |
| Day 2 | React mental model, components, JSX | Cleared | day2_notes.md |
| Day 3 | Props | Not started | - |
| Day 4 | TypeScript props with `type` and `interface` | Not started | - |
| Day 5 | State with `useState` | Not started | - |
| Day 6 | Event handling | Not started | - |
| Day 7 | Conditional rendering and list rendering | Not started | - |
| Day 8 | Component composition and reusable components | Not started | - |
| Day 9 | Controlled forms | Not started | - |
| Day 10 | Form validation and error messages | Not started | - |
| Day 11 | `useEffect` basics | Not started | - |
| Day 12 | Browser APIs with React: `localStorage`, `document`, `window` | Not started | - |
| Day 13 | Fetch/API calls | Not started | - |
| Day 14 | Loading, error, empty, and success states with API data | Not started | - |
| Day 15 | TypeScript API response types | Not started | - |
| Day 16 | Routing | Not started | - |
| Day 17 | Layouts, pages, and shared UI structure | Not started | - |
| Day 18 | Context API | Not started | - |
| Day 19 | `useReducer` | Not started | - |
| Day 20 | Custom hooks | Not started | - |
| Day 21 | React Query / TanStack Query basics | Not started | - |
| Day 22 | Styling: CSS, Tailwind mindset, component styling | Not started | - |
| Day 23 | Accessibility basics | Not started | - |
| Day 24 | Performance basics: re-renders, memoization, lazy loading | Not started | - |
| Day 25 | Testing with React Testing Library | Not started | - |
| Day 26 | Mini project: contact form | Not started | - |
| Day 27 | Mini project: projects grid/cards | Not started | - |
| Day 28 | Mini project: theme system | Not started | - |
| Day 29 | Portfolio refactor and polish | Not started | - |
| Day 30 | Final review, interview explanations, next roadmap | Not started | - |

---

## Week summaries

### Week 1 - React Foundations

Status:

```text
In progress - Day 1 and Day 2 cleared
```

Completed:

```text
Day 1 - Setup, Vite, React app structure, main.tsx, App.tsx
Day 2 - React mental model, components, JSX
```

Remaining:

```text
Day 3 - Props
Day 4 - TypeScript props
Day 5 - State with useState
Day 6 - Event handling
Day 7 - Conditional rendering and list rendering
```

Main Week 1 foundation:

```text
React app startup
component tree
JSX
props
TypeScript prop typing
state
events
conditional UI
lists and keys
```

### Week 2 - Forms, Effects, and API Basics

Status:

```text
Not started
```

Expected coverage:

```text
Day 8 - Component composition and reusable components
Day 9 - Controlled forms
Day 10 - Form validation and error messages
Day 11 - useEffect basics
Day 12 - Browser APIs with React
Day 13 - Fetch/API calls
Day 14 - Loading, error, empty, and success states
```

### Week 3 - App Architecture and Advanced State

Status:

```text
Not started
```

Expected coverage:

```text
Day 15 - TypeScript API response types
Day 16 - Routing
Day 17 - Layouts, pages, shared UI
Day 18 - Context API
Day 19 - useReducer
Day 20 - Custom hooks
Day 21 - React Query / TanStack Query basics
```

### Week 4 - Production-Level Frontend Skills

Status:

```text
Not started
```

Expected coverage:

```text
Day 22 - Styling
Day 23 - Accessibility
Day 24 - Performance
Day 25 - Testing
Day 26 - Mini project: contact form
Day 27 - Mini project: projects grid/cards
Day 28 - Mini project: theme system
```

### Final Block - Portfolio Polish

Status:

```text
Not started
```

Expected coverage:

```text
Day 29 - Portfolio refactor and polish
Day 30 - Final review, interview explanations, next roadmap
```

---

## Day 1 completed summary

Day 1 covered:

```text
Vite setup
npm install
npm run dev
generated files and folders
package.json scripts
index.html root div
main.tsx entry point
createRoot
StrictMode
App.tsx root component
first visible UI edit
first custom component
App.tsx as switchboard
```

Important Day 1 flow:

```text
index.html -> main.tsx -> App.tsx -> Day01Setup.tsx -> browser UI
```

Important correction:

```text
document.getElementById('root') finds the root div.
createRoot uses that div to create React's root.
.render(<App />) tells React what component to display there.
```

Current Day 1 custom component:

```text
src/week1/day01-setup/Day01Setup.tsx
```

---

## Day 2 completed summary

Day 2 covered:

```text
React apps as component trees
what a React component is
function components
JSX basics
component naming
default export and import
one parent wrapper rule
className instead of class
curly braces for JavaScript values
self-closing tags
component composition
portfolio mapping
final mixed exercise
```

Important Day 2 flow:

```text
App -> Day02ComponentsJSX -> child components -> browser UI
```

Important Day 2 rule:

```text
Defining a component does not display it.
Rendering the component displays it.
```

Current Day 2 folder:

```text
src/week1/day02-components-jsx/
```

Current Day 2 files:

```text
Day02ComponentsJSX.tsx
DayBadge.tsx
JSXRulesPractice.tsx
CompositionPractice.tsx
Day02FinalPractice.tsx
```

Important Day 2 final exercise:

```text
Day02FinalPractice
  -> FinalHeader
  -> ConceptSummary
  -> JSXRuleList
  -> SelfClosingReminder
```

Final mixed exercise status:

```text
Cleared
```

---

## Next day

```text
Day 3 - Props
```

Expected Day 3 focus:

```text
what props are
parent-to-child data flow
passing string props
passing number props
passing boolean props
receiving props in a child component
props are read-only
destructuring props
using props with JSX
mapping props to portfolio components
```

---

## Global React rules to build from Day 2

```text
React builds UI as a component tree.
Component names should start with capital letters.
Components return JSX.
Defining a component does not display it.
Rendering a component displays it.
JSX uses className, not class.
JSX must return one parent wrapper.
Use curly braces to insert JavaScript values into JSX.
Tags without children should be self-closing.
Use import/export to split components across files.
Use composition to build bigger UI from smaller components.
Props flow from parent to child.
Props are read-only.
State is data a component owns and can update.
Use the setter function to update state.
Do not mutate state directly.
State updates trigger re-renders.
Use event handlers for user actions.
Do not call event handlers immediately during render.
Use conditional rendering to show/hide UI.
Use map() to render lists.
Every rendered list item needs a stable key.
Use controlled inputs for forms.
Use useEffect only for side effects.
Do not use useEffect for values that can be calculated during render.
Always clean up event listeners and timers in useEffect.
Handle loading, error, empty, and success states for API calls.
Use TypeScript to type props, state, events, and API responses.
Avoid any unless there is a clear reason.
Prefer readable code over clever code.
```

---

## Global TypeScript rules to build from Day 2

```text
TypeScript adds static typing to JavaScript.
Use type or interface to define prop shapes.
Use string, number, boolean for primitive values.
Use string[] for arrays of strings.
Use union types for limited allowed values.
Use optional properties only when the prop can really be missing.
Use React.ChangeEvent<HTMLInputElement> for input changes when needed.
Use React.FormEvent<HTMLFormElement> for form submit handlers when needed.
Use useState<Type>() when TypeScript cannot infer the right type.
Use unknown instead of any when data is truly unknown.
Narrow unknown values before using them.
Type API response shapes before rendering API data.
Do not over-type obvious values just to look fancy.
```

---

## Portfolio mappings to keep using

```text
Verification rule -> Use GitHub repo for actual code structure and live site for visible behavior before making exact portfolio claims.

Components -> Hero, Projects, Contact, Navigation, Footer
JSX -> Tailwind className markup in portfolio components
Props -> AI assistant receives isOpen, setIsOpen, theme
State -> isAIOpen, contact form state, loading state
Events -> onClick, onChange, onSubmit
Conditionals -> AI assistant open/closed, mobile menu, loading button text
Lists -> project cards, technology badges, skills
Forms -> contact form
useEffect -> theme/localStorage, scroll listener, click-outside listener
Fetch/API -> contact form POST request, projects/API data
Routing -> home, resume, api docs, not found
Context -> possible theme state improvement
React Query -> possible server state/data fetching improvement
Testing -> contact form, AI assistant toggle, route rendering
Accessibility -> labels, buttons, links, aria-labels, focus states
Performance -> lazy loading, image optimization, avoiding unnecessary re-renders
```

Day 1 portfolio mapping:

```text
Portfolio main.tsx renders App.
Portfolio App.tsx acts as the app shell.
Portfolio Home.tsx composes sections like Navigation, Hero, Projects, Contact, and Footer.
Learning app main.tsx renders App.
Learning app App.tsx currently renders Day01Setup.
```

Day 2 portfolio mapping:

```text
Day02ComponentsJSX maps to Home page composition.
Day 2 child components map to focused portfolio section components.
JSX className maps to Tailwind className usage in the portfolio.
Curly braces map to rendering variables, props, state, arrays, and API data.
Self-closing component syntax maps to components like Navigation, Hero, Projects, Contact, and Footer.
Import/export maps to how portfolio sections are split into files and imported into parent components.
```

---

## Learning workflow rules

```text
Teach one topic at a time.
Combine tiny related topics when it improves flow.
Do not over-combine big concepts.
Give exercises as copy-paste comment blocks only for actual code practice.
For concept notes, use clean Markdown Q&A blocks.
React exercises should result in visible UI or clear TypeScript/React behavior.
Review submitted code before moving forward.
Do not move to the next topic until the current one is cleared.
After reviewing and clearing each topic, ask before proceeding to the next topic.
End each day with a focused mixed final exercise.
Avoid overly long final exercises.
Use fresh examples/scenarios in final mixed exercises instead of repeating the exact same topic-exercise examples.
After the final mixed exercise is cleared, ask before generating notes or updating the learning index.
Daily notes should be clean study notes, not a chat transcript or code dump.
Completed weeks should be consolidated into weekX_notes.md.
Weekly notes should summarize and organize; they should not paste all daily notes together.
```

---

## Recurring mistakes to watch for

| Pattern | Watch for |
|---|---|
| `class` in JSX | Use `className` |
| Multiple returned siblings | Wrap in one parent or fragment |
| Lowercase component names | Components should start with capital letters |
| Calling a handler during render | Use `onClick={() => handleClick()}`, not `onClick={handleClick()}` |
| Direct state mutation | Use setter functions and immutable updates |
| State based on old state | Use functional updates like `setOpen(prev => !prev)` |
| Missing key in list rendering | Add a stable key |
| Bad key choice | Avoid index as key when list can reorder/change |
| Props confusion | Props are passed by the parent and read by the child |
| Interface confusion | Type/interface defines shape; it does not create actual values |
| Controlled input confusion | Input value should come from state and onChange should update state |
| Missing preventDefault | Forms refresh the page without `event.preventDefault()` |
| Overusing useEffect | Do not use it for simple derived values |
| Missing cleanup | Remove listeners/timers in effect cleanup |
| Ignoring loading/error states | API UI needs more than the success path |
| Using any too quickly | Try proper types or unknown first |
| Over-complicated typing | Do not type obvious values just to look advanced |
| Mixing server state and UI state | API data is server state; input/open/closed values are UI state |
| Accessibility afterthought | Use labels, semantic elements, and keyboard-friendly behavior early |
| Pretty UI hiding weak logic | Make it work correctly before polishing |

Day 1 specific wording corrections:

| Less accurate | Better |
|---|---|
| `index.html calls main.tsx` | `index.html loads main.tsx` |
| `createRoot finds the root div` | `document.getElementById('root') finds the root div; createRoot uses it` |
| `App.tsx is mounted` | `main.tsx mounts <App /> into the root div` |
| `dev script has dev/build/lint/preview` | `scripts has those entries; dev specifically runs vite` |

Day 2 specific corrections:

| Issue | Correction |
|---|---|
| Missed exact punctuation | Match exercise output exactly when asked |
| Missed required `h2` | Read each prompt line and include all requested tags |
| Used inaccurate render comment after refactor | Keep comments aligned with actual component tree |
| Wrote `Seld-closing` | Corrected to `Self-closing` |
| External placeholder image did not load | Not a React issue; JSX syntax was correct |
| Mixed semicolon style | Prefer no semicolons for consistency unless formatter adds them |

---

## Day-specific key reminders

### Day 1

```text
Vite gives a fast local React dev setup.
npm install installs dependencies.
npm run dev starts the dev server.
index.html gives React a root div.
main.tsx starts the React app.
createRoot creates React's root using the root div.
App.tsx is the root app component.
App.tsx can act as the switchboard for the current day.
The browser updates from React component output.
```

### Day 2

```text
React apps are component trees.
A component is a function that returns JSX.
Defining a component does not show it.
Rendering a component shows it.
JSX looks like HTML but follows JavaScript/React rules.
Use className instead of class.
Use curly braces for JavaScript values.
Return one parent wrapper.
Use self-closing tags when there are no children.
Use composition to build bigger UI from smaller child components.
Use import/export to split components across files.
```

### Day 3

```text
Props are inputs from parent to child.
Props are read-only.
The parent decides the prop values.
The child receives and renders/uses them.
```

### Day 4

```text
Use type or interface to describe props.
TypeScript checks whether required props are passed correctly.
Optional props use ?.
Union types limit allowed values.
```

### Day 5

```text
State is data a component owns.
useState returns current value and setter.
Updating state causes a re-render.
Use functional updates when new state depends on previous state.
```

### Day 6

```text
Events respond to user actions.
Common events include onClick, onChange, and onSubmit.
Pass a function to an event handler.
Do not call the function immediately during render.
```

### Day 7

```text
Conditional rendering shows different UI based on state/props.
Use && for show/hide.
Use ternary for either/or.
Use map() to render arrays.
Every mapped item needs a key.
```

---

## Existing conceptual React knowledge

Already covered conceptually in previous portfolio-focused learning:

```text
React basics
components
JSX
props
state
event handling
conditional rendering
list rendering
controlled forms
useEffect
routing
fetch/API
supporting libraries
TypeScript basics
frontend interview depth
portfolio architecture
```

Current gap:

```text
Need to rebuild these concepts through VS Code exercises from basics.
Need stronger muscle memory, not just conceptual understanding.
```

---

## Current confidence level

```text
Ready to start Day 3 - Props
```

---

## Prompt to continue in a new chat

Use this:

```text
Check the README and learning_index.md in this project.

Continue my React + TypeScript learning from the project context.

Start Day 3 - Props.

Use Asabeneh's 30 Days Of React repo as the backbone, but modernize it for React + TypeScript + Vite.

Teach me one topic at a time. Give examples and VS Code exercises. Review my code strictly but fairly before moving forward.
```
