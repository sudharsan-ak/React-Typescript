import { useState } from "react"

// Day 9 - Final Mixed Exercise
// Scenario: Course feedback form
//
// This component is a final Day 9 checkpoint for controlled forms. It builds a
// course feedback form using one object state for related form fields, typed
// submitted state for the saved form snapshot, controlled text/select/textarea
// and checkbox inputs, submit handling with preventDefault, and conditional
// rendering for the submitted feedback preview.
//
// Requirements:
// - Create one feedbackForm object state with lessonTitle, difficulty, feedbackNotes, and wantsFollowUp.
// - Create submittedFeedback state that starts as null and stores the submitted form snapshot.
// - Use change handlers that preserve previous object fields with spread syntax.
// - Use event.currentTarget.value for text, textarea, and select fields.
// - Use event.currentTarget.checked for the checkbox field.
// - Add a form with onSubmit, call preventDefault, and save the current feedbackForm.
// - Show a fallback message before submit and show the submitted feedback after submit.

type FeedbackForm = {
  lessonTitle: string
  difficulty: string
  feedbackNotes: string
  wantsFollowUp: boolean
}

function Day09FinalPractice() {
  const [feedbackForm, setFeedbackForm] = useState({
    lessonTitle: "",
    difficulty: "beginner",
    feedbackNotes: "",
    wantsFollowUp: false,
  })

  const [submittedFeedback, setSubmittedFeedback] = useState<FeedbackForm | null>(null)

  function handleLessonTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value

    setFeedbackForm((previousFormState) => ({
      ...previousFormState,
      lessonTitle: value,
    }))
  }

  function handleDifficultyChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.currentTarget.value

    setFeedbackForm((previousFormState) => ({
      ...previousFormState,
      difficulty: value,
    }))
  }

  function handleFeedbackNotesChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = event.currentTarget.value

    setFeedbackForm((previousFormState) => ({
      ...previousFormState,
      feedbackNotes: value,
    }))
  }

  function handleFollowUpChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.checked

    setFeedbackForm((previousFormState) => ({
      ...previousFormState,
      wantsFollowUp: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmittedFeedback(feedbackForm)
  }

  return (
    <section>
      <h2>Day 9 - Final Practice</h2>
      <h3>Level: Medium</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lessonTitle">Lesson title</label>
          <input
            type="text"
            id="lessonTitle"
            value={feedbackForm.lessonTitle}
            onChange={handleLessonTitleChange}
            placeholder="Enter lesson title"
          />
        </div>
        <div>
          <label htmlFor="difficulty">Difficulty</label>
          <select id="difficulty" value={feedbackForm.difficulty} onChange={handleDifficultyChange}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div>
          <label htmlFor="feedbackNotes">Feedback notes</label>
          <textarea
            id="feedbackNotes"
            value={feedbackForm.feedbackNotes}
            onChange={handleFeedbackNotesChange}
            placeholder="Enter feedback notes"
          />
        </div>
        <div>
          <label htmlFor="wantsFollowUp">Wants follow-up</label>
          <input
            type="checkbox"
            id="wantsFollowUp"
            checked={feedbackForm.wantsFollowUp}
            onChange={handleFollowUpChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedFeedback ? (
        <>
          <p>Submitted feedback:</p>
          <p>Lesson: {submittedFeedback.lessonTitle}</p>
          <p>Difficulty: {submittedFeedback.difficulty}</p>
          <p>Notes: {submittedFeedback.feedbackNotes}</p>
          <p>Follow-up requested: {submittedFeedback.wantsFollowUp ? "Yes" : "No"}</p>
        </>
      ) : (
        <p>No feedback submitted yet.</p>
      )}
    </section>
  )
}

export default Day09FinalPractice