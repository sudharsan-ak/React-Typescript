import { useState } from 'react'
import Day09FormElementsAndSubmit from './Day09FormElementsAndSubmit'
import Day09FinalPractice from './Day09FinalPractice'

// Day 9 - Controlled Forms
// Topic 1: Controlled text input basics

// Goal:
// Build a small controlled input where React state owns the input value.

// 1. Import useState from react.

// 2. Create a component called ControlledTextInputBasics.

// 3. Inside the component, create state called studentName.
//    Initial value should be an empty string.

// 4. Create a function called handleStudentNameChange.
//    It should receive a React.ChangeEvent<HTMLInputElement> event.

// 5. Inside handleStudentNameChange:
//    update studentName using the input's current value.

// 6. In the JSX, return a section with:
//    - an h2 that says: Day 9 - Controlled Forms
//    - an h3 that says: Topic 1 - Controlled Text Input
//    - a label that says: Student name
//    - an input with:
//      - type="text"
//      - value connected to studentName
//      - onChange connected to handleStudentNameChange
//      - placeholder="Enter student name"

// 7. Under the input, render a paragraph:
//    Preview: <studentName>

// 8. Add a conditional paragraph:
//    If studentName is empty, show: No name entered yet.
//    Otherwise, show: Current input length: X characters
function ControlledTextInputBasics() {
  const [studentName, setStudentName] = useState('')

  function handleStudentNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setStudentName(event.currentTarget.value)
  }

  return (
    <section>
      <h3>Topic 1 - Controlled Text Input</h3>
      <label htmlFor="studentName">Student name</label>
      <input
        type="text"
        id="studentName"
        value={studentName}
        onChange={handleStudentNameChange}
        placeholder="Enter student name"
      />
      <p>Preview: {studentName}</p>
      {studentName ? <p>Current input length: {studentName.length} characters</p> : <p>No name entered yet.</p>}
    </section>
  )
}
// ---------------------------------------------------------------------
// Topic 2: Object form state with multiple fields

// Goal:
// Build a controlled job preference form using one object state.

// Scenario:
// You are building a small job-search preference panel.
// The user can type their target role, preferred location, and strongest skill.

// 1. Create a component called ObjectFormStatePractice.
// 2. Inside the component, create one state object called jobPreferenceForm with:
//    - targetRole: ""
//    - preferredLocation: ""
//    - strongestSkill: ""

// 3. Create change handlers for all three fields.
//    Each handler should update only its matching field using the previous object
//    and spread syntax.

// 4. In the JSX, return a section with:
//    - an h3 that says: Topic 2 - Object Form State

// 5. Add three controlled text inputs:
//    - Target role -> value from jobPreferenceForm.targetRole
//    - Preferred location -> value from jobPreferenceForm.preferredLocation
//    - Strongest skill -> value from jobPreferenceForm.strongestSkill
//
//    Each input should have:
//    - a label
//    - type="text"
//    - value connected to the correct state field
//    - onChange connected to the correct handler
//    - a useful placeholder

// 6. Under the inputs, render a preview section:
//    - h4: Job preference preview
//    - p: Target role: <targetRole>
//    - p: Preferred location: <preferredLocation>
//    - p: Strongest skill: <strongestSkill>

// 7. Add a conditional paragraph:
//    If all three fields have values, show:
//    Job preference form is complete.
//    Otherwise, show:
//    Please complete all job preference fields.
function ObjectFormStatePractice() {
  const [jobPreferenceForm, setJobPreferenceForm] = useState({
    targetRole: "",
    preferredLocation: "",
    strongestSkill: "",
  })

  function handleTargetRoleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setJobPreferenceForm((previousFormState) => ({
      ...previousFormState,
      targetRole: value,
    }))
  }

  function handlePreferredLocationChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value
    setJobPreferenceForm((previousFormState) => ({
      ...previousFormState,
      preferredLocation: value,
    }))
  }

  function handleStrongestSkillChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value
    setJobPreferenceForm((previousFormState) => ({
      ...previousFormState,
      strongestSkill: value,
    }))
  }

  return (
    <section>
      <h3>Topic 2 - Object Form State</h3>
      <label htmlFor="targetRole">Target role</label>
      <input
        type="text"
        id="targetRole"
        value={jobPreferenceForm.targetRole}
        onChange={handleTargetRoleChange}
        placeholder="Enter target role"
      />
      <label htmlFor="preferredLocation">Preferred location</label>
      <input
        type="text"
        id="preferredLocation"
        value={jobPreferenceForm.preferredLocation}
        onChange={handlePreferredLocationChange}
        placeholder="Enter preferred location"
      />
      <label htmlFor="strongestSkill">Strongest skill</label>
      <input
        type="text"
        id="strongestSkill"
        value={jobPreferenceForm.strongestSkill}
        onChange={handleStrongestSkillChange}
        placeholder="Enter strongest skill"
      />
      <h4>Job preference preview:</h4>
      <p>Target role: {jobPreferenceForm.targetRole}</p>
      <p>Preferred location: {jobPreferenceForm.preferredLocation}</p>
      <p>Strongest skill: {jobPreferenceForm.strongestSkill}</p>
      {jobPreferenceForm.targetRole && jobPreferenceForm.preferredLocation && jobPreferenceForm.strongestSkill ? (
        <p>Job preference form is complete.</p>
      ) : (
        <p>Please complete all job preference fields.</p>
      )}
    </section>
  )
}
function Day09ControlledForms() {
  return (
    <section>
      <h2>Day 9 - Controlled Forms</h2>
      <ControlledTextInputBasics />
      <hr />
      <ObjectFormStatePractice />
      <hr />
      <Day09FormElementsAndSubmit />
      <hr />
      <Day09FinalPractice />
      <hr />
    </section>
  )
}
// 9. Export Day09ControlledForms as default.
export default Day09ControlledForms