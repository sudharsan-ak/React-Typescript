import { useState } from "react"
import Day10FinalPractice from "./Day10FinalPractice"

function FormValidationBasics() {
  const [signupForm, setSignupForm] = useState({
    fullName: "",
    email: "",
  })

  const [validationMessage, setValidationMessage] = useState("")
  const [submittedName, setSubmittedName] = useState("")

  function handleFullNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setSignupForm((previousForm) => ({
      ...previousForm,
      fullName: value,
    }))
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setSignupForm((previousForm) => ({
      ...previousForm,
      email: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmittedName("")
    // TODO:
    // 1. Create trimmed versions of fullName and email.
    // 2. If fullName is empty after trim(), show "Full name is required." and stop.
    // 3. If email is empty after trim(), show "Email is required." and stop.
    // 4. If both are filled, clear validationMessage.
    // 5. Store the trimmed full name in submittedName.
    const trimmedFullName = signupForm.fullName.trim()
    const trimmedEmail = signupForm.email.trim()

    if (trimmedFullName === "") {
      setValidationMessage("Full name is required.")
      return
    }

    if (trimmedEmail === "") {
      setValidationMessage("Email is required.")
      return
    }

    setValidationMessage("")
    setSubmittedName(trimmedFullName)
  }

  return (
    <section>
      <h2>Topic 1 - Required field checks</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            type="text"
            value={signupForm.fullName}
            onChange={handleFullNameChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={signupForm.email}
            onChange={handleEmailChange}
          />
        </div>

        <button type="submit">Submit signup</button>
      </form>

      {/* TODO:
        Show validationMessage only when it is not empty.
      */}
      {validationMessage && <p>{validationMessage}</p>}
      {/* TODO:
        Show "Signup ready for <name>" only when submittedName is not empty.
      */}
      {submittedName && <p>Signup ready for {submittedName}</p>}
    </section>
  )
}

function StringAndEmailValidationPractice() {
  const [profileForm, setProfileForm] = useState({
    displayName: "",
    email: "",
    profileSummary: "",
  })

  const [validationMessage, setValidationMessage] = useState("")
  const [submittedProfile, setSubmittedProfile] = useState("")

  function handleDisplayNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setProfileForm((previousForm) => ({
      ...previousForm,
      displayName: value,
    }))
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setProfileForm((previousForm) => ({
      ...previousForm,
      email: value,
    }))
  }

  function handleProfileSummaryChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const value = event.currentTarget.value

    setProfileForm((previousForm) => ({
      ...previousForm,
      profileSummary: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmittedProfile("")

    const trimmedDisplayName = profileForm.displayName.trim()
    const trimmedEmail = profileForm.email.trim()
    const trimmedProfileSummary = profileForm.profileSummary.trim()

    // TODO:
    // Validate in this order:
    // - displayName is required
    // - displayName must be at least 3 characters
    // - email is required
    // - email must include "@"
    // - email must include "."
    // - profileSummary is required
    // - profileSummary must be at least 20 characters
    //
    // If any check fails:
    // - set one validation message
    // - stop submit with return
    //
    // If everything is valid:
    // - clear validationMessage
    // - set submittedProfile to the trimmed display name
    if (trimmedDisplayName === "") {
      setValidationMessage("Display name is required.")
      return
    }

    if (trimmedDisplayName.length < 3) {
      setValidationMessage("Display name must be at least 3 characters.")
      return
    }

    if (trimmedEmail === "") {
      setValidationMessage("Email is required.")
      return
    }

    if (!trimmedEmail.includes("@")) {
      setValidationMessage("Email must include @.")
      return
    }

    if (!trimmedEmail.includes(".")) {
      setValidationMessage("Email must include .")
      return
    }

    if (trimmedProfileSummary === "") {
      setValidationMessage("Profile summary is required.")
      return
    }

    if (trimmedProfileSummary.length < 20) {
      setValidationMessage("Profile summary must be at least 20 characters.")
      return
    }

    setValidationMessage("")
    setSubmittedProfile(trimmedDisplayName)
  }

  return (
    <section>
      <h2>Topic 2 - String and email validation</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="displayName">Display name</label>
          <input
            id="displayName"
            type="text"
            value={profileForm.displayName}
            onChange={handleDisplayNameChange}
          />
        </div>

        <div>
          <label htmlFor="profileEmail">Email</label>
          <input
            id="profileEmail"
            type="text"
            value={profileForm.email}
            onChange={handleEmailChange}
          />
        </div>

        <div>
          <label htmlFor="profileSummary">Profile summary</label>
          <textarea
            id="profileSummary"
            value={profileForm.profileSummary}
            onChange={handleProfileSummaryChange}
          />
        </div>

        <button type="submit">Submit profile</button>
      </form>

      {/* TODO:
        Show validationMessage only when it is not empty.
      */}
      {validationMessage && <p>{validationMessage}</p>}
      {/* TODO:
        Show "Profile ready for <name>" only when submittedProfile is not empty.
      */}
      {submittedProfile && <p>Profile ready for {submittedProfile}</p>}
    </section>
  )
}

function FieldLevelErrorsPractice() {
  const [contactDraft, setContactDraft] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submittedContact, setSubmittedContact] = useState("")

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setContactDraft((previousDraft) => ({
      ...previousDraft,
      name: value,
    }))
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setContactDraft((previousDraft) => ({
      ...previousDraft,
      email: value,
    }))
  }

  function handleMessageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = event.currentTarget.value

    setContactDraft((previousDraft) => ({
      ...previousDraft,
      message: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmittedContact("")

    const trimmedName = contactDraft.name.trim()
    const trimmedEmail = contactDraft.email.trim()
    const trimmedMessage = contactDraft.message.trim()

    const nextErrors = {
      name: "",
      email: "",
      message: "",
    }

    // TODO:
    // Add field-level validation:
    // - name is required
    // - email is required
    // - email must include "@"
    // - message is required
    // - message must be at least 20 characters
    //
    // Store each error in nextErrors.name, nextErrors.email, or nextErrors.message.
    // Then setErrors(nextErrors).
    //
    // If any error exists, stop submit.
    //
    // If valid, set submittedContact to the trimmed name.
    if (trimmedName === "") {
      nextErrors.name = "Name is required."
    }

    if (trimmedEmail === "") {
      nextErrors.email = "Email is required."
    } else if (!trimmedEmail.includes("@")) {
      nextErrors.email = "Email must include @."
    }

    if (trimmedMessage === "") {
      nextErrors.message = "Message is required."
    } else if (trimmedMessage.length < 20) {
      nextErrors.message = "Message must be at least 20 characters."
    }

    setErrors(nextErrors)
    if (nextErrors.name || nextErrors.email || nextErrors.message) {
      return
    }

    setSubmittedContact(trimmedName)
  }

  return (
    <section>
      <h2>Topic 3 - Field-level errors</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="contactName">Name</label>
          <input
            id="contactName"
            type="text"
            value={contactDraft.name}
            onChange={handleNameChange}
          />

          {/* TODO:
            Show errors.name only when it is not empty.
          */}
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contactEmail">Email</label>
          <input
            id="contactEmail"
            type="text"
            value={contactDraft.email}
            onChange={handleEmailChange}
          />

          {/* TODO:
            Show errors.email only when it is not empty.
          */}
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="contactMessage">Message</label>
          <textarea
            id="contactMessage"
            value={contactDraft.message}
            onChange={handleMessageChange}
          />

          {/* TODO:
            Show errors.message only when it is not empty.
          */}
          {errors.message && <p>{errors.message}</p>}
        </div>

        <button type="submit">Send message</button>
      </form>

      {/* TODO:
        Show "Message ready from <name>" only when submittedContact is not empty.
      */}
      {submittedContact && <p>Message ready from {submittedContact}</p>}
    </section>
  )
}

function FormLevelErrorPractice() {
  const [applicationForm, setApplicationForm] = useState({
    targetRole: "",
    email: "",
    reason: "",
  })

  const [errors, setErrors] = useState({
    targetRole: "",
    email: "",
    reason: "",
  })

  const [formError, setFormError] = useState("")
  const [submittedApplication, setSubmittedApplication] = useState("")

  function handleTargetRoleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setApplicationForm((previousForm) => ({
      ...previousForm,
      targetRole: value,
    }))
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setApplicationForm((previousForm) => ({
      ...previousForm,
      email: value,
    }))
  }

  function handleReasonChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = event.currentTarget.value

    setApplicationForm((previousForm) => ({
      ...previousForm,
      reason: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmittedApplication("")

    const trimmedTargetRole = applicationForm.targetRole.trim()
    const trimmedEmail = applicationForm.email.trim()
    const trimmedReason = applicationForm.reason.trim()

    const nextErrors = {
      targetRole: "",
      email: "",
      reason: "",
    }

    // TODO:
    // Validate:
    // - targetRole is required
    // - targetRole must be at least 3 characters
    // - email is required
    // - email must include "@"
    // - reason is required
    // - reason must be at least 25 characters
    //
    // Store field-specific errors in nextErrors.
    // Then call setErrors(nextErrors).
    //
    // If any error exists:
    // - set formError to "Please fix the highlighted fields before submitting."
    // - stop submit with return
    //
    // If valid:
    // - clear formError
    // - set submittedApplication to the trimmed target role
    if (trimmedTargetRole === "") {
      nextErrors.targetRole = "Target role is required."
    } else if (trimmedTargetRole.length < 3) {
      nextErrors.targetRole = "Target role must be at least 3 characters."
    }

    if (trimmedEmail === "") {
      nextErrors.email = "Email is required."
    } else if (!trimmedEmail.includes("@")) {
      nextErrors.email = "Email must include @."
    }

    if (trimmedReason === "") {
      nextErrors.reason = "Reason is required."
    } else if (trimmedReason.length < 25) {
      nextErrors.reason = "Reason must be at least 25 characters."
    }

    setErrors(nextErrors)
    if (nextErrors.targetRole || nextErrors.email || nextErrors.reason) {
      setFormError("Please fix the highlighted fields before submitting.")
      return
    }

    setFormError("")
    setSubmittedApplication(trimmedTargetRole)
  }

  return (
    <section>
      <h2>Topic 4 - Form-level error and blocking submit</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="targetRole">Target role</label>
          <input
            id="targetRole"
            type="text"
            value={applicationForm.targetRole}
            onChange={handleTargetRoleChange}
          />

          {/* TODO:
            Show errors.targetRole only when it is not empty.
          */}
          {errors.targetRole && <p>{errors.targetRole}</p>}
        </div>

        <div>
          <label htmlFor="applicationEmail">Email</label>
          <input
            id="applicationEmail"
            type="text"
            value={applicationForm.email}
            onChange={handleEmailChange}
          />

          {/* TODO:
            Show errors.email only when it is not empty.
          */}
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="applicationReason">Reason</label>
          <textarea
            id="applicationReason"
            value={applicationForm.reason}
            onChange={handleReasonChange}
          />

          {/* TODO:
            Show errors.reason only when it is not empty.
          */}
          {errors.reason && <p>{errors.reason}</p>}
        </div>

        {/* TODO:
          Show formError only when it is not empty.
        */}
        {formError && <p>{formError}</p>}
        <button type="submit">Submit application</button>
      </form>

      {/* TODO:
        Show "Application ready for <target role>" only when submittedApplication is not empty.
      */}
      {submittedApplication && (
        <p>Application ready for {submittedApplication}</p>
      )}
    </section>
  )
}

function ClearErrorsOnEditPractice() {
  const [requestForm, setRequestForm] = useState({
    projectName: "",
    email: "",
    requestDetails: "",
  })

  const [errors, setErrors] = useState({
    projectName: "",
    email: "",
    requestDetails: "",
  })

  const [formError, setFormError] = useState("")
  const [submittedRequest, setSubmittedRequest] = useState("")

  function handleProjectNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setRequestForm((previousForm) => ({
      ...previousForm,
      projectName: value,
    }))

    // TODO:
    // Clear only errors.projectName.
    // Also clear formError.
    setErrors((previousErrors) => ({
      ...previousErrors,
      projectName: "",
    }))

    setFormError("")
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setRequestForm((previousForm) => ({
      ...previousForm,
      email: value,
    }))

    // TODO:
    // Clear only errors.email.
    // Also clear formError.
    setErrors((previousErrors) => ({
      ...previousErrors,
      email: "",
    }))

    setFormError("")
  }

  function handleRequestDetailsChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const value = event.currentTarget.value

    setRequestForm((previousForm) => ({
      ...previousForm,
      requestDetails: value,
    }))

    // TODO:
    // Clear only errors.requestDetails.
    // Also clear formError.
    setErrors((previousErrors) => ({
      ...previousErrors,
      requestDetails: "",
    }))

    setFormError("")
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmittedRequest("")

    const trimmedProjectName = requestForm.projectName.trim()
    const trimmedEmail = requestForm.email.trim()
    const trimmedRequestDetails = requestForm.requestDetails.trim()

    const nextErrors = {
      projectName: "",
      email: "",
      requestDetails: "",
    }

    if (trimmedProjectName === "") {
      nextErrors.projectName = "Project name is required."
    } else if (trimmedProjectName.length < 3) {
      nextErrors.projectName = "Project name must be at least 3 characters."
    }

    if (trimmedEmail === "") {
      nextErrors.email = "Email is required."
    } else if (!trimmedEmail.includes("@")) {
      nextErrors.email = "Email must include @."
    }

    if (trimmedRequestDetails === "") {
      nextErrors.requestDetails = "Request details are required."
    } else if (trimmedRequestDetails.length < 30) {
      nextErrors.requestDetails =
        "Request details must be at least 30 characters."
    }

    setErrors(nextErrors)

    if (
      nextErrors.projectName ||
      nextErrors.email ||
      nextErrors.requestDetails
    ) {
      setFormError("Please fix the highlighted fields before submitting.")
      return
    }

    setFormError("")
    setSubmittedRequest(trimmedProjectName)
  }

  return (
    <section>
      <h2>Topic 5 - Clearing errors while editing</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projectName">Project name</label>
          <input
            id="projectName"
            type="text"
            value={requestForm.projectName}
            onChange={handleProjectNameChange}
          />

          {errors.projectName && <p>{errors.projectName}</p>}
        </div>

        <div>
          <label htmlFor="requestEmail">Email</label>
          <input
            id="requestEmail"
            type="text"
            value={requestForm.email}
            onChange={handleEmailChange}
          />

          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="requestDetails">Request details</label>
          <textarea
            id="requestDetails"
            value={requestForm.requestDetails}
            onChange={handleRequestDetailsChange}
          />

          {errors.requestDetails && <p>{errors.requestDetails}</p>}
        </div>

        {formError && <p>{formError}</p>}

        <button type="submit">Submit request</button>
      </form>

      {submittedRequest && <p>Request ready for {submittedRequest}</p>}
    </section>
  )
}

function Day10FormValidation() {
  return (
    <main>
      <h1>Day 10 - Form Validation</h1>
      <FormValidationBasics />
      <hr />
      <StringAndEmailValidationPractice />
      <hr />
      <FieldLevelErrorsPractice />
      <hr />
      <FormLevelErrorPractice />
      <hr />
      <ClearErrorsOnEditPractice />
      <hr />
      <Day10FinalPractice />
      <hr />
    </main>
  )
}

export default Day10FormValidation