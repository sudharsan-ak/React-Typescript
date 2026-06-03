# Week 1 Notes - React Foundations

## Week status

Week 1 is cleared.

Scope:

```text
Day 1 - Setup, Vite, React app structure, main.tsx, App.tsx
Day 2 - React mental model, components, JSX
Day 3 - Props
Day 4 - TypeScript props with type and interface
Day 5 - State with useState
Day 6 - Event handling
Day 7 - Conditional rendering and list rendering
```

Week 1 goal: build the foundation needed to understand and explain a modern React + TypeScript portfolio app.

---

## 1. Week 1 mental model

React apps are built from components.

```text
index.html -> main.tsx -> App.tsx -> components -> browser UI
```

By the end of Week 1, the core flow became:

```text
data/state/props -> event handlers update state -> React re-renders -> JSX shows the matching UI
```

The main foundation:

```text
components describe UI
props pass data down
state owns changing data
events update state
conditionals decide what appears
map renders repeated UI
```

---

## 2. Day 1 - Setup and app startup

Covered:

```text
Vite + React + TypeScript setup
npm install
npm run dev
index.html root div
main.tsx entry point
createRoot
StrictMode
App.tsx as the root/switchboard component
first custom learning component
```

Key flow:

```text
index.html provides <div id="root"></div>
main.tsx finds that root div
createRoot creates the React root
main.tsx renders <App />
App.tsx returns the visible UI or routes to the current learning component
```

Important wording:

```text
index.html loads main.tsx.
main.tsx mounts <App /> into the root div.
App.tsx returns the UI React renders.
```

---

## 3. Day 2 - Components and JSX

Covered:

```text
React component tree
function components
JSX basics
one top-level parent
className instead of class
curly braces for JavaScript values
self-closing tags
import/export
component composition
```

Core rules:

```text
A component is a function that returns JSX.
Component names start with uppercase letters.
Defining a component does not display it.
Rendering a component displays it.
Composition builds bigger UI from smaller components.
```

Portfolio connection:

```text
App.tsx composes the app shell.
Home.tsx composes visible sections like Hero, Projects, Skills, Experience, Contact, and Footer.
```

---

## 4. Day 3 - Props

Covered:

```text
props mental model
parent-to-child data flow
string/number/boolean props
props object style
props destructuring
props are read-only
reusable components with props
```

Core rules:

```text
Props are inputs from parent to child.
The parent owns the value.
The child receives and uses the value.
Props should be treated as read-only.
Same component + different props = reusable UI.
```

Important correction:

```text
The direct parent is the component that renders the child, not necessarily the file that imports it from the top level.
```

Portfolio connection:

```text
SmartAIAssistantButton receives props like isOpen, setIsOpen, and theme.
Repeated portfolio UI patterns use data passed into reusable components.
```

---

## 5. Day 4 - TypeScript props

Covered:

```text
why inline prop typing gets messy
named type definitions
interface definitions
type vs interface beginner rule
optional props
union props
default values
array props
typed reusable cards
```

Core rules:

```text
type/interface defines the expected shape.
The parent still passes the actual values.
Use ? only when a prop may actually be missing.
Union types limit values to known options.
Default values belong in component logic/destructuring, not inside the type/interface.
```

Example patterns:

```tsx
type ProjectStatus = "live" | "in-progress" | "planned"
```

```tsx
interface ProjectCardProps {
  title: string
  technologies: string[]
  githubUrl?: string
}
```

Portfolio connection:

```text
App.tsx uses a theme union state.
SmartAIAssistantButton uses a typed props interface with optional theme.
Projects.tsx uses object-shaped project data and arrays.
```

---

## 6. Day 5 - State with useState

Covered:

```text
state mental model
useState syntax
state vs props
number state
boolean state
string union state
object state
functional updates
spread syntax
no direct mutation
```

Core rules:

```text
State is component-owned data that can change.
useState returns current value + setter.
Call the setter to update state.
Use functional updates when the next state depends on the previous state.
Do not mutate object state directly.
Use spread syntax when updating one field in object state.
```

Example:

```tsx
setIsPanelOpen((previousValue) => !previousValue)
```

Object update:

```tsx
setLearningProfile((previousProfile) => ({
  ...previousProfile,
  focusArea: "Object state with useState",
}))
```

Portfolio connection:

```text
App owns theme state.
AI assistant uses boolean open/closed state.
Contact form uses object state for related fields.
```

---

## 7. Day 6 - Event handling

Covered:

```text
event mental model
onClick
inline handlers
named handlers
event handlers updating state
passing arguments to handlers
event object basics
currentTarget vs target
button click event typing
input/change event preview
```

Core flow:

```text
user action -> handler runs -> handler updates state or reads event -> React re-renders
```

Important rules:

```text
Pass handlers with onClick={handleClick}.
Do not call handlers during render with onClick={handleClick()}.
Use arrow wrappers when passing custom arguments.
Use currentTarget when you want the element with the handler.
target is the actual nested element that triggered the event.
```

Examples:

```tsx
<button onClick={handleResetPanel}>Reset</button>
```

```tsx
<button onClick={() => handleSelectSection("Projects")}>Projects</button>
```

```tsx
function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
  setDisplayName(event.currentTarget.value)
}
```

Portfolio connection:

```text
AI assistant button click toggles open state.
Contact form input/change and submit handlers update form state and prevent default submit refresh.
```

---

## 8. Day 7 - Conditional rendering and list rendering

Covered:

```text
conditional rendering mental model
if/else before return
early returns
fallback UI
returning null
ternary rendering
&& rendering
show/hide UI from boolean state
list rendering with map
keys and stable identity
empty array fallback
arrays of objects
nested maps
filter before map
conditional rendering inside mapped cards
optional object fields
```

Core rules:

```text
Use early returns for big UI branches.
Use ternary when you need A or B.
Use && when you only need to show something if true.
Use fallback UI when the user needs feedback.
Use null when rendering nothing is intentional.
Use map() to render arrays.
Use stable ids as keys when available.
Use filter() before map() when showing a subset.
Do not put <p> directly inside <ul>.
```

Example patterns:

```tsx
{isCompleted ? <p>Complete</p> : <p>Incomplete</p>}
```

```tsx
{task.priority === "high" && <p>High priority</p>}
```

```tsx
{tasks.map((task) => (
  <article key={task.id}>
    <h3>{task.title}</h3>
  </article>
))}
```

Final exercise:

```text
Portfolio launch readiness board
```

Practiced filters, selected area state, show/hide completed state, object arrays, optional fields, conditional cards, nested tags, stable keys, and fallback UI.

Portfolio connection:

```text
Projects.tsx is the strongest Week 1 mapping for arrays, object data, nested map rendering, optional UI, and project-card rendering.
```

---

## 9. Common Week 1 mistakes and gotchas

| Pattern | Reminder |
|---|---|
| Prompt mismatch | Working code can still fail if exact output/structure is missing |
| JSX wrapper | Return one top-level parent |
| `class` in JSX | Use `className` |
| Props mutation | Props are read-only |
| Type/interface confusion | They define shape only; they do not create actual values |
| Optional props | Handle missing values with fallback/defaults |
| State mutation | Use setters; do not mutate state directly |
| Object state | Spread previous object before updating one field |
| Calling handlers | Use `onClick={handleClick}`, not `onClick={handleClick()}` |
| Handler arguments | Use arrow wrappers for custom arguments |
| Event target | Prefer `currentTarget` when you want the handler owner |
| `ul` structure | Direct children of `ul` should be `li` |
| Keys | Prefer stable ids over indexes |
| Portfolio mapping | Do not guess implementation; use verified mappings only |

---

## 10. Week 1 portfolio mapping summary

Verified concepts used across the portfolio:

```text
App.tsx -> app shell, routing, providers, shared UI, theme state
SmartAIAssistantButton.tsx -> typed props, optional theme, boolean open state, click toggle
Projects.tsx -> project data array, repeated project cards, nested technologies/highlights, optional GitHub UI
Contact.tsx -> object form state, loading state, input/change handling, submit handling
```

High-level mapping:

```text
Day 1 -> portfolio startup flow
Day 2 -> component composition
Day 3 -> props and reusable components
Day 4 -> typed props and unions
Day 5 -> component-owned state
Day 6 -> user events updating state
Day 7 -> conditional UI and repeated list/card rendering
```

---

## 11. Week 1 interview-ready summary

My portfolio is a React + TypeScript app built with reusable components. The app starts from `main.tsx`, renders `App.tsx`, and then composes pages and sections through components. Props let parent components pass data into children, TypeScript defines the expected shape of props and state, and `useState` manages component-owned values like theme, open/closed UI, and form fields.

User actions are handled through React events like `onClick` and `onChange`. Event handlers update state, and React re-renders the UI based on the new state. Conditional rendering decides whether to show loading, fallback, optional, or normal UI. List rendering uses `.map()` to turn arrays into repeated JSX, with keys helping React track item identity.

The strongest portfolio examples are the project rendering flow, the AI assistant state/props/event flow, and the contact form flow.

---

## 12. File/source cleanup after Week 1

Once this `week1_notes.md` file is uploaded to Project Sources, the individual Week 1 daily notes are no longer needed there.

Remove from Project Sources if possible:

```text
day1_notes.md
day2_notes.md
day3_notes.md
day4_notes.md
day5_notes.md
day6_notes.md
day7_notes.md
```

Keep:

```text
week1_notes.md
learning_index_part1.md
current_status.md
react_rules.md
mistakes_log.md
portfolio_mapping.md
interview_wording.md
project_rules.md
learning_roadmap.md
README.md
```

---

## 13. Next step

```text
Day 8 - Component composition and reusable components
```

Day 8 should build on Week 1 by improving how components are split, composed, reused, and kept readable as UI grows.
