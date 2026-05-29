# React Rules - Coding Rules Learned So Far

This file contains cumulative React + TypeScript coding rules learned so far.

Keep this focused on coding, syntax, and component rules. Workflow rules belong in `project_rules.md`.

## Scope

```text
Current scope: Day 1 through Day 5
Next update: only if Day 6 adds reusable React/TypeScript rules
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
React rules captured through Day 5.
Update this file only when new reusable React/TypeScript coding rules are learned.
```
