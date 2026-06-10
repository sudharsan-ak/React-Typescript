# Learning Index Part 2 - Week 2

Historical progress archive for the React + TypeScript learning project.

Source backbone:
https://github.com/Asabeneh/30-Days-Of-React

## Scope

```text
Part 2 covers Week 2.
Week 2: Day 8 to Day 14
Status: In progress
Current: Day 10 cleared
Next: Day 11 - useEffect basics
```

---

## Week 2 plan

| Day | Topic | Status | Notes |
|---|---|---|---|
| Day 8 | Component composition and reusable components | Cleared | `day8_notes.md` |
| Day 9 | Controlled forms | Cleared | `day9_notes.md` |
| Day 10 | Form validation and error messages | Cleared | `day10_notes.md` |
| Day 11 | `useEffect` basics | Next | Pending |
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
Object state should preserve previous fields with spread syntax.
Read event values before using them inside functional state updaters.
Attach submit handling to the form with onSubmit.
```

Final mixed exercise:

```text
Course feedback form
```

Final exercise status:

```text
Cleared
```

---

## Day 10 summary

Status:

```text
Cleared
```

Main topic:

```text
Form validation and error messages
```

Covered:

```text
validation mental model
required field checks
trim() for spaces-only values
basic string validation
simple email validation
field-level errors
form-level errors
conditional error rendering
blocking invalid submit
clearing edited field errors
portfolio mapping to Contact.tsx as a validation improvement layer
final mixed exercise
```

Key mental model:

```text
submit form
-> preventDefault
-> validate values
-> set errors if invalid
-> stop submit if invalid
-> continue only when valid
```

Important distinctions:

```text
Field-level errors explain the exact field problem.
Form-level errors explain why the whole submit was blocked.
Use else-if so required errors are not overwritten by format or length errors.
Clear only the edited field's error while preserving other field errors.
Clear the form-level error when the user edits any field.
```

Practice files:

```text
Day10FormValidation.tsx
Day10FinalPractice.tsx
```

Final mixed exercise:

```text
Mentor session signup form
```

Final exercise practiced:

```text
object form state
input/select/textarea control
field-level errors
form-level error
blocking invalid submit
clearing edited field errors
success message after valid submit
```

Final exercise status:

```text
Cleared
```

---

## Day 10 interview reminder

My contact form is a controlled React form. The field values live in state, and each field updates that state through `onChange`. On submit, I prevent the default browser refresh and validate the current values before allowing the request to continue.

For validation, I would use field-level errors to show the exact issue beside each field, and a form-level error when submission is blocked. As the user edits a field, I would clear that field's error and clear the general form error so the UI responds immediately while they fix the form.

---

## Current confidence level

```text
Day 8 cleared.
Day 9 cleared.
Day 10 cleared.
Ready for Day 11 - useEffect basics.
```
