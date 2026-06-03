# Day 2 Notes - React Mental Model, Components, JSX

## Day status

Day 2 is cleared.

Main goal: understand React as a component tree, create function components, write JSX correctly, split components into files, and compose smaller components into a larger UI.

## 1. Core mental model

React apps are built as a tree of components.

```text
App
  -> Day02ComponentsJSX
      -> child components
```

A component is a JavaScript/TypeScript function that returns JSX.

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

To render a component:

```tsx
<DayHeader />
```

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

```text
Component names start with capital letters.
Components return JSX.
Components should usually own one focused piece of UI.
A component becomes a child only when another component renders it.
```

## 3. JSX basics

JSX is the HTML-like syntax React components return.

JSX can contain:

```text
regular HTML-like tags: main, section, h1, p, ul, li
custom components: <DayHeader />, <DayBadge />
JavaScript values inside {}
```

Mental model:

```text
JSX = UI description inside a component
```

## 4. JSX rules practiced

### One parent wrapper

A component must return one top-level parent.

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

Use a real wrapper like `main`, `section`, or `div` when it gives useful structure. Use a fragment only when grouping without extra DOM is useful.

### `className`, not `class`

In JSX, use `className`:

```tsx
<section className="card">Content</section>
```

This matters because the portfolio uses Tailwind classes through `className`.

### Curly braces for JavaScript values

Static text is written normally. JavaScript values go inside `{}`.

```tsx
const dayNumber = 2
return <p>Day {dayNumber}</p>
```

### Self-closing tags

Tags with no children should be self-closing.

```tsx
<input type="text" placeholder="Name" />
<img src="/image.png" alt="Example" />
<DayBadge />
```

## 5. Import and export

Components can live in separate files.

```tsx
function DayBadge() {
  return <p>Imported component from another file.</p>
}

export default DayBadge
```

Import and render:

```tsx
import DayBadge from './DayBadge'

<DayBadge />
```

For learning files, defining first and exporting at the bottom is usually easier to read.

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

The parent controls the structure. Child components own smaller focused pieces of UI.

Day 2 structure:

```text
Day02ComponentsJSX
  -> DayHeader
  -> DaySummary
  -> LearningStatus
  -> PortfolioConnection
  -> DayBadge
  -> JSXRulesPractice
  -> CompositionPractice
  -> Day02FinalPractice
```

## 7. File organization after Day 2

The main file started getting large, so related practice was split into focused files.

```text
src/week1/day02-components-jsx/
  Day02ComponentsJSX.tsx
  DayBadge.tsx
  JSXRulesPractice.tsx
  CompositionPractice.tsx
  Day02FinalPractice.tsx
```

Good rule:

```text
Group related practice into focused files.
Do not create one file per tiny exercise unless it improves clarity.
```

## 8. Exercises completed

```text
component tree
function components
export/import
JSX basics
one parent wrapper
className
curly braces
self-closing tags
component composition
final mixed checkpoint
```

Final mixed exercise:

```text
Day02FinalPractice
  -> FinalHeader
  -> ConceptSummary
  -> JSXRuleList
  -> SelfClosingReminder
```

Final exercise status: cleared.

## 9. Mistakes and corrections

| Issue | Correction |
|---|---|
| Missed exact punctuation/text | Match the prompt when exact output is requested |
| Missed required `h2` | Read every prompt line carefully |
| Comment became inaccurate after refactor | Keep comments aligned with actual component tree |
| Typed `Seld-closing` | Corrected to `Self-closing` |
| Placeholder image looked broken | Not a React issue; external image URL failed |
| Mixed semicolon style | Prefer no semicolons in this project unless formatter adds them |

Main reminder:

```text
A component can be conceptually correct but still fail the prompt if required text or structure is missing.
```

## 10. Portfolio mapping

Learning app:

```text
App -> Day02ComponentsJSX -> child components
```

Portfolio:

```text
App.tsx -> Home.tsx -> Navigation, Hero, Projects, Experience, Skills, About, Contact, Footer
```

Mapping:

| Day 2 concept | Portfolio connection |
|---|---|
| Component tree | Portfolio page sections compose together |
| JSX | Portfolio components return JSX |
| `className` | Tailwind styling uses `className` |
| `{}` | Dynamic values render inside JSX |
| Self-closing components | Components like `<Hero />` and `<Projects />` |
| Import/export | Portfolio sections live in separate files |

## 11. Interview-ready wording

```text
React apps are built through component composition. In my portfolio, App.tsx acts as the app shell with providers, routing, shared background layout, and floating UI. The Home page composes visible sections like Navigation, Hero, Projects, Experience, Skills, About, Contact, and Footer.
```

```text
JSX is the HTML-like syntax React components return. It lets me combine regular elements like div, main, and section with custom components, while using JavaScript values inside curly braces.
```

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

Next: Day 3 - Props.

Preview: child components are currently hardcoded; props will let parent components pass data into child components.
