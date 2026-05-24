# Day 1 Notes - Setup, Vite, React App Structure, main.tsx, App.tsx

## Day status

Day 1 is cleared.

Covered:

- Vite + React + TypeScript setup
- generated project files and folders
- `index.html`, `main.tsx`, and `App.tsx` startup flow
- `createRoot`, `StrictMode`, and the root div
- first visible UI edit in `App.tsx`
- first custom Day 1 component in `src/week1/day01-setup/Day01Setup.tsx`

## 1. Vite setup

Vite is the local development tool used to create and run the React app.

The app was created with React + TypeScript using Vite.

Important commands:

```bash
npm create vite@latest . -- --template react-ts
npm install
npm run dev
```

Meaning:

- `npm create vite@latest . -- --template react-ts` creates a React + TypeScript Vite app in the current folder.
- `npm install` installs all dependencies listed in `package.json`.
- `npm run dev` starts the Vite development server.

The local app runs at a localhost URL like:

```text
http://localhost:5173/
```

## 2. Folder setup

The React practice app is kept as one single Vite app.

We are not creating one Vite app per day or per week. That would create duplicate `package.json`, `node_modules`, and dev servers.

The chosen structure is:

```text
React-TypeScript/
  src/
    week1/
      day01-setup/
        Day01Setup.tsx
        main-tsx-notes.md
    App.tsx
    main.tsx
```

This matches the Python learning style while still keeping React as one connected app.

Current Day 1 folder:

```text
src/week1/day01-setup/
```

## 3. Important generated files

### `package.json`

`package.json` is the project control file.

It stores project metadata, dependencies, and scripts.

Important scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

Key correction:

- The scripts section contains `dev`, `build`, `lint`, and `preview`.
- The `dev` script specifically runs `vite`.

### `node_modules/`

`node_modules` stores installed dependencies.

Do not edit this folder manually.

If it is missing, run:

```bash
npm install
```

### `package-lock.json`

`package-lock.json` locks exact dependency versions.

Do not manually edit this file.

### `index.html`

`index.html` is the first file loaded by the browser.

It contains the root div:

```html
<div id="root"></div>
```

It also loads the React entry file:

```html
<script type="module" src="/src/main.tsx"></script>
```

### `src/main.tsx`

`main.tsx` is the React entry point.

It imports React tools, global CSS, and `App`, then renders `<App />` into the root div from `index.html`.

### `src/App.tsx`

`App.tsx` is the root React component.

At the start, it showed the default Vite page. Later, it was simplified to render the custom Day 1 component.

Current role:

```text
App.tsx = switchboard for the current learning day
```

### `src/index.css` and `src/App.css`

These contain default Vite styling.

The current UI still has some default styling, which is why the list bullets look slightly awkward. That is not a React issue.

## 4. Startup flow

The core startup flow is:

```text
index.html -> main.tsx -> App.tsx -> Day01Setup.tsx -> browser UI
```

Expanded version:

```text
index.html provides <div id="root"></div>
index.html loads main.tsx
main.tsx imports React tools, global CSS, and App
main.tsx finds the root div
createRoot creates a React root using that div
React renders <App /> into that root
App.tsx renders Day01Setup
Day01Setup returns JSX shown in the browser
```

## 5. main.tsx notes

### What does `main.tsx` do?

`main.tsx` is the entry point of the React app.

It imports the React tools, global CSS, and the root `App` component. Then it connects React to the browser by rendering `<App />` into the root div from `index.html`.

Simple version:

```text
main.tsx = the file that plugs React into the browser
```

### What does `createRoot` do?

`createRoot` creates a React root using a real HTML element from the page.

In this app, `document.getElementById('root')` finds the HTML element with `id="root"`.

Then `createRoot(...)` uses that element to create React's root.

Then `.render(<App />)` tells React what component to display inside that root.

### What does `document.getElementById('root')` find?

It finds this div from `index.html`:

```html
<div id="root"></div>
```

That div is the empty container where React mounts the app.

### What does `<App />` represent?

`<App />` represents the root React component.

In this Vite app, `App.tsx` controls the visible UI that appears in the browser.

### What is `StrictMode` used for?

`StrictMode` is a React development helper.

It does not show anything in the UI. It adds extra checks during development and helps catch possible issues or bad patterns earlier.

### What does the `!` mean in `document.getElementById('root')!`?

The `!` is TypeScript's non-null assertion.

It tells TypeScript: trust me, this value will not be null.

Without it, TypeScript knows `document.getElementById('root')` could technically return `null` if the root div does not exist in `index.html`.

## 6. App.tsx notes

`App.tsx` is the first component rendered by `main.tsx`.

The default Vite `App.tsx` originally showed:

```text
Get started
Count is 0
```

A visible edit was made:

```tsx
<h1>Day 1 - React + TypeScript Setup</h1>
```

The browser updated automatically after saving because Vite HMR detected the change.

Important wording correction:

Do not say `App.tsx` itself is mounted.

Better wording:

```text
main.tsx mounts the <App /> component into the root div, and App.tsx returns the UI that React renders in the browser.
```

## 7. First custom component

Created:

```text
src/week1/day01-setup/Day01Setup.tsx
```

Then `App.tsx` was simplified to render it:

```tsx
import Day01Setup from './week1/day01-setup/Day01Setup'

function App() {
  return <Day01Setup />
}

export default App
```

This makes `App.tsx` a clean switchboard for the current day.

## 8. Final mini exercise

Final component goal:

- one heading
- one section for files learned today
- one section for startup flow

Final component structure:

```tsx
function Day01Setup() {
  return (
    <main>
      <h1>Day 1 - React + TypeScript Setup</h1>

      <section>
        <h2>Files I learned today</h2>
        <ul>
          <li>index.html gives React a root div.</li>
          <li>main.tsx mounts the App component.</li>
          <li>App.tsx controls the visible UI.</li>
        </ul>
      </section>

      <section>
        <h2>Startup flow</h2>
        <p>
          index.html loads main.tsx, main.tsx renders App, and App returns the UI shown in the browser.
        </p>
      </section>
    </main>
  )
}

export default Day01Setup
```

The component rendered correctly in the browser.

## 9. Mistakes and corrections

### Correction 1

Vague answer:

```text
dev script has dev, build, lint, preview
```

Better answer:

```text
The scripts section has dev, build, lint, and preview. The dev script specifically runs vite.
```

### Correction 2

Less accurate wording:

```text
App.tsx gets mounted
```

Better wording:

```text
main.tsx mounts the <App /> component into the root div, and App.tsx returns the UI.
```

### Correction 3

Less accurate wording:

```text
index.html calls main.tsx
```

Better wording:

```text
index.html loads main.tsx.
```

### Correction 4

Less accurate wording:

```text
createRoot finds the root div
```

Better wording:

```text
document.getElementById('root') finds the root div. createRoot uses that div to create React's root.
```

## 10. Portfolio mapping

This setup maps directly to the portfolio.

Portfolio flow:

```text
main.tsx
  -> App.tsx
    -> providers/routing/shared layout
      -> Home.tsx
        -> Navigation, Hero, Projects, Experience, Skills, About, Contact, Footer
```

Learning project flow:

```text
main.tsx
  -> App.tsx
    -> Day01Setup.tsx
```

Same idea, smaller scale.

## 11. Interview-ready wording

Use this:

```text
The app starts from main.tsx. The browser first loads index.html, which contains a root div. main.tsx finds that root div, creates a React root with createRoot, and renders the App component into it. From there, App.tsx controls the visible UI.
```

Portfolio version:

```text
In my portfolio, main.tsx renders App into the root div. App.tsx then acts as the main app shell, where routing, providers, shared layout, and page-level components are connected.
```

## 12. What to remember before Day 2

Remember this flow:

```text
index.html -> main.tsx -> App.tsx -> component -> browser UI
```

Remember these roles:

- `index.html` gives React a place to mount.
- `main.tsx` starts React and renders `<App />`.
- `App.tsx` is the root component and current switchboard.
- `Day01Setup.tsx` is the first custom component created for the learning project.

Next day:

```text
Day 2 - React mental model, components, JSX
```
