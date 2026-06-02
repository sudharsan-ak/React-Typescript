# Day 6 Notes - Event Handling

## Day status

Day 6 is cleared.

Main goal: understand how React responds to user actions through event handlers, connect events to state updates, pass arguments to handlers, read event objects, compare `currentTarget` vs `target`, and preview `onChange` input handling.

---

## 1. Core event mental model

React events are user actions that components can respond to, such as clicks, typing, form submits, hover, focus, and blur.

React event props use camelCase: `onClick`, `onChange`, `onSubmit`, `onMouseEnter`.

Core flow:

```text
User action -> handler runs -> handler reads event data and/or updates state -> React re-renders if state changed
```

Day 5 taught state. Day 6 connected state to actual user actions.

---

## 2. `onClick`, inline handlers, and named handlers

A click handler is a function that runs when a click happens.

```tsx
function handleClick() {
  console.log("Button clicked")
}

<button onClick={handleClick}>Click me</button>
```

Important rule:

```text
onClick={handleClick} passes the function to React.
onClick={handleClick()} calls the function during render.
```

Inline handlers are okay for tiny one-off logic:

```tsx
<button onClick={() => console.log("Clicked")}>Click</button>
```

Named handlers are better once the logic has meaning:

```tsx
function handleToggleDetails() {
  setDetailsVisible((previousValue) => !previousValue)
}
```

Practical rule: tiny action -> inline is fine; meaningful logic -> named handler.

---

## 3. Event handlers updating state

Event handlers commonly call state setters.

```tsx
const [clickCount, setClickCount] = useState(0)

function handleIncreaseClick() {
  setClickCount((previousCount) => previousCount + 1)
}
```

Use functional updates when the next value depends on the previous value:

```tsx
setClickCount((previousCount) => previousCount + 1)
setIsPracticeVisible((previousValue) => !previousValue)
```

Resetting to a fixed value can be direct, like `setClickCount(0)`.

---

## 4. Passing arguments to handlers

No custom argument needed:

```tsx
<button onClick={handleResetPanel}>Reset panel</button>
```

Custom argument needed:

```tsx
<button onClick={() => handleSelectSection("Projects")}>Projects</button>
```

Do not use `onClick={handleSelectSection("Projects")}` because that calls the function immediately during render.

Rule:

```text
No custom argument: onClick={handleClick}
Custom argument: onClick={() => handleClick(value)}
```

---

## 5. Event object basics

React automatically passes an event object to the function assigned to an event prop.

```tsx
function handleOuterButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
  console.log(event.currentTarget.textContent)
}

<button onClick={handleOuterButtonClick}>Click me</button>
```

Important correction:

```text
React.MouseEvent<HTMLButtonElement> is not the event itself.
It is the TypeScript type describing the event object.
React passes the actual event object at runtime.
```

`currentTarget` vs `target`:

```text
currentTarget = the element where the event handler is attached
target = the actual element that triggered the event
```

If a button contains a nested `span` and the user clicks the span, `currentTarget` is the button and `target` is the span.

Beginner rule: use `currentTarget` when you want the element that owns the handler.

---

## 6. Event object with custom arguments

React gives the event to the function directly assigned to `onClick`.

Direct handler:

```tsx
<button onClick={handleClick}>Click</button>
```

Arrow wrapper with only a custom argument:

```tsx
<button onClick={() => handleSelectSection("Projects")}>Projects</button>
```

Here the arrow function receives the event, but ignores it. The named handler only receives `"Projects"`.

If both custom value and event are needed:

```tsx
<button onClick={(event) => handleSelectSection("Projects", event)}>Projects</button>
```

Rule: if an arrow wrapper ignores the event, the named handler will not receive it.

---

## 7. Input/change event preview

For text inputs, use `onChange`.

```tsx
const [displayName, setDisplayName] = useState("")

function handleDisplayNameChange(event: React.ChangeEvent<HTMLInputElement>) {
  setDisplayName(event.currentTarget.value)
}
```

Input wiring:

```tsx
<input
  type="text"
  value={displayName}
  onChange={handleDisplayNameChange}
  placeholder="Type your display name"
/>
```

This is a controlled input preview: the input value comes from React state, `onChange` updates that state, and React re-renders with the new value. Full controlled forms come later.

---

## 8. File organization after Day 6

```text
src/week1/day06-event-handling/
  Day06EventHandling.tsx
  EventObjectPractice.tsx
  InputChangePreview.tsx
  Day06FinalPractice.tsx
```

Roles:

```text
Day06EventHandling.tsx = main Day 6 composer + Topics 1-3
EventObjectPractice.tsx = Topic 4 event object practice
InputChangePreview.tsx = Topic 5 input/change preview
Day06FinalPractice.tsx = final mixed event-handling checkpoint
```

---

## 9. Exercises completed

```text
Topic 1 - React events, onClick, inline handlers, named handlers
Topic 2 - Event handlers updating state
Topic 3 - Passing arguments to event handlers
Topic 4 - Event object basics and currentTarget vs target
Topic 5 - Input/change event preview
Final mixed exercise - Event-driven portfolio interaction panel
```

Final exercise status: cleared.

---

## 10. Corrections and reminders

| Issue | Reminder |
|---|---|
| Calling a handler during render | Use `onClick={handleClick}`, not `onClick={handleClick()}` |
| Passing a custom argument | Use `onClick={() => handleClick(value)}` |
| Need custom value + event | Use `onClick={(event) => handleClick(value, event)}` |
| Event ignored by arrow wrapper | Forward the event only if the named handler needs it |
| Event type vs event value | `React.MouseEvent<HTMLButtonElement>` is a type, not the runtime event |
| `target` vs `currentTarget` | `currentTarget` owns the handler; `target` is what was clicked |
| Large inline handler | Move meaningful logic into a named handler |

---

## 11. Portfolio mapping

`SmartAIAssistantButton.tsx` maps to click-driven state updates. A click runs a handler, the handler calls a setter, and React re-renders from the new open/closed state.

`Contact.tsx` maps to form event handling. Input changes update form state from the event, and submit handling prevents the default browser refresh. Day 6 only previewed this; forms will be covered later.

---

## 12. Interview-ready wording

Event handling in React is how components respond to user actions like clicks, typing, and form submits. I pass handler functions to props like `onClick` or `onChange`. For tiny actions, inline handlers are fine, but for meaningful logic I prefer named handlers because they keep JSX readable.

When a user action updates UI, the handler calls a state setter. If the next value depends on the previous value, like a counter or toggle, I use the functional update form.

React passes an event object into handlers when I need event details. For click handlers, I usually use `currentTarget` when I want the element the handler is attached to. `target` is the actual element clicked, which can be different when nested elements are involved.

---

## 13. What to remember before Day 7

```text
React event props use camelCase.
Pass handler references; do not call handlers during render.
Use named handlers for meaningful logic.
Use arrow wrappers when passing custom arguments.
React passes the event to the function assigned to the event prop.
If an arrow wrapper ignores the event, the named handler will not receive it.
currentTarget is the element with the handler.
target is the actual element that triggered the event.
Use React.MouseEvent<HTMLButtonElement> for button click event typing.
Use React.ChangeEvent<HTMLInputElement> for input change typing.
Functional updates are best when the next state depends on previous state.
```

Next: Day 7 - Conditional rendering and list rendering.
