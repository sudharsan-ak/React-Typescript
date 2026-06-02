# Day 1 Notes - Setup, Vite, React App Structure, `main.tsx`, `App.tsx`

## Day status

Day 1 is cleared.

Main goal: set up one React + TypeScript Vite app, understand the startup flow, and render the first custom learning component.

## 1. Core setup

The project uses one Vite app for all React practice days.

```bash
npm create vite@latest . -- --template react-ts
npm install
npm run dev
```

Meaning:

```text
create vite -> creates the React + TypeScript app
npm install -> installs dependencies
npm run dev -> starts the Vite dev server
```

Important decision:

```text
Use one React + TypeScript Vite app.
Do not create one Vite app per day.
```

This avoids duplicated `package.json`, `node_modules`, and dev servers.

## 2. Key files

```text
React-TypeScript/
  src/
    main.tsx
    App.tsx
    week1/
      day01-setup/
        Day01Setup.tsx
```

| File | Role |
|---|---|
| `index.html` | Gives React `<div id="root"></div>` and loads `main.tsx` |
| `main.tsx` | Starts React and renders `<App />` into the root div |
| `App.tsx` | Root component and current-day switchboard |
| `Day01Setup.tsx` | First custom Day 1 learning component |
| `package.json` | Stores scripts and dependencies |
| `node_modules/` | Installed packages, do not edit manually |
| `package-lock.json` | Locks dependency versions, do not edit manually |

Important script:

```json
"dev": "vite"
```

## 3. Startup flow

Core flow:

```text
index.html -> main.tsx -> App.tsx -> Day01Setup.tsx -> browser UI
```

Expanded version:

```text
index.html provides the root div
index.html loads /src/main.tsx
main.tsx imports React tools, CSS, and App
main.tsx finds the root div
createRoot creates React's root using that div
React renders <App /> into the root
App.tsx renders the current learning component
The component returns JSX shown in the browser
```

## 4. `main.tsx` mental model

Simple version:

```text
main.tsx = the file that plugs React into the browser
```

Important parts:

```text
document.getElementById('root') finds the root div from index.html
createRoot(...) creates React's root using that div
.render(<App />) tells React what component to display
```

`StrictMode` is a development helper. It does not show visible UI. It adds extra checks during development.

The `!` in `document.getElementById('root')!` is TypeScript's non-null assertion. It tells TypeScript the root div exists.

## 5. `App.tsx` mental model

Better wording:

```text
main.tsx mounts the <App /> component into the root div.
App.tsx returns the UI that React renders in the browser.
```

Do not say:

```text
App.tsx itself is mounted.
```

For this project, `App.tsx` acts as a switchboard:

```tsx
import Day01Setup from './week1/day01-setup/Day01Setup'

function App() {
  return <Day01Setup />
}

export default App
```

## 6. First custom component

Created:

```text
src/week1/day01-setup/Day01Setup.tsx
```

The final Day 1 component rendered:

```text
one main heading
one section for files learned
one section for startup flow
```

This confirmed that the app was wired correctly from `index.html` to the browser UI.

## 7. Exercises completed

```text
Vite setup
Dependency install
Dev server start
Default App.tsx edit
Startup flow walkthrough
First custom component
App.tsx switchboard rendering
Final mini exercise
```

Final exercise status: cleared.

## 8. Corrections and reminders

| Issue | Better wording |
|---|---|
| `index.html calls main.tsx` | `index.html loads main.tsx` |
| `createRoot finds the root div` | `document.getElementById('root') finds the div; createRoot uses it` |
| `App.tsx gets mounted` | `main.tsx mounts <App /> into the root div` |
| Vague script explanation | `dev` specifically runs `vite` |

Main reminder:

```text
Use precise wording for startup flow.
React renders components, not files.
```

## 9. Portfolio mapping

Learning project:

```text
main.tsx -> App.tsx -> Day01Setup.tsx
```

Portfolio:

```text
main.tsx -> App.tsx -> providers/routing/shared layout -> page components
```

Same idea, smaller scale.

## 10. Interview-ready wording

Use this:

```text
The app starts from main.tsx. The browser first loads index.html, which contains a root div. main.tsx finds that root div, creates a React root with createRoot, and renders the App component into it. From there, App.tsx controls the visible UI.
```

Portfolio version:

```text
In my portfolio, main.tsx renders App into the root div. App.tsx acts as the main app shell where routing, providers, shared layout, and page-level components are connected.
```

## 11. What to remember before Day 2

```text
index.html gives React a place to mount.
main.tsx starts React and renders <App />.
App.tsx is the root component and current switchboard.
A custom component returns JSX shown in the browser.
React startup flow is index.html -> main.tsx -> App.tsx -> component -> browser UI.
```

Next: Day 2 - React mental model, components, JSX.
