# Learning Index Part 2 - Week 2

Historical progress archive for the React + TypeScript learning project.

Source backbone:
https://github.com/Asabeneh/30-Days-Of-React

## Scope

```text
Part 2 covers Week 2.
Week 2: Day 8 to Day 14
Status: In progress
Current: Day 9 cleared
Next: Day 10 - Form validation and error messages
```

---

## Week 2 plan

| Day | Topic | Status | Notes |
|---|---|---|---|
| Day 8 | Component composition and reusable components | Cleared | `day8_notes.md` |
| Day 9 | Controlled forms | Cleared | `day9_notes.md` |
| Day 10 | Form validation and error messages | Next | Pending |
| Day 11 | `useEffect` basics | Pending | Pending |
| Day 12 | Browser APIs with React: `localStorage`, `document`, `window` | Pending | Pending |
| Day 13 | Fetch/API calls | Pending | Pending |
| Day 14 | Loading, error, empty, and success states with API data | Pending | Pending |

---

## Day 8 summary

Status:

```text
Cleared
```

Main topic:

```text
Component composition and reusable components
```

Covered:

```text
composition mental model
when to split components
avoiding bloated components
parent/child composition
reusable components with props
children prop basics
wrapper components
cleanup habits
real-world file splitting judgment
final mixed exercise
```

Key mental model:

```text
Page component -> composes sections
Section component -> owns one focused UI area
Reusable card component -> same structure, different props
Wrapper component -> same outer layout, flexible children
```

Final mixed exercise:

```text
Online course dashboard
```

Final exercise status:

```text
Cleared
```

---

## Day 9 summary

Status:

```text
Cleared
```

Main topic:

```text
Controlled forms
```

Covered:

```text
controlled input mental model
input value from state
onChange updates state
single text input state
object form state
updating one object field with spread syntax
textarea controlled with value
select controlled with value
checkbox controlled with checked
form submit with onSubmit
preventDefault
submitted snapshot state
portfolio mapping to Contact.tsx
final mixed exercise
```

Key mental model:

```text
state owns form value
form element displays state
onChange reads new value
setter updates state
React re-renders
```

Important distinctions:

```text
Text input, textarea, and select use value.
Checkbox uses checked.
Single value state can be replaced directly.
Object state should preserve previous fields with spread syntax.
Read event values before using them inside functional state updaters.
Attach submit handling to the form with onSubmit.
Use preventDefault to stop browser refresh.
```

Practice files:

```text
Day09ControlledForms.tsx
Day09FormElementsAndSubmit.tsx
Day09FinalPractice.tsx
```

Final mixed exercise:

```text
Course feedback form
```

Final exercise practiced:

```text
object form state
text input
select dropdown
textarea
checkbox
submit handler
preventDefault
submitted/empty conditional UI
```

Final exercise status:

```text
Cleared
```

---

## Day 9 interview reminder

My contact form is a controlled React form. The form values live in React state, so each input displays the current state value and updates state through `onChange` as the user types. I keep related fields together in one object state, and the change handler updates the matching field.

On submit, the form calls `preventDefault` so the browser does not refresh the page. Then it uses the current form state to send the request, shows success or error feedback, resets the form on success, and clears loading after the request finishes.

---

## Current confidence level

```text
Day 8 cleared.
Day 9 cleared.
Ready for Day 10 - Form validation and error messages.
```
