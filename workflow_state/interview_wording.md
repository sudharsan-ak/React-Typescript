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

## State and useState

Short version:

```text
State is component-owned data that can change over time. useState gives me the current value and a setter function, and calling the setter tells React to re-render with the new value.
```

Portfolio version:

```text
In my portfolio, state shows up in a few places. App owns theme state and limits it to known values like light, dark, nightowl, and system. The AI assistant uses boolean open/closed state, where clicking the button toggles the assistant. The Contact form groups related values like name, email, and message into object state, then updates the matching field as the user types.
```

Functional update version:

```text
When the next state depends on the previous state, I use the functional update form. For example, toggling a boolean uses the previous value and returns the opposite value. For object state, I create a new object with spread syntax and update only the field that changed instead of mutating the existing object.
```

## Event handling

Short version:

```text
Event handling in React is how components respond to user actions like clicks, typing, and form submits. I pass a handler function to event props like onClick or onChange. For tiny actions, an inline handler is fine, but for meaningful logic I prefer named handlers because they keep the JSX readable.
```

State update version:

```text
When a user action needs to update the UI, the event handler calls a state setter. If the next value depends on the previous value, like a counter or a toggle, I use the functional update form so React updates from the latest state.
```

Passing arguments version:

```text
If an event handler does not need a custom value, I pass the handler directly, like onClick={handleClick}. If it needs a value, I wrap it in an arrow function, like onClick={() => handleSelectSection("Projects")}. I avoid calling handlers directly in JSX because that runs during render instead of on the actual event.
```

Event object version:

```text
React passes an event object into handlers when I need details about the event. For click handlers, I usually use currentTarget when I want the element the handler is attached to. target is the actual element clicked, which can be different when the button has nested elements inside it.
```

Portfolio version:

```text
In my portfolio, the AI assistant button is a click-event example because clicking it toggles open state. The Contact form is a form-event example because input changes update form state, and submit handling prevents the default browser refresh before sending the request.
```

## Project cards and array rendering

```text
The Projects section follows a data-driven rendering pattern. Project data contains fields like title, description, technologies, highlights, image details, and GitHub URL. The UI maps over the projects array to render repeated project cards, and then maps over nested arrays like technologies and highlights to render badges or detail lines.
```

## Conditional rendering and list rendering

```text
Conditional rendering lets state or data decide what UI appears, such as fallback, optional, loading, or normal UI. List rendering uses .map() to turn arrays into repeated JSX, with keys helping React track item identity. In my portfolio, the Projects section is the strongest example because project data renders into cards, with nested technologies/highlights and optional project details.
```

## AI assistant flow

```text
App owns the AI assistant open state. It passes the current open value and the setter function into SmartAIAssistantButton. When the user clicks the button, the child calls the setter, React updates the parent state, and the assistant opens or closes based on the new value.
```

## Controlled forms

```text
A controlled form means the form values live in React state. Each field displays the current state value, and onChange updates state as the user types, selects, or checks a box. Text inputs, textareas, and selects use value. Checkboxes use checked.
```

## Contact form

```text
My contact form is a controlled React form. The form values live in React state, so each input displays the current state value and updates state through onChange as the user types. I keep related fields like name, email, and message together in one object state, and the change handler updates the matching field.

On submit, the form calls preventDefault so the browser does not refresh the page. Then it uses the current form state to send a POST request, shows success or error feedback, resets the form on success, and clears the loading state after the request finishes.
```

## Form state object pattern

```text
For a single independent field, separate state is fine. For a form with related fields, I usually keep the values together in one object. When one field changes, I copy the previous object and update only the changed field, so the other values are preserved.
```

## Form submit handling

```text
I attach submit logic to the form with onSubmit instead of only using a button click. The submit handler receives the form event, calls preventDefault, and then uses the current state to submit or display the data. This keeps the form from doing a full browser refresh and still supports normal form behavior like pressing Enter.
```

## Full portfolio walkthrough answer

```text
My portfolio is a React + TypeScript app built around reusable components and clean page composition. App.tsx acts as the shell where routing, providers, shared layout, and floating UI are connected. The home page is composed from focused sections like Hero, Projects, Experience, Skills, About, Contact, and Footer. The strongest React examples are the project rendering flow, the AI assistant state/props/event flow, and the controlled contact form flow. As I keep improving it, I would focus on stronger client-side validation, accessibility, testing, and performance optimizations.
```


## Component composition

In my React projects, I use component composition to keep the app readable. A page-level component should mostly organize the major sections instead of holding every detail itself. Section components own focused areas of the UI, and repeated patterns like cards, badges, or list items can become reusable child components that receive data through props.

## Reusable components

When I see the same JSX structure repeated with different values, I usually turn that into a reusable component. The parent owns the data and passes it down through props, while the child component focuses on rendering one item cleanly. This keeps the UI easier to scan and avoids duplicating the same markup in multiple places.

## children and wrapper components

When the same outer layout repeats but the inner content changes, I can use the `children` prop. The wrapper component owns the common structure, like a section title and layout, while the parent passes whatever JSX belongs inside. I would use this for reusable section wrappers, card shells, page containers, or modal layouts when the inside content needs to stay flexible.

## Clean component boundaries

The goal is not to create as many components as possible. The goal is to create clear boundaries. I split a component when a section has a clear responsibility, when repeated UI can become reusable, or when the parent is getting hard to read. I avoid over-splitting tiny pieces because that creates file noise instead of real maintainability.

## Real-world file organization

In a real project, meaningful section components often live in their own files, especially when they have their own data, markup, or behavior. Smaller reusable pieces like cards, badges, wrappers, and shared UI components can also be split when they are reused or make the parent easier to understand. But if something is tiny and only used once, keeping it local is fine.

## Current status

```text
Interview wording captured through Day 9.
Update this file only when new useful interview explanations are added.
```
