import { useState } from "react"

// Day 10 - Final Mixed Exercise
// Scenario: Mentor session signup form
//
// This component is a final Day 10 checkpoint for controlled form validation.
// It builds a mentor session signup form using object form state, matching
// field-level error state, one form-level error, submit validation that blocks
// invalid submissions, and a success message shown only after a valid submit.
//
// Requirements:
// - Track attendeeName, email, focusArea, and sessionGoal in one form state object.
// - Track a string error for each matching form field and one form-level error.
// - Clear only the edited field's error and clear the form-level error on change.
// - On submit, prevent refresh, clear the previous success, trim values, and build nextErrors.
// - Require attendeeName with at least 2 characters.
// - Require email containing both "@" and ".".
// - Require a selected focusArea and a sessionGoal with at least 25 characters.
// - Show field errors below their matching fields and formError near the submit button.
// - Block invalid submissions and show success only after a valid submit.

function Day10FinalPractice() {
  const [formState, setFormState] = useState({
    attendeeName: "",
    email: "",
    focusArea: "",
    sessionGoal: "",
  })

  const [errors, setErrors] = useState({
    attendeeName: "",
    email: "",
    focusArea: "",
    sessionGoal: "",
  })

  const [formError, setFormError] = useState("")
  const [submittedSignup, setSubmittedSignup] = useState("")

  function handleAttendeeNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setFormState((previousFormState) => ({
      ...previousFormState,
      attendeeName: value,
    }))

    setErrors((previousErrors) => ({
      ...previousErrors,
      attendeeName: "",
    }))

    setFormError("")
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setFormState((previousFormState) => ({
      ...previousFormState,
      email: value,
    }))

    setErrors((previousErrors) => ({
      ...previousErrors,
      email: "",
    }))

    setFormError("")
  }

  function handleFocusAreaChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.currentTarget.value

    setFormState((previousFormState) => ({
      ...previousFormState,
      focusArea: value,
    }))

    setErrors((previousErrors) => ({
      ...previousErrors,
      focusArea: "",
    }))

    setFormError("")
  }

  function handleSessionGoalChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = event.currentTarget.value

    setFormState((previousFormState) => ({
      ...previousFormState,
      sessionGoal: value,
    }))

    setErrors((previousErrors) => ({
      ...previousErrors,
      sessionGoal: "",
    }))

    setFormError("")
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmittedSignup("")

    const trimmedAttendeeName = formState.attendeeName.trim()
    const trimmedEmail = formState.email.trim()
    const trimmedFocusArea = formState.focusArea.trim()
    const trimmedSessionGoal = formState.sessionGoal.trim()

    const nextErrors = {
      attendeeName: "",
      email: "",
      focusArea: "",
      sessionGoal: "",
    }

    if (trimmedAttendeeName === "") {
      nextErrors.attendeeName = "Attendee name is required."
    } else if (trimmedAttendeeName.length < 2) {
      nextErrors.attendeeName = "Attendee name must be at least 2 characters."
    }

    if (trimmedEmail === "") {
      nextErrors.email = "Email is required."
    } else if (!trimmedEmail.includes("@")) {
      nextErrors.email = "Email must include @."
    } else if (!trimmedEmail.includes(".")) {
      nextErrors.email = "Email must include ."
    }

    if (trimmedFocusArea === "") {
      nextErrors.focusArea = "Focus area is required."
    }

    if (trimmedSessionGoal === "") {
      nextErrors.sessionGoal = "Session goal is required."
    } else if (trimmedSessionGoal.length < 25) {
      nextErrors.sessionGoal = "Session goal must be at least 25 characters."
    }

    setErrors(nextErrors)
    if (nextErrors.attendeeName || nextErrors.email || nextErrors.focusArea || nextErrors.sessionGoal) {
      setFormError("Please fix the highlighted fields before signing up.")
      return
    }

    setFormError("")
    setSubmittedSignup(trimmedAttendeeName)
  }

  return (
    <main>
      <section>
        <h1>Day 10 - Final Practice</h1>
        <h2>Mentor session signup</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="attendeeName">Attendee name</label>
            <input
              id="attendeeName"
              type="text"
              value={formState.attendeeName}
              onChange={handleAttendeeNameChange}
            />
            {errors.attendeeName && <p>{errors.attendeeName}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={formState.email}
              onChange={handleEmailChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="focusArea">Focus area</label>
            <select
              id="focusArea"
              value={formState.focusArea}
              onChange={handleFocusAreaChange}
            >
              <option value="">Select an option</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="career">Career</option>
            </select>
            {errors.focusArea && <p>{errors.focusArea}</p>}
          </div>
          <div>
            <label htmlFor="sessionGoal">Session goal</label>
            <textarea
              id="sessionGoal"
              value={formState.sessionGoal}
              onChange={handleSessionGoalChange}
            />
            {errors.sessionGoal && <p>{errors.sessionGoal}</p>}
          </div>
            {formError && <p>{formError}</p>}
            <button type="submit">Submit</button>
        </form>
        {submittedSignup && <p>Signup ready for {submittedSignup}</p>}
      </section>
    </main>
  )
}

export default Day10FinalPractice