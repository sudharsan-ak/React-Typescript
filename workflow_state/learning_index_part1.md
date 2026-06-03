# Learning Index Part 1 - Week 1

Historical progress archive for the React + TypeScript learning project.

Source backbone:
https://github.com/Asabeneh/30-Days-Of-React

## Scope

```text
Part 1 covers Week 1 only.
Week 1: Day 1 to Day 7
Status: Completed
Next index: Part 2 / Week 2
Next day: Day 8 - Component composition and reusable components
```

This file is now the finalized Week 1 archive.

---

## Completed days

| Day | Topic | Status | Consolidated notes |
|---|---|---|---|
| Day 1 | Setup, Vite, React app structure, `main.tsx`, `App.tsx` | Cleared | `week1_notes.md` |
| Day 2 | React mental model, components, JSX | Cleared | `week1_notes.md` |
| Day 3 | Props | Cleared | `week1_notes.md` |
| Day 4 | TypeScript props with `type` and `interface` | Cleared | `week1_notes.md` |
| Day 5 | State with `useState` | Cleared | `week1_notes.md` |
| Day 6 | Event handling | Cleared | `week1_notes.md` |
| Day 7 | Conditional rendering and list rendering | Cleared | `week1_notes.md` |

---

## Week 1 - React Foundations

Status:

```text
Cleared
```

Main Week 1 foundation:

```text
React app startup
component tree
JSX
props
TypeScript prop typing
state
event handling
conditional rendering
list rendering
```

---

## Day 1 summary

Covered:

```text
Vite setup
npm install
npm run dev
index.html root div
main.tsx entry point
createRoot
StrictMode
App.tsx root component
first custom component
App.tsx as switchboard
```

Key reminder:

```text
index.html -> main.tsx -> App.tsx -> component -> browser UI
```

---

## Day 2 summary

Covered:

```text
React apps as component trees
function components
JSX basics
component naming
import/export
one parent wrapper
className instead of class
curly braces for JavaScript values
self-closing tags
component composition
```

Key reminder:

```text
Defining a component does not display it.
Rendering the component displays it.
```

---

## Day 3 summary

Covered:

```text
props mental model
parent-to-child data flow
passing string, number, and boolean props
receiving props through props object
receiving props through destructuring
props are read-only
reusable components with props
```

Key reminder:

```text
Props are inputs from parent to child.
The parent owns the value.
The child receives the value.
The child should treat props as read-only.
```

---

## Day 4 summary

Covered:

```text
why inline prop typing gets messy
named prop types using type
props using interface
beginner type vs interface
optional props
union props
default values for optional props
array props
map rendering
typed reusable portfolio-style cards
```

Key reminder:

```text
type/interface defines the expected shape.
The parent still passes actual values.
Union types limit allowed values.
Default values are assigned in component logic/destructuring.
```

---

## Day 5 summary

Covered:

```text
state mental model
useState syntax
current value and setter
initial state value
state vs props
number state
boolean state
string state
union state
object state
functional updates
spread syntax
no direct mutation
basic conditional rendering with boolean state
```

Key reminder:

```text
State is component-owned data that can change.
Call the setter to update state.
Use functional updates when the next state depends on previous state.
Use spread syntax when updating one field inside object state.
Do not mutate state directly.
```

---

## Day 6 summary

Covered:

```text
event mental model
onClick basics
inline handlers
named handler functions
event handlers updating state
passing custom arguments to handlers
event object basics
currentTarget vs target
button click event typing
input/change event preview
controlled input preview
resetting multiple state values from one handler
```

Key reminder:

```text
React gives the event to the function assigned to the event prop.
If a custom argument is needed, use an arrow wrapper.
If the named handler also needs the event, the arrow wrapper must forward it.
currentTarget is the element with the handler.
target is the actual element that triggered the event.
```

---

## Day 7 summary

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
nested lists
filter before map
conditional rendering inside lists
optional object fields
final mixed exercise
```

Key reminder:

```text
Use early returns for big branches.
Use ternary for A/B UI.
Use && for optional UI.
Use map() to render arrays.
Use stable keys when available.
Use filter() before map() when rendering a subset.
Handle empty and optional data with fallback UI.
```

---

## Week 1 portfolio mapping summary

Verified mappings live in `portfolio_mapping.md`.

Main Week 1 mappings:

```text
App.tsx -> startup/app shell, routing/providers/shared UI, theme state
SmartAIAssistantButton.tsx -> typed props, optional theme, boolean open state, click toggle
Projects.tsx -> arrays of objects, repeated project cards, nested technologies/highlights, optional UI
Contact.tsx -> object form state, loading state, input/change preview, submit handling
```

---

## Week 1 interview summary

Use this as a compact Week 1 explanation:

```text
My React portfolio is built from reusable components. The app starts from main.tsx, renders App.tsx, and App connects the main shell, routes, providers, and shared UI. Props pass data from parent to child, TypeScript defines the expected prop and state shapes, useState manages changing UI values, and event handlers update state based on user actions. Conditional rendering decides what UI appears, and map rendering turns arrays of data into repeated UI like project cards, skill badges, and task lists.
```

---

## Separate files for details

Mistakes and gotchas:

```text
mistakes_log.md
```

React + TypeScript coding rules:

```text
react_rules.md
```

Verified portfolio mappings:

```text
portfolio_mapping.md
```

Interview wording:

```text
interview_wording.md
```

Workflow and update rules:

```text
project_rules.md
```

Current progress:

```text
current_status.md
```

Consolidated Week 1 notes:

```text
week1_notes.md
```

---

## Cleanup note

After `week1_notes.md` is uploaded to Project Sources, individual daily notes for Day 1 through Day 7 can be removed from Project Sources.

```text
day1_notes.md through day7_notes.md -> no longer needed in Project Sources
week1_notes.md -> keep as consolidated Week 1 notes
```

---

## Current confidence level

```text
Week 1 cleared.
Ready for Day 8 - Component composition and reusable components.
```
