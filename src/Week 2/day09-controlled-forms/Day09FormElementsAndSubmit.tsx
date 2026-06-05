import { useState } from "react"

// ---------------------------------------------------------------------
// Topic 3: Textarea, select, and checkbox basics

// Goal:
// Build a controlled interview preference panel using textarea, select, and checkbox.

// Scenario:
// You are building a small interview prep preference panel.
// The user can write notes, choose a prep focus, and mark whether they want mock interview practice.

// 1. Create a component called FormElementTypesPractice.

// 2. Create state for:
//    - prepNotes: ""
//    - prepFocus: "react"
//    - wantsMockInterview: false

// 3. Create change handlers for all three fields.
//    Pattern reminder:
//    - textarea/select use event.currentTarget.value
//    - checkbox uses event.currentTarget.checked

// 4. Return a section with:
//    - h3: Topic 3 - Form Element Types

// 5. Add a controlled textarea for prepNotes.
//    Use value, onChange, placeholder, and rows.

// 6. Add a controlled select for prepFocus.
//    Options:
//    - react -> React
//    - typescript -> TypeScript
//    - system-design -> System Design
//    - behavioral -> Behavioral

// 7. Add a controlled checkbox for wantsMockInterview.
//    Remember: checkbox uses checked, not value.

// 8. Add a preview section showing:
//    - Notes: <prepNotes>
//    - Focus: <prepFocus>
//    - Mock interview: Yes/No
function FormElementTypesPractice() {
  const [prepNotes, setPrepNotes] = useState("")
  const [prepFocus, setPrepFocus] = useState("react")
  const [wantsMockInterview, setWantsMockInterview] = useState(false)

  function handlePrepNotesChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setPrepNotes(event.currentTarget.value)
  }

  function handlePrepFocusChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setPrepFocus(event.currentTarget.value)
  }

  function handleWantsMockInterviewChange(event: React.ChangeEvent<HTMLInputElement>) {
    setWantsMockInterview(event.currentTarget.checked)
  }

  return (
    <section>
      <div>
        <label htmlFor="prepNotes">Prep notes</label>
        <textarea
          value={prepNotes}
          onChange={handlePrepNotesChange}
          placeholder="Enter notes"
          rows={4}
        />
      </div>
      <div>
        <label htmlFor="prepFocus">Prep focus</label>
        <select value={prepFocus} onChange={handlePrepFocusChange}>
          <option value="react">React</option>
          <option value="typescript">TypeScript</option>
          <option value="system-design">System Design</option>
          <option value="behavioral">Behavioral</option>
        </select>
      </div>
      <div>
        <label htmlFor="wantsMockInterview">Wants mock interview</label>
        <input
          type="checkbox"
          checked={wantsMockInterview}
          onChange={handleWantsMockInterviewChange}
        />
      </div>
      <h4>Preview:</h4>
      <p>Notes: {prepNotes}</p>
      <p>Focus: {prepFocus}</p>
      <p>Mock interview: {wantsMockInterview ? "Yes" : "No"}</p>
    </section>
  )
}

// ---------------------------------------------------------------------
// Topic 4: Form submit and preventDefault

// Goal:
// Build a controlled project request form that submits without refreshing the page.

// Scenario:
// You are building a small project request form.
// The user can enter a project title, choose a project type, and mark whether it is urgent.

type ProjectRequestForm = {
  projectTitle: string
  projectType: string
  isUrgent: boolean
}

// 1. Create a component called FormSubmitPractice.

// 2. Create one object state called projectRequestForm with:
//    - projectTitle: ""
//    - projectType: "portfolio"
//    - isUrgent: false

// 3. Create one more state called submittedRequest.
//    Initial value should be null.
//    This will store the submitted form snapshot.

// 4. Create change handlers for the three fields.
//    Pattern reminder:
//    - text/select use event.currentTarget.value
//    - checkbox uses event.currentTarget.checked
//    - object state should preserve previous fields with spread syntax

// 5. Create a submit handler for the form.
//    It should:
//    - receive React.FormEvent<HTMLFormElement>
//    - call event.preventDefault()
//    - save the current projectRequestForm into submittedRequest

// 6. Return a section with:
//    - h3: Topic 4 - Form Submit and preventDefault
//    - a form with onSubmit connected to your submit handler
//    - controlled input for projectTitle
//    - controlled select for projectType
//    - controlled checkbox for isUrgent
//    - submit button with type="submit"

// 7. Under the form, conditionally render:
//    If submittedRequest is null:
//    No project request submitted yet.
//
//    Otherwise show:
//    Submitted request:
//    Project title: <projectTitle>
//    Project type: <projectType>
//    Urgent: Yes/No
function FormSubmitPractice() {
  const [projectRequestForm, setProjectRequestForm] = useState({
    projectTitle: "",
    projectType: "portfolio",
    isUrgent: false,
  })

  const [submittedRequest, setSubmittedRequest] = useState<ProjectRequestForm | null>(null)

  function handleProjectTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setProjectRequestForm((previousFormState) => ({
      ...previousFormState,
      projectTitle: value,
    }))
  }

  function handleProjectTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.currentTarget.value

    setProjectRequestForm((previousFormState) => ({
      ...previousFormState,
      projectType: value,
    }))
  }

  function handleUrgentToggleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.checked

    setProjectRequestForm((previousFormState) => ({
      ...previousFormState,
      isUrgent: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmittedRequest(projectRequestForm)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projectTitle">Project title</label>
          <input
            type="text"
            id="projectTitle"
            value={projectRequestForm.projectTitle}
            onChange={handleProjectTitleChange}
            placeholder="Enter project title"
          />
        </div>
        <div>
          <label htmlFor="projectType">Project type</label>
          <select id="projectType" value={projectRequestForm.projectType} onChange={handleProjectTypeChange}>
            <option value="portfolio">Portfolio</option>
            <option value="resume">Resume</option>
            <option value="job-search">Job search</option>
          </select>
        </div>
        <div>
          <label htmlFor="isUrgent">Is urgent</label>
          <input
            type="checkbox"
            id="isUrgent"
            checked={projectRequestForm.isUrgent}
            onChange={handleUrgentToggleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedRequest ? (
        <>
          <p>Submitted request:</p>
          <p>Project title: {submittedRequest.projectTitle}</p>
          <p>Project type: {submittedRequest.projectType}</p>
          <p>Urgent: {submittedRequest.isUrgent ? "Yes" : "No"}</p>
        </>
      ) : (
        <p>No project request submitted yet.</p>
      )}
    </section>
  )
}

function Day09FormElementsAndSubmit() {
  return (
    <section>
      <h3>Topic 3 - Form Element Types</h3>
      <FormElementTypesPractice />
      <hr />

      <h3>Topic 4 - Form Submit and preventDefault</h3>
      <FormSubmitPractice />
    </section>
  )
}

export default Day09FormElementsAndSubmit