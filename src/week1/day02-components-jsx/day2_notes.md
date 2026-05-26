# Day 2 Notes - React Mental Model, Components, JSX

## Day status

Day 2 is cleared.

Main goal: understand React as a component tree, create function components, write JSX correctly, split components into files, and compose smaller components into a bigger UI.

---

## 1. Core mental model

React apps are built as a tree of components.

```text
App
  -> Day02ComponentsJSX
      -> small child components
```

A component is just a JavaScript/TypeScript function that returns JSX.

```tsx
function DayHeader() {
  return <h1>Day 2 - React Mental Model</h1>
}
```

Important rule:

```text
Defining a component does not show it.
Rendering the component shows it.
```

Example:

```tsx
<DayHeader />
```

---

## 2. Function components

Modern React mainly uses function components.

Basic shape:

```tsx
function ComponentName() {
  return (
    <section>
      <h2>Title</h2>
      <p>Text</p>
    </section>
  )
}
```

Rules:

- Component names start with capital letters.
- Components return JSX.
- Components should usually own one focused piece of UI.
- A component becomes a child only when another component renders it.

---

## 3. JSX basics

JSX is the HTML-like syntax React components return.

Example:

```tsx
function JSXBasics() {
  return (
    <section>
      <h2>JSX basics</h2>
      <p>JSX lets React components describe UI.</p>
    </section>
  )
}
```

JSX can contain:

- HTML-like tags: `main`, `section`, `h1`, `p`, `ul`, `li`
- custom components: `<DayHeader />`, `<DayBadge />`
- JavaScript values inside `{}`

Mental model:

```text
JSX = UI description inside a component
```

---

## 4. JSX rules practiced

### One parent wrapper

A component must return one top-level parent.

Correct:

```tsx
function WrapperRule() {
  return (
    <section>
      <h2>One parent wrapper</h2>
      <p>JSX must return one top-level parent element.</p>
    </section>
  )
}
```

Use a real wrapper like `section`, `main`, or `div` when it gives structure. Use a fragment only when you need grouping without adding another DOM element.

### `className`, not `class`

In JSX, use `className`.

```tsx
<section className="jsx-rule-card">
  <h2 className="jsx-rule-title">className, not class</h2>
</section>
```

This matters because the portfolio uses Tailwind classes through `className`.

### Curly braces for JavaScript values

Use `{}` when inserting JavaScript values into JSX.

```tsx
function JavaScriptValuesRule() {
  const topic = "JSX"
  const dayNumber = 2

  return <p>I am learning {topic} on Day {dayNumber}.</p>
}
```

Static text is written normally. JavaScript values go inside `{}`.

### Self-closing tags

Tags with no children should be self-closing.

```tsx
<input type="text" placeholder="Self-closing input" />
<img src="https://via.placeholder.com/80" alt={imageAlt} />
<DayBadge />
```

The external placeholder image did not load, but that was not a React issue. The JSX syntax was correct.

---

## 5. Import and export

Components can live in separate files.

Example:

```tsx
export default function DayBadge() {
  return <p>Imported component from another file.</p>
}
```

Import and render it:

```tsx
import DayBadge from './DayBadge'

<DayBadge />
```

Both styles are valid:

```tsx
function DayBadge() {
  return <p>Imported component from another file.</p>
}

export default DayBadge
```

or:

```tsx
export default function DayBadge() {
  return <p>Imported component from another file.</p>
}
```

For learning files, defining first and exporting at the bottom is often easier to read.

---

## 6. Component composition

Composition means building bigger UI from smaller components.

```tsx
function CompositionPractice() {
  return (
    <section>
      <CompositionIntro />
      <ParentChildReminder />
    </section>
  )
}
```

The parent component controls the structure. Child components own smaller focused pieces of UI.

Day 2 final structure:

```text
Day02ComponentsJSX
  -> DayHeader
  -> DaySummary
  -> LearningStatus
  -> PortfolioConnection
  -> DayBadge
  -> JSXBasics
  -> WrapperRule
  -> JSXRulesPractice
  -> CompositionPractice
  -> Day02FinalPractice
```

---

## 7. File organization after Day 2

The main file started getting bloated, so we split related practice into focused files.

```text
src/week1/day02-components-jsx/
  Day02ComponentsJSX.tsx
  DayBadge.tsx
  JSXRulesPractice.tsx
  CompositionPractice.tsx
  Day02FinalPractice.tsx
```

Roles:

```text
Day02ComponentsJSX.tsx = main Day 2 composer
DayBadge.tsx = import/export practice
JSXRulesPractice.tsx = JSX syntax rules
CompositionPractice.tsx = composition practice
Day02FinalPractice.tsx = final mixed exercise
```

Good rule:

```text
Group related practice into focused files.
Do not create one file per tiny exercise unless it improves clarity.
```

---

## 8. Exercises completed

- Exercise 1 - Component tree
- Exercise 2 - What is a component?
- Exercise 3 - Function components
- Exercise 4 - Export and import
- Exercise 5 - JSX basics
- Exercise 6 - One parent wrapper
- Exercise 7 - `className`, not `class`
- Exercise 8 - Curly braces for JavaScript values
- Exercise 9 - Self-closing tags
- Exercise 10 - Component composition
- Final mixed exercise - React learning checkpoint card

Final mixed exercise components:

```text
Day02FinalPractice
  -> FinalHeader
  -> ConceptSummary
  -> JSXRuleList
  -> SelfClosingReminder
```

Final exercise status: cleared.

---

## 9. Mistakes and corrections

| Issue | Correction |
|---|---|
| Missed period in exact output | Match exercise text exactly when asked |
| Missed required `h2` | Read every prompt line carefully |
| Missed comma/period in sentence | Exact text matters in exercises |
| Comment became inaccurate after refactor | Keep comments aligned with actual component tree |
| Typed `Seld-closing` | Corrected to `Self-closing` |
| Placeholder image looked broken | Not a React issue; external image URL did not load |
| Mixed semicolon style | Prefer no semicolons in this project unless formatter adds them |

Semicolon note:

```text
Both styles are valid in JavaScript/TypeScript.
For this project, prefer no semicolons for consistency.
```

---

## 10. Portfolio mapping

Day 2 maps directly to the portfolio.

Learning app:

```text
App -> Day02ComponentsJSX -> child components
```

Portfolio:

```text
main.tsx
  -> App.tsx
    -> Home.tsx
      -> Navigation
      -> Hero
      -> Projects
      -> Experience
      -> Skills
      -> About
      -> Contact
      -> Footer
```

Mapping:

| Day 2 practice | Portfolio equivalent |
|---|---|
| `Day02ComponentsJSX` | `Home` page composition |
| child components | focused portfolio section components |
| `className` | Tailwind styling in portfolio JSX |
| `{}` | rendering variables, props, state, arrays, and API data |
| self-closing components | `<Navigation />`, `<Hero />`, `<Projects />`, etc. |
| import/export | portfolio components split into files and imported by parent components |

Key idea:

```text
Home.tsx composes visible page sections.
App.tsx composes the app shell: providers, routing, shared UI, background, and floating buttons.
```

---

## 11. Interview-ready wording

Component composition:

React apps are built through component composition. In my portfolio, `App.tsx` acts as the app shell with providers, routing, shared background layout, and floating UI. The `Home` page then composes the visible portfolio sections by rendering components like `Navigation`, `Hero`, `Projects`, `Experience`, `Skills`, `About`, `Contact`, and `Footer`. The same idea applies to my learning app: `Day02ComponentsJSX` is the parent component, and it renders smaller focused child components.

JSX:

JSX is the HTML-like syntax React components return. In my portfolio, JSX is used to combine regular HTML elements like `div`, `main`, and `section` with custom components like `Hero`, `Projects`, and `Contact`. I use React-specific JSX rules like `className` instead of `class`, one top-level wrapper per component, curly braces for JavaScript values, and self-closing tags for components or elements without children.

Import/export:

Components can live in separate files. A component file exports the component, and the parent file imports it before rendering it. In my learning app, `DayBadge`, `JSXRulesPractice`, `CompositionPractice`, and `Day02FinalPractice` are imported into `Day02ComponentsJSX` and rendered as child components.

---

## 12. What to remember before Day 3

```text
React app = component tree
Component = function that returns JSX
Defining a component does not display it
Rendering a component displays it
JSX must return one top-level parent
Use className instead of class
Use {} for JavaScript values
Use self-closing tags when there are no children
Use import/export to split components across files
Composition keeps bigger UI readable
```

Next:

```text
Day 3 - Props
```

Day 3 will build on this idea:

```text
Right now, child components are hardcoded.
Next, props will let parent components pass data into child components.
```
