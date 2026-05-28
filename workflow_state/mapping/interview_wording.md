# Interview Wording - React Portfolio

This file stores human-ready explanations for interviews.

Keep this practical, direct, and grounded in the real portfolio code.

Avoid fancy wording.

## App architecture

Short version:

```text
My portfolio is a React + TypeScript app structured around reusable components. App.tsx acts as the main app shell, setting up routing, providers, shared background layout, and floating UI. Page-level components like Home, Resume, API docs, and NotFound are rendered through client-side routes.
```

Slightly deeper version:

```text
The app starts from main.tsx, which renders App into the root div. App.tsx then connects the main app pieces: providers, routing, background layout, and shared UI like the booking button and AI assistant. The home page is composed from focused section components rather than one huge file.
```

## Components and JSX

```text
React lets me break the UI into reusable components. In my portfolio, sections like Hero, Projects, Contact, Navigation, and shared buttons are separate components. JSX lets those components describe the UI using HTML-like syntax while still using JavaScript values through curly braces.
```

## Props

```text
Props are inputs passed from a parent component to a child component. The parent owns the value, and the child receives it as read-only input. In my portfolio, this pattern shows up in the AI assistant button, where App passes values like isOpen, setIsOpen, and theme into the child component.
```

## TypeScript props

Short version:

```text
TypeScript helps me define exactly what props a component expects, so wrong or missing props are caught earlier.
```

Portfolio version:

```text
In my portfolio, the AI assistant button uses a typed props interface. It receives isOpen, setIsOpen, and an optional theme prop. The theme is restricted to known values like light, dark, nightowl, and system, which prevents random theme strings from being passed around.
```

## Optional props and union props

```text
Optional props are useful when a parent may not always pass a value. Union props are useful when only a fixed set of values should be allowed. In my portfolio, the AI assistant theme is a good example: theme is optional, and when it is passed, it is limited to known theme values instead of any random string.
```

## Project cards and array rendering

```text
The Projects section follows a data-driven rendering pattern. Project data contains fields like title, description, technologies, highlights, image details, and GitHub URL. The UI maps over the projects array to render repeated project cards, and then maps over nested arrays like technologies and highlights to render badges or detail lines.
```

## AI assistant flow

```text
App owns the AI assistant open state. It passes the current open value and the setter function into SmartAIAssistantButton. When the user clicks the button, the child calls the setter, React updates the parent state, and the assistant opens or closes based on the new value.
```

## Contact form preview wording

Use this later after the forms/API days are practiced in VS Code:

```text
The contact form is a controlled form. The input values live in React state, and each change updates the matching state field. On submit, the form prevents the default page refresh, sets loading, sends a POST request to the backend, shows success or error feedback, resets on success, and clears loading in the finally block.
```

## Full portfolio walkthrough answer

```text
My portfolio is a React + TypeScript app built around reusable components and clean page composition. App.tsx acts as the shell where routing, providers, shared layout, and floating UI are connected. The home page is composed from focused sections like Hero, Projects, Experience, Skills, About, Contact, and Footer. The strongest React examples are the project rendering flow, the AI assistant state/props flow, and the contact form flow. As I keep improving it, I would focus on stronger client-side validation, accessibility, testing, and performance optimizations.
```

## Current status

```text
Interview wording captured through Day 4.
Update this file only when new useful interview explanations are added.
```
