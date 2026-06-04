# Mistakes Log - React + TypeScript Learning Project

Recurring mistakes, prompt mismatches, and reusable gotchas observed during the learning project.

## Scope

```text
Current scope: Day 1 through Day 8
Next update: only if Day 9 introduces reusable mistakes/gotchas
```

Use this file as the dedicated place for mistakes and gotchas. Keep `learning_index_part*.md` focused on historical progress and reminders.

## Recurring mistakes and gotchas

| Pattern | Watch for |
|---|---|
| Prompt mismatch | Code can be conceptually correct but still fail the prompt if exact text/structure is missing |
| Missing exact output text | Example: forgot `years` in `Experience: 6 years` |
| Missing labels | Example: rendered `{status}` instead of `Status: {status}` |
| Extra examples | Rendering more examples than requested can be okay for learning, but in assessments stick to the prompt |
| `return(` spacing | Prefer `return (` for readability |
| `<hr></hr>` | Prefer self-closing `<hr />` in JSX |
| Raw GitHub links | Use normal GitHub file pages in user-facing answers, not raw.githubusercontent links |
| Portfolio mapping format | Filename should be inline code; do not use visible markdown GitHub links when the source chip style is expected |
| Source order confusion | Declaration order can work, but readable structure matters: types/interfaces, components, main component, export |
| Render order confusion | The order inside JSX controls browser display order |
| Type/interface confusion | They define shape only; they do not create actual values |
| Union/default confusion | A union limits allowed values; it does not set a default value |
| Optional prop handling | If a prop is optional, handle missing values with fallback or default destructuring |
| Loose string props | Use union types when only known values should be allowed |
| Array rendering structure | Use `ul/li` for real lists, not repeated `p` tags |
| Invalid `ul` children | Do not put `<p>` directly inside `<ul>`; use `<li>` inside lists and put fallback text outside the list |
| Key uniqueness | `key={value}` is fine only when values are unique among siblings; stable ids are better |
| Index keys | Avoid index keys unless the list is static and never reorders/inserts/deletes |
| Portfolio guessing | Do not claim exact portfolio implementation unless verified in repo/live site |
| Giving solutions too early | If the user asks for placement/snippet style, do not provide the completed implementation |
| Calling handlers immediately | `onClick={handleClick()}` runs during render; use `onClick={handleClick}` unless intentionally returning a function |
| Forgetting arrow wrapper for arguments | Use `onClick={() => handleClick(value)}` when passing a custom value |
| Forgetting to forward event | If using an arrow wrapper and the named handler needs the event, use `(event) => handleClick(value, event)` |
| Event type vs event object confusion | `React.MouseEvent<HTMLButtonElement>` is the TypeScript type, not the runtime event object |
| `currentTarget` vs `target` confusion | `currentTarget` is the handler owner; `target` is the actual clicked element |
| Overusing inline handlers | Inline handlers are okay for tiny logic, but move meaningful logic to named handlers |
| Overusing inline styles | In rendering exercises, avoid inline style unless styling is the point |

## Review categories

When reviewing code, classify issues as:

```text
Actual mistake
Prompt mismatch
TypeScript issue
React concept issue
Optional style improvement
```

## Day-specific corrections

### Day 1

```text
Say index.html loads main.tsx, not calls main.tsx.
Say document.getElementById('root') finds the root div; createRoot uses that div.
Say main.tsx mounts <App /> into the root div; App.tsx returns UI.
```

### Day 2

```text
Use className, not class.
Return one top-level parent.
Component names start uppercase.
Defining a component does not render it.
Rendering a component shows it.
Keep comments aligned after refactors.
```

### Day 3

```text
Props are read-only.
Parent means the component that renders the child.
String props use quotes; number/boolean props use curly braces.
Long inline prop types should be split across multiple lines or moved into type/interface later.
```

### Day 4

```text
Inline typing works but gets messy.
Named type/interface improves readability.
Use type for unions.
Use interface or type for object-shaped props.
Optional props need fallback/default behavior.
Default values belong in destructuring/component logic, not the type/interface.
Use normal GitHub blob links in responses when a visible URL is explicitly needed.
```

### Day 5

```text
Call the setter to update state.
Do not reassign or mutate state directly.
Use functional updates when the new value depends on previous state.
When updating object state, spread the previous object first.
useState does not automatically merge object fields.
Prevent counters from going below zero when negative values do not make sense.
Final mixed exercises should be task-based, not fully solved line-by-line scaffolds.
```

### Day 6

```text
Use onClick={handleClick}, not onClick={handleClick()}.
Use arrow wrappers when passing custom arguments to event handlers.
React passes the event to the function assigned to the event prop.
If the function assigned to onClick is an arrow wrapper, the named handler gets the event only if the arrow forwards it.
React.MouseEvent<HTMLButtonElement> and React.ChangeEvent<HTMLInputElement> are TypeScript event types, not the event object itself.
Use currentTarget when you want the element with the handler.
Use target only when you need the actual clicked nested element.
Inline handlers are okay for tiny logic, but named handlers keep meaningful logic readable.
```

### Day 7

```text
If the topic is specifically early returns/null, do not jump ahead to && rendering even though it is valid React.
Use fallback UI when the user needs feedback; use null only when showing nothing is intentional.
Use ternary for A/B UI.
Use && for optional UI.
Do not put fallback paragraphs inside ul elements.
When an array is empty, render fallback UI outside the list instead of rendering an empty ul with invalid children.
key helps React track identity but does not display anything.
Use stable ids as keys when available.
Use filter() before map() when rendering a subset.
Optional object fields should be rendered with fallback text or intentionally hidden.
Avoid inline styles in final rendering exercises unless styling is the actual focus.
Keep final mixed exercises compact and scenario-based, not bloated checklists.
```


### Day 8

```text
Do not confuse a TypeScript props type with the component itself.
The type describes the props shape; the component renders JSX.
React does not magically replace repeated sections; you manually choose to use a wrapper component.
Use children when the wrapper layout is reusable and the inside JSX should stay flexible.
Do not use children just to look advanced.
Do not split every tiny JSX piece into its own component or file.
A parent component should compose meaningful child sections, not become a dumping ground.
For practice files, heavy comments and old commented code can be a useful learning trail.
For final exercise files, comments are fine when useful, but avoid messy leftover scaffold.
For interview wording, avoid one-line code blocks that cause horizontal scrolling; use readable paragraph formatting.
```

## Current status

```text
Mistakes captured through Day 8.
Update this file only when a mistake is reusable enough to matter later.
```
