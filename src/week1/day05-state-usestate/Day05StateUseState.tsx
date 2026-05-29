// Topic 1 Exercise: State mental model + useState syntax

// 1. Import useState from react
import { useState } from 'react'
import Day05FinalPractice from './Day05FinalPractice'

// 2. Create a component called UseStateMentalModel

// 3. Inside the component, create this state:
// const [currentTopic] = useState("State with useState")

// 4. Create another state:
// const [learningStatus] = useState("In progress")

// 5. Return a section tag

// 6. Inside the section tag, render
// - an h2 that says: Topic 1 - State mental model
// - a p tag that renders: Current topic: <currentTopic>
// - a p tag that renders: Learning status: <learningStatus>
// 7. Create a component called Day05StateUseState and render UseStateMentalModel inside it
// 8. Export Day05StateUseState as the default export
function UseStateMentalModel() {
  const [currentTopic] = useState("State with useState")
  const [learningStatus] = useState("In progress")

  return (
    <section>
      <h2>Topic 1 - State mental model</h2>
      <p>Current topic: {currentTopic}</p>
      <p>Learning status: {learningStatus}</p>
    </section>
  )
}

// Topic 2 Exercise: Number state + functional updates
// 1. Create a component called NumberStatePractice

// 2. Inside the component, create number state:
// const [practiceCount, setPracticeCount] = useState(0)

// 3. Return a section tag

// 4. Inside the section, render:
// - an h2 that says: Topic 2 - Number state
// - a p tag that renders: Practice count: <practiceCount>

// 5. Add a button that says: Increase
// When clicked, it should increase practiceCount by 1
// Use the functional update form:
// setPracticeCount((previousCount) => previousCount + 1)

// 6. Add a button that says: Decrease
// When clicked, it should decrease practiceCount by 1
// Use the functional update form

// 7. Add a button that says: Reset
// When clicked, it should reset practiceCount to 0

// 8. Render <NumberStatePractice /> below your Topic 1 section in Day05StateUseState
function NumberStatePractice() {
  const [practiceCount, setPracticeCount] = useState(0)

  return (
    <section>
      <h2>Topic 2 - Number state</h2>
      <p>Practice count: {practiceCount}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <button onClick={() => setPracticeCount((previousCount) => previousCount + 1)}>
          Increase
        </button>
        <button onClick={() => setPracticeCount((previousCount) => previousCount - 1)}>
          Decrease
        </button>
        <button onClick={() => setPracticeCount(0)}>
          Reset
        </button>
      </div>
    </section>
  )
}

// Day 5 - Topic 3 Exercise: Boolean state + toggle UI

// 1. Create a component called BooleanStatePractice

// 2. Inside the component, create boolean state:
// const [isPanelOpen, setIsPanelOpen] = useState(false)

// 3. Return a section tag

// 4. Inside the section, render:
// - an h2 that says: Topic 3 - Boolean state
// - a p tag that renders: Panel status: Open
//   when isPanelOpen is true
// - the same p tag should render: Panel status: Closed
//   when isPanelOpen is false

// 5. Add a button that says: Toggle panel

// 6. When clicked, the button should toggle isPanelOpen
// Use the functional update form:
// setIsPanelOpen((previousValue) => !previousValue)

// 7. Under the button, conditionally render a p tag only when isPanelOpen is true
// The p tag should say:
// This panel is currently visible.

// 8. Render <BooleanStatePractice /> below <NumberStatePractice />
function BooleanStatePractice() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  return (
    <section>
      <h2>Topic 3 - Boolean state</h2>
      <p>Panel status: {isPanelOpen ? "Open" : "Closed"}</p>
      <button onClick={() => setIsPanelOpen((previousValue) => !previousValue)}>
        Toggle panel
      </button>
      {isPanelOpen && <p>This panel is currently visible.</p>}
    </section>
  )
}

// Topic 4 Exercise: String state basics

// 1. Create this union type above the StringStatePractice component:
// type PortfolioSection = "Projects" | "Skills" | "Contact"

// 2. Create a component called StringStatePractice
// 3. Inside the component, create string state:
// const [selectedSection, setSelectedSection] = useState<PortfolioSection>("Projects")

// 4. Return a section tag

// 5. Inside the section, render:
// - an h2 that says: Topic 4 - String state
// - a p tag that renders: Selected section: <selectedSection>

// 6. Add three buttons:
// - Projects
// - Skills
// - Contact

// 7. When each button is clicked, update selectedSection to the matching value:
// Projects button -> "Projects"
// Skills button -> "Skills"
// Contact button -> "Contact"

// 8. Under the buttons, render this p tag:
// You are currently viewing the <selectedSection> section.

// 9. Render <StringStatePractice /> below <BooleanStatePractice />
type PortfolioSection = "Projects" | "Skills" | "Contact"

function StringStatePractice() {
  const [selectedSection, setSelectedSection] = useState<PortfolioSection>("Projects")

  return (
    <section>
      <h2>Topic 4 - String state</h2>
      <p>Selected section: {selectedSection}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <button onClick={() => setSelectedSection("Projects")}>Projects</button>
        <button onClick={() => setSelectedSection("Skills")}>Skills</button>
        <button onClick={() => setSelectedSection("Contact")}>Contact</button>
      </div>
      <p>You are currently viewing the {selectedSection} section.</p>
    </section>
  )
}

// Day 5 - Topic 5 Exercise: Object state + no direct mutation

// 1. Create this type above the ObjectStatePractice component:
// type LearningProfile = {
//   name: string
//   role: string
//   focusArea: string
// }

// 2. Create a component called ObjectStatePractice

// 3. Inside the component, create object state:
// const [learningProfile, setLearningProfile] = useState<LearningProfile>({
//   name: "Sudharsan",
//   role: "Full Stack Software Engineer",
//   focusArea: "React state",
// })
// 4. Return a section tag

// 5. Inside the section, render:
// - an h2 that says: Topic 5 - Object state
// - a p tag that renders: Name: <learningProfile.name>
// - a p tag that renders: Role: <learningProfile.role>
// - a p tag that renders: Focus area: <learningProfile.focusArea>

// 6. Add a button that says: Update focus area
// When clicked, update only focusArea to:
// Object state with useState

// 7. Add a button that says: Update role
// When clicked, update only role to:
// React + TypeScript Learner

// 8. Use the functional update form for both buttons:
// setLearningProfile((previousProfile) => ({
//   ...previousProfile,
//   fieldToUpdate: "new value",
// }))

// 9. Do not mutate the object directly.
// Do not do this:
// learningProfile.focusArea = "something"

// 10. Render <ObjectStatePractice /> below <StringStatePractice />
type LearningProfile = {
  name: string
  role: string
  focusArea: string
}

function ObjectStatePractice() {
  const [learningProfile, setLearningProfile] = useState<LearningProfile>({
    name: "Sudharsan",
    role: "Full Stack Software Engineer",
    focusArea: "React state",
  })

  return (
    <section>
      <h2>Topic 5 - Object state</h2>
      <p>Name: {learningProfile.name}</p>
      <p>Role: {learningProfile.role}</p>
      <p>Focus area: {learningProfile.focusArea}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <button onClick={() => setLearningProfile((previousProfile) => ({
          ...previousProfile,
          focusArea: "Object state with useState"
        }))}>Update focus area</button>
        <button onClick={() => setLearningProfile((previousProfile) => ({
          ...previousProfile,
          role: "React + TypeScript Learner"
        }))}>Update role</button>
      </div>
    </section>
  )
}

function Day05StateUseState() {
  return (
    <main>
      <h1>Day 5 - State with useState</h1>
      <UseStateMentalModel />
      <hr />
      <NumberStatePractice />
      <hr />
      <BooleanStatePractice />
      <hr />
      <StringStatePractice />
      <hr />
      <ObjectStatePractice />
      <hr />
      <hr />
      <Day05FinalPractice />
      <hr />
    </main>
  )
}

export default Day05StateUseState