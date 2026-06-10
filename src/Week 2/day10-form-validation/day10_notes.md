# Day 10 Notes - Form Validation and Error Messages

## Day status

```text
Day 10 - Cleared
Week 2 - In progress
Next: Day 11 - useEffect basics
```

Day 10 focused on validating controlled forms before submit, showing useful error messages, blocking invalid submits, and improving form UX while the user edits.

---

## 1. Main idea

Day 9 taught how to collect form values with controlled inputs. Day 10 added a validation layer before submission.

```text
user submits form
-> preventDefault
-> trim/check values
-> set errors if invalid
-> stop submit if invalid
-> continue only when valid
```

Validation is not the same as submitting. Validation decides whether submit is allowed to continue.

---

## 2. Required field checks

Required text fields should be checked with `trim()` so spaces-only input does not pass.

```tsx
const trimmedName = name.trim()

if (trimmedName === "") {
  // invalid
}
```

Key rule:

```text
Use trim() before checking whether a text field is filled.
```

Also clear stale success state before validating, so an old success message does not stay visible after a later invalid submit.

---

## 3. Basic string and email validation

After checking that a value exists, check whether the text is good enough.

Common beginner checks:

```tsx
trimmedName.length < 3
!trimmedEmail.includes("@")
!trimmedEmail.includes(".")
```

Important order:

```text
required check first
format/length checks after that
```

Use `else if` when a later format/length check should not overwrite a required-field error.

```tsx
if (trimmedEmail === "") {
  nextErrors.email = "Email is required."
} else if (!trimmedEmail.includes("@")) {
  nextErrors.email = "Email must include @."
}
```

---

## 4. Field-level errors

A single `validationMessage` can only show one error at a time. Field-level errors use an object so each field can show its own error.

```tsx
const [errors, setErrors] = useState({
  name: "",
  email: "",
  message: "",
})
```

The common pattern:

```tsx
const nextErrors = {
  name: "",
  email: "",
  message: "",
}

if (trimmedName === "") {
  nextErrors.name = "Name is required."
}

setErrors(nextErrors)
```

Render each error beside its matching field:

```tsx
{errors.email && <p>{errors.email}</p>}
```

---

## 5. Form-level errors and blocking submit

Field-level errors explain the exact field problem. A form-level error explains why the overall submit did not continue.

```tsx
if (nextErrors.name || nextErrors.email || nextErrors.message) {
  setFormError("Please fix the highlighted fields before submitting.")
  return
}
```

The `return` is what blocks the submit flow.

Valid submit flow:

```tsx
setFormError("")
setSubmittedName(trimmedName)
```

---

## 6. Clearing errors while editing

After an invalid submit, old error messages should not stay forever while the user fixes the field.

Beginner-friendly UX rule:

```text
Validate on submit.
Clear the matching field error on change.
Clear the form-level error on any change.
```

Example:

```tsx
setErrors((previousErrors) => ({
  ...previousErrors,
  email: "",
}))

setFormError("")
```

Important:

```text
Typing in one field should clear only that field's error, not every field error.
```

---

## 7. Practice summary

Practice file:

```text
Day10FormValidation.tsx
```

Covered in topic practice:

```text
required checks
trim-based validation
basic string validation
simple email validation
field-level error object
form-level error state
blocking invalid submit
clearing edited field errors
```

Final mixed exercise:

```text
Mentor session signup form
```

Final file:

```text
Day10FinalPractice.tsx
```

Final exercise practiced:

```text
object form state
input/select/textarea control
field-level errors
form-level error
blocking invalid submit
clearing edited field error
success message after valid submit
```

Final exercise status:

```text
Cleared
```

---

## 8. Portfolio mapping

Verified portfolio form foundation:

```text
Contact.tsx uses form state for name, email, and message.
Contact.tsx updates form state through handleChange.
Contact.tsx prevents default submit behavior.
Contact.tsx sends a POST request to /api/contact.
Contact.tsx resets the form on success and clears loading in finally.
```

Day 10 maps as a safe improvement layer before the existing request flow:

```text
submit
-> preventDefault
-> validate client-side fields
-> show field/form errors if invalid
-> stop before fetch
-> call fetch only if valid
```

Do not claim the portfolio already has Day 10-style field-level client validation unless that exact implementation is verified.

---

## 9. Interview-ready wording

My contact form is a controlled React form. The field values live in state, and each field updates that state through `onChange`. On submit, I prevent the default browser refresh and validate the current values before allowing the request to continue.

For validation, I would use field-level errors to show the exact issue next to each field, like a missing email or a message that is too short. I would also use a form-level error when the whole submit is blocked. As the user edits a field, I would clear that field's error and clear the general form error so the UI responds immediately while they fix the form.

---

## 10. What to remember before Day 11

Day 10 completed the controlled-form validation flow.

Current Week 2 progress:

```text
Day 8 - Component composition - Cleared
Day 9 - Controlled forms - Cleared
Day 10 - Form validation and error messages - Cleared
```

Next:

```text
Day 11 - useEffect basics
```

Day 11 moves from form interactions into side effects: code that runs because the component rendered or because certain values changed.
