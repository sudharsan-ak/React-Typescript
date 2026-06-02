// Day 5 - Final Mixed Exercise: State checkpoint
// Scenario: React learning dashboard
//
// This component is a final Day 5 checkpoint for React state with useState.
// It combines number, boolean, union string, and object state, functional
// updates, reset behavior, conditional rendering, mode switching, disabled
// button logic, and immutable object updates in one small learning dashboard.

import { useState } from "react"

type StudyMode = "Reading" | "Practicing" | "Reviewing"

type StudyProfile = {
  learnerName: string
  currentDay: number
  topic: string
}

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

export default Day05FinalPractice
