// Day 6 - Final Mixed Exercise
// Scenario: Event-driven portfolio interaction panel
//
// This component is a final Day 6 checkpoint for React event handling.
// It combines click handlers, named handlers, inline arrow wrappers, passing
// arguments to handlers, event object usage, input change handling, state
// updates from events, conditional rendering, and reset behavior in one small
// portfolio-style interaction panel.


// Rules:
// - Do not use any.
// - Do not call handlers directly like onClick={handleSomething()}.
// - Use onClick={handleSomething} when no custom argument is needed.
// - Use onClick={() => handleSomething(value)} when passing a custom argument.
// - Use onClick={(event) => handleSomething(value, event)} only if you need both a custom value and the event.
// - Use functional updates when the new state depends on previous state.
// - Keep the UI simple. Basic HTML is enough.
import { useState } from 'react'

type PortfolioSection = "Projects" | "Skills" | "Contact"

function Day06FinalPractice() {
  const [selectedSection, setSelectedSection] = useState<PortfolioSection>("Projects")
  const [interactionCount, setInteractionCount] = useState(0)
  const [detailsVisible, setDetailsVisible] = useState(false)
  const [displayName, setDisplayName] = useState("")

  function handleSelectSection(section: PortfolioSection) {
    setSelectedSection(section)
    setInteractionCount((previousCount) => previousCount + 1)
  }

  function handleToggleDetails() {
    setDetailsVisible((previousValue) => !previousValue)
  }

  function handleDisplayNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDisplayName(event.currentTarget.value)
  }

  function handleLogEventTarget(event: React.MouseEvent<HTMLButtonElement>) {
    console.log("currentTarget text:", event.currentTarget.textContent)
    console.log("target:", event.target)
  }

  function handleResetPanel() {
    setSelectedSection("Projects")
    setInteractionCount(0)
    setDetailsVisible(false)
    setDisplayName("")
  }

  return (
    <section>
      <h2>Day 6 final checkpoint</h2>
      <p>Selected section: {selectedSection}</p>
      <p>Interaction count: {interactionCount}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={() => handleSelectSection("Projects")}>Projects</button>
        <button onClick={() => handleSelectSection("Skills")}>Skills</button>
        <button onClick={() => handleSelectSection("Contact")}>Contact</button>
        <button onClick={handleToggleDetails}>Toggle details</button>
      </div>
      {detailsVisible && <p>You are viewing the {selectedSection} section.</p>}
      <input
        type="text"
        value={displayName}
        onChange={handleDisplayNameChange}
        placeholder="Type your name"
      />
      {displayName && <p>Display name: {displayName}</p>}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={handleLogEventTarget}>
          <span>Log event target</span>
        </button>
        <button onClick={handleResetPanel}>Reset panel</button>
      </div>
    </section>  
  )
}

export default Day06FinalPractice