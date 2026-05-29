# Learning Index Part 1 - Week 1

Historical progress archive for the React + TypeScript learning project.

Source backbone:
https://github.com/Asabeneh/30-Days-Of-React

## Scope

```text
Part 1 covers Week 1 only.
Week 1: Day 1 to Day 7
Current completed through: Day 5
Next: Day 6 - Event handling
```

After Day 7 is cleared, update this file one final time and freeze it as the completed Week 1 archive.

---

## Completed days

| Day | Topic | Status | Notes file |
|---|---|---|---|
| Day 1 | Setup, Vite, React app structure, `main.tsx`, `App.tsx` | Cleared | `day1_notes.md` |
| Day 2 | React mental model, components, JSX | Cleared | `day2_notes.md` |
| Day 3 | Props | Cleared | `day3_notes.md` |
| Day 4 | TypeScript props with `type` and `interface` | Cleared | `day4_notes.md` |
| Day 5 | State with `useState` | Cleared | `day5_notes.md` |
| Day 6 | Event handling | Not started | - |
| Day 7 | Conditional rendering and list rendering | Not started | - |

---

## Week 1 - React Foundations

Status:

```text
In progress
Completed: Day 1 through Day 5
Remaining: Day 6 and Day 7
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

## Day 6 preview

Next:

```text
Day 6 - Event handling
```

Expected focus:

```text
onClick basics
inline handlers
named handler functions
event object basics
passing arguments to handlers
how handlers trigger state updates
portfolio mapping to AI assistant toggle and contact form events
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

---

## Current confidence level

```text
Ready for Day 6 - Event handling
```
