# Mistakes Log - React + TypeScript Learning Project

Recurring mistakes, prompt mismatches, and reusable gotchas observed during the learning project.

## Scope

```text
Current scope: Day 1 through Day 4
Next update: only if Day 5 introduces reusable mistakes/gotchas
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
| Source order confusion | Declaration order can work, but readable structure matters: types/interfaces, components, main component, export |
| Render order confusion | The order inside JSX controls browser display order |
| Type/interface confusion | They define shape only; they do not create actual values |
| Union/default confusion | A union limits allowed values; it does not set a default value |
| Optional prop handling | If a prop is optional, handle missing values with fallback or default destructuring |
| Loose string props | Use union types when only known values should be allowed |
| Array rendering structure | Use `ul/li` for real lists, not repeated `p` tags |
| Key uniqueness | `key={value}` is fine only when values are unique; stable ids are better |
| Portfolio guessing | Do not claim exact portfolio implementation unless verified in repo/live site |
| Giving solutions too early | If the user asks for placement/snippet style, do not provide the completed implementation |

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
Long inline prop types should be split across lines or moved into type/interface later.
```

### Day 4

```text
Inline typing works but gets messy.
Named type/interface improves readability.
Use type for unions.
Use interface or type for object-shaped props.
Optional props need fallback/default behavior.
Default values belong in destructuring/component logic, not the type/interface.
Use normal GitHub blob links in responses.
```

## Current status

```text
Mistakes captured through Day 4.
Update this file only when a mistake is reusable enough to matter later.
```
