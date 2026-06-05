# Day 9 Notes - Controlled Forms

## Day status

```text
Day 9 - Cleared
Week 2 - In progress
Next: Day 10 - Form validation and error messages
```

Day 9 focused on controlled form fields in React: inputs, textarea, select, checkbox, object form state, submit handling, and `preventDefault`.

---

## 1. Main idea

A controlled form field means React state owns the value shown in the form element.

```text
state value -> form element value/checked -> user changes field -> onChange runs -> state updates -> React re-renders
```

The form element does not manage the final value by itself. React state is the source of truth.

---

## 2. Topic 1 - Controlled text input

For a normal text input, use:

```tsx
value={stateValue}
onChange={changeHandler}
```

Example pattern:

```tsx
const [studentName, setStudentName] = useState("")

function handleStudentNameChange(event: React.ChangeEvent<HTMLInputElement>) {
  setStudentName(event.currentTarget.value)
}
```

Key rule:

```text
If an input has value from state, it needs onChange to update that state.
```

Bad pattern:

```tsx
<input value={studentName} />
```

That creates a controlled input with no way to update state, so typing will not work properly.

---

## 3. Topic 2 - Object form state

For one independent value, separate state is fine:

```tsx
const [studentName, setStudentName] = useState("")
```

For multiple related fields that belong to one form, object state is cleaner:

```tsx
const [jobPreferenceForm, setJobPreferenceForm] = useState({
  targetRole: "",
  preferredLocation: "",
  strongestSkill: "",
})
```

Important rule:

```text
useState replaces the full object. It does not merge object fields automatically.
```

So when updating one object field, preserve the previous fields first:

```tsx
const value = event.currentTarget.value

setJobPreferenceForm((previousForm) => ({
  ...previousForm,
  targetRole: value,
}))
```

This means:

```text
copy previous object
keep unchanged fields
replace only the changed field
```

Do not do this:

```tsx
setJobPreferenceForm({
  targetRole: value,
})
```

That wipes out the other fields.

---

## 4. Important Day 9 bug fix

This caused a blank page during practice:

```tsx
setJobPreferenceForm((previousForm) => ({
  ...previousForm,
  targetRole: event.currentTarget.value,
}))
```

The fix is to read the event value before the functional updater:

```tsx
const value = event.currentTarget.value

setJobPreferenceForm((previousForm) => ({
  ...previousForm,
  targetRole: value,
}))
```

Rule to remember:

```text
Read event values immediately inside the handler.
Then use the saved value inside the state updater.
```

---

## 5. Topic 3 - textarea, select, and checkbox

The controlled-form mental model stays the same, but different elements use different props.

| Element | Controlled prop | Read from event |
|---|---|---|
| text input | `value` | `event.currentTarget.value` |
| textarea | `value` | `event.currentTarget.value` |
| select | `value` | `event.currentTarget.value` |
| checkbox | `checked` | `event.currentTarget.checked` |

Textarea:

```tsx
<textarea value={notes} onChange={handleNotesChange} />
```

Select:

```tsx
<select value={difficulty} onChange={handleDifficultyChange}>
  <option value="beginner">Beginner</option>
  <option value="intermediate">Intermediate</option>
  <option value="advanced">Advanced</option>
</select>
```

Checkbox:

```tsx
<input
  type="checkbox"
  checked={wantsFollowUp}
  onChange={handleFollowUpChange}
/>
```

Main checkbox rule:

```text
Checkbox uses checked, not value.
```

---

## 6. Topic 4 - Submit handling and preventDefault

A normal browser form submit tries to refresh or navigate the page.

React forms usually prevent that:

```tsx
function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
  setSubmittedFeedback(feedbackForm)
}
```

Use submit handling on the form:

```tsx
<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

Why use `onSubmit` on the form instead of only `onClick` on the button:

```text
The form submit works through the button and through Enter key submission.
```

---

## 7. Topic 5 - Portfolio mapping

Verified file:

```text
Contact.tsx
https://github.com/sudharsan-ak/personal-portfolio/blob/main/client/src/components/Contact.tsx
```

Verified behavior:

```text
Contact uses form state with name, email, and message.
Contact uses loading state.
handleChange updates form state using the field name and value.
handleSubmit prevents the default browser refresh.
handleSubmit sends a POST request to /api/contact.
The form resets on success.
loading is cleared in finally.
```

Day 9 mapping:

```text
Topic 1 -> controlled text input
Topic 2 -> object state for related form fields
Topic 3 -> textarea controlled with value/onChange
Topic 4 -> form submit with preventDefault
Portfolio -> Contact.tsx combines all of this in a real form flow
```

Note:

```text
Do not claim select or checkbox exist in Contact.tsx unless verified.
For Day 9, select and checkbox were practice additions.
```

---

## 8. Practice summary

Practice files used:

```text
Day09ControlledForms.tsx
Day09FormElementsAndSubmit.tsx
Day09FinalPractice.tsx
```

Practiced:

```text
controlled text input
object form state
separate handlers for repeated fields
textarea
select dropdown
checkbox
form submit
preventDefault
submitted snapshot
conditional submitted/empty UI
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

## 9. Interview-ready wording

My contact form is a controlled React form. The form values live in React state, so each input displays the current state value and updates state through `onChange` as the user types. I keep related fields together in one object state, and the change handler updates the matching field.

On submit, the form calls `preventDefault` so the browser does not refresh the page. Then it uses the current form state to send the request, shows success or error feedback, resets the form on success, and clears loading after the request finishes.

---

## 10. What to remember before Day 10

Day 9 taught how to collect form values.

Day 10 will build on this by checking whether the collected values are valid.

Next:

```text
Day 10 - Form validation and error messages
```
