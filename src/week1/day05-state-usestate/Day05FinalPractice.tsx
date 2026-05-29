// Day 5 - Final Mixed Exercise: State checkpoint
// Scenario: React learning dashboard

import { useState } from "react"

// 1. Create a union type called StudyMode
// It should allow only these values:
// Reading, Practicing, Reviewing
type StudyMode = "Reading" | "Practicing" | "Reviewing"

// 2. Create an object type called StudyProfile
// It should describe:
// - learner name
// - current day
// - main topic
type StudyProfile = {
  learnerName: string
  currentDay: number
  topic: string
}

// 3. Create a component called Day05FinalPractice

// 4. Inside the component, create state for:
// - completed exercises count
// - whether the summary is visible
// - current study mode
// - study profile object

// 5. Render the learner name, current day, main topic,
// completed exercises count, and current study mode

// 6. Add buttons to:
// - increase completed exercises
// - reset completed exercises
// - switch study mode
// - toggle summary visibility
// - update only the main topic inside the profile object

// 7. When summary visibility is true, show:
// Summary: Day 5 covered number, boolean, string, and object state.
function Day05FinalPractice() {
  const [completedExercises, setCompletedExercises] = useState(0)
  const [isSummaryVisible, setSummaryVisible] = useState(false)
  const [studyMode, setStudyMode] = useState<StudyMode>("Reading")
  const [studyProfile, setStudyProfile] = useState<StudyProfile>({
    learnerName: "Sudharsan Srinivasan",
    currentDay: 5,
    topic: "State with useState"
  })

  return (
    <section>
      <h2>Final Exercise</h2>
      <p>Learner Name: {studyProfile.learnerName}</p>
      <p>Current Day: {studyProfile.currentDay}</p>
      <p>Topic: {studyProfile.topic}</p>
      <p>Completed Exercises: {completedExercises}</p>
      <p>Current Study Mode: {studyMode}</p>
      {isSummaryVisible && <p>Summary: Day 5 covered number, boolean, string, and object state.</p>}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <button onClick={() => setCompletedExercises((previousCount) => (previousCount + 1))}>Increase Completed Exercises Count</button>
        <button disabled={completedExercises === 0} onClick={() => setCompletedExercises((previousCount) => Math.max(previousCount - 1, 0))}>Decrease Completed Exercises Count</button>
        <button onClick={() => setCompletedExercises(0)}>Reset Count</button>
      </div>

      <hr />
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <button onClick={() => setStudyMode("Reading")}>Reading</button>
        <button onClick={() => setStudyMode("Practicing")}>Practicing</button>
        <button onClick={() => setStudyMode("Reviewing")}>Reviewing</button>
      </div>
      
      <hr />
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <button onClick={() => setSummaryVisible((previousValue) => !previousValue)}>Toggle Summary</button>
      </div>

      <hr />
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <button onClick={() => setStudyProfile((previousProfile) => ({
          ...previousProfile,
          topic: "Finished this topic- State with useState"
        }))}>Update Topic</button>
      </div>
    </section>
  )
}

// 8. Export Day05FinalPractice as the default export
export default Day05FinalPractice