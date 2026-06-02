# React Rules - Coding Rules Learned So Far

This file contains cumulative React + TypeScript coding rules learned so far.

Keep this focused on coding, syntax, and component rules. Workflow rules belong in `project_rules.md`.

## Scope

```text
Current scope: Day 1 through Day 6
Next update: only if Day 7 adds reusable React/TypeScript rules
```

## Global React rules learned so far

```text
React builds UI as a component tree.
A component is a function that returns JSX.
Component names should start with capital letters.
Defining a component does not display it.
Rendering a component displays it.
Components should usually own one focused piece of UI.
Use import/export to split components across files.
Use composition to build bigger UI from smaller components.
```

## JSX rules learned so far

```text
JSX is HTML-like syntax inside React components.
Use className, not class.
Use htmlFor, not for.
Return one parent wrapper from a component.
Use fragments only when grouping without extra DOM is useful.
Use curly braces to insert JavaScript values into JSX.
Tags with no children should be self-closing.
The > in an opening JSX tag closes the opening tag and starts the content.
Use readable spacing like return (, not return(.
Use <hr /> instead of <hr></hr>.
```

## Props rules learned so far

```text
Props are inputs passed from parent to child.
The parent decides the actual prop values.
The child receives and uses props.
Props are read-only.
Props flow downward.
The direct parent is the component that renders the child.
Parent/child relationship is based on rendering, not file names.
Strings can be passed with quotes.
Numbers and booleans should be passed with curly braces.
Same component + different props = reusable UI.
You can receive props with the props object style or with destructuring.
Destructuring is cleaner when a component has several props.
```

## TypeScript prop rules learned so far

```text
Inline prop typing is okay for tiny examples.
Larger/reusable components should use a named type or interface.
A type or interface defines the prop shape; it does not create actual values.
The parent still passes the actual values.
Use type for reusable prop aliases and union types.
Use interface for object-shaped prop contracts when it reads better or a project prefers it.
For React props, type and interface are both valid.
Use optional props only when the parent may actually omit the value.
Optional props use ?.
Union props limit values to a known set.
A union type does not create a default value.
Default values are assigned in component destructuring or component logic, not in the type/interface.
Use string[] for arrays of strings.
Use stable keys when rendering arrays.
Use ul/li for real lists instead of p tags.
```

## State rules learned so far

```text
State is component-owned data that can change over time.
useState returns the current state value and a setter function.
The initial value passed to useState is the first state value.
Call the setter to update state.
Do not reassign the state variable directly.
Use functional updates when the next state depends on the previous state.
Boolean state is useful for open/closed, visible/hidden, enabled/disabled, and loading states.
String union state is useful when only fixed string options should be allowed.
Object state is useful when related values belong together.
Do not mutate object state directly.
When updating one object field, create a new object with spread syntax.
useState does not automatically merge object fields.
```

## Event handling rules learned so far

```text
React event props use camelCase, like onClick, onChange, and onSubmit.
An event handler is a function that runs when an event happens.
Pass a handler reference with onClick={handleClick}.
Do not call a handler during render with onClick={handleClick()} unless that is intentionally returning another function.
Inline handlers are okay for tiny one-off actions.
Use named handlers for meaningful logic or cleaner JSX.
Event handlers often call state setters.
Use functional updates inside event handlers when the next state depends on the previous state.
```

## Passing arguments to event handlers

```text
No custom argument needed -> onClick={handleClick}
Custom argument needed -> onClick={() => handleClick(value)}
Custom argument plus event needed -> onClick={(event) => handleClick(value, event)}
```

Examples:

```tsx
<button onClick={handleResetPanel}>Reset panel</button>
```

```tsx
<button onClick={() => handleSelectSection("Projects")}>
  Projects
</button>
```

```tsx
<button onClick={(event) => handleSelectSection("Projects", event)}>
  Projects
</button>
```

## Event object rules

```text
React passes the event object to the function assigned to the event prop.
If the function assigned to onClick is a named handler, the named handler receives the event.
If the function assigned to onClick is an arrow wrapper, the arrow wrapper receives the event.
A named handler behind an arrow wrapper receives the event only if the arrow forwards it.
React.MouseEvent<HTMLButtonElement> is a TypeScript type, not the runtime event value.
React.ChangeEvent<HTMLInputElement> is the common type for text input change handlers.
Use currentTarget when you want the element that owns the handler.
Use target when you specifically need the actual element that triggered the event.
```

Useful typing examples:

```tsx
function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
  console.log(event.currentTarget.textContent)
}
```

```tsx
function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
  setDisplayName(event.currentTarget.value)
}
```

## Day 4 examples to remember

```tsx
type ProjectStatus = "live" | "in-progress" | "planned"
```

```tsx
interface ProjectStatusCardProps {
  title: string
  status: ProjectStatus
  category?: string
  isFeatured?: boolean
}
```

```tsx
function ProjectStatusCard({
  title,
  status,
  category = "General",
  isFeatured = false,
}: ProjectStatusCardProps) {
  // JSX
}
```

## Day 5 examples to remember

Number state:

```tsx
const [practiceCount, setPracticeCount] = useState(0)
setPracticeCount((previousCount) => previousCount + 1)
```

Boolean toggle:

```tsx
const [isPanelOpen, setIsPanelOpen] = useState(false)
setIsPanelOpen((previousValue) => !previousValue)
```

String union state:

```tsx
type PortfolioSection = "Projects" | "Skills" | "Contact"
const [selectedSection, setSelectedSection] = useState<PortfolioSection>("Projects")
```

Object state update:

```tsx
setLearningProfile((previousProfile) => ({
  ...previousProfile,
  focusArea: "Object state with useState",
}))
```

Prevent a counter from going below zero:

```tsx
setCompletedExercises((previousCount) => Math.max(previousCount - 1, 0))
```

## Day 6 examples to remember

Named click handler:

```tsx
function handleNamedClick() {
  console.log("Named handler clicked")
}

<button onClick={handleNamedClick}>Named click</button>
```

Argument-passing handler:

```tsx
function handleSelectSection(section: PortfolioSection) {
  setSelectedSection(section)
}

<button onClick={() => handleSelectSection("Contact")}>
  Contact
</button>
```

Button event object:

```tsx
function handleLogEventTarget(event: React.MouseEvent<HTMLButtonElement>) {
  console.log("currentTarget text:", event.currentTarget.textContent)
  console.log("target:", event.target)
}
```

Input change event:

```tsx
function handleDisplayNameChange(event: React.ChangeEvent<HTMLInputElement>) {
  setDisplayName(event.currentTarget.value)
}
```

## List rendering reminders

```text
map() turns an array into repeated JSX.
Each rendered list item needs a key.
The key helps React track list item identity.
key does not display in the browser.
key={technology} is okay only if technology values are unique.
A stable id is better when available.
```

Example:

```tsx
<ul>
  {technologies.map((technology) => (
    <li key={technology}>{technology}</li>
  ))}
</ul>
```

## Current status

```text
React rules captured through Day 6.
Update this file only when new reusable React/TypeScript coding rules are learned.
```
