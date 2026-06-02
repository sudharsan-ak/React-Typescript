// Topic 1: React events, onClick, inline handlers, and named handlers

import { useState } from 'react'
import EventObjectPractice from './EventObjectPractice'
import InputChangePreview from './InputChangePreview'
import Day06FinalPractice from './Day06FinalPractice'

type PortfolioSection = "Projects" | "Skills" | "Contact"

// 1. Create a component called EventHandlerBasics.

// 2. Inside the component, create a named handler function called handleNamedClick.
//    It should log this exact message:
//    "Named handler clicked"

// 3. Return a main tag.

// 4. Inside the main tag, render an h1:
//    Day 6 - Event Handling

// 5. Add a section with:
//    - an h2 that says: Topic 1 - onClick basics
//    - a p tag that says: Events let React respond to user actions.

// 6. Add one button that uses an inline onClick handler.
//    When clicked, it should log:
//    "Inline handler clicked"
//    Button text:
//    Inline click

// 7. Add one button that uses the named handler function.
//    Button text:
//    Named click

// 8. Add a short p tag under the buttons:
//    The handler should run only when the button is clicked.
function EventHandlersBasics() {
  function handleNamedClick() {
    console.log("Named handler clicked")
  }

  return (
    <section>
      <h2>Topic 1 - onClick basics</h2>
      <p>Events let React respond to user actions.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <button onClick={() => console.log("Inline handler clicked")}>Inline click</button>
        <button onClick={handleNamedClick}>Named click</button>
      </div>
      <p>The handler should run only when the button is clicked.</p>
    </section>
  )
}

// Topic 2: Event handlers updating state

// 1. Import useState from react.

// 2. Inside Day06EventHandling, create number state:
//    const [clickCount, setClickCount] = useState(0)

// 3. Create a named handler called handleIncreaseClick.
//    It should increase clickCount by 1.
//    Use functional update form.

// 4. Create a named handler called handleResetClick.
//    It should reset clickCount back to 0.

// 5. Create boolean state:
//    const [isPracticeVisible, setIsPracticeVisible] = useState(false)

// 6. Create a named handler called handleTogglePractice.
//    It should toggle isPracticeVisible.
//    Use functional update form.

// 7. Under your Topic 1 section, add a new section with:
//    h2: Topic 2 - Events updating state
//    p: Click count: {clickCount}

// 8. Add three buttons:
//    - Increase count
//    - Reset count
//    - Toggle practice message

// 9. Wire the buttons to the correct named handlers.

// 10. Under the buttons, render this paragraph only when isPracticeVisible is true:
//     Practice message is visible.

// 11. Keep the rest of your Topic 1 code working.
function EventHandlersUpdatingState() {
  const [clickCount, setClickCount] = useState(0)
  const [isPracticeVisible, setIsPracticeVisible] = useState(false)

  function handleIncreaseClick() {
    setClickCount((previousCount) => previousCount + 1)
  }

  function handleResetClick() {
    setClickCount(0)
  }

  function handleTogglePractice() {
    setIsPracticeVisible((previousValue) => !previousValue)
  }

  return (
    <section>
      <h2>Topic 2 - Events updating state</h2>
      <p>Click count: {clickCount}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <button onClick={handleIncreaseClick}>Increase count</button>
        <button onClick={handleResetClick}>Reset count</button>
        <button onClick={handleTogglePractice}>Toggle practice message</button>
      </div>
      <div>
        {isPracticeVisible && <p>Practice message is visible.</p>}
      </div>
    </section>
  )
}

// Day 6 - Topic 3: Passing arguments to event handlers

// 1. Create a type called PortfolioSection.
//    It should allow only:
//    "Projects", "Skills", "Contact"

// 2. Create a component called PassingArgumentsToHandlers.

// 3. Inside the component, create state called selectedSection.
//    Initial value should be "Projects".
//    Use the PortfolioSection type.

// 4. Create a named handler called handleSelectSection.
//    It should receive one parameter called section.
//    The parameter should be typed as PortfolioSection.
//    It should update selectedSection to the section argument.

// 5. Return a section tag.

// 6. Inside the section, render:
//    h2: Topic 3 - Passing arguments to handlers
//    p: Selected section: {selectedSection}

// 7. Add three buttons:
//    Projects
//    Skills
//    Contact

// 8. Each button should call handleSelectSection with the correct value.
//    Use arrow functions inside onClick.

// 9. Add a short p tag under the buttons:
//    Passing an argument needs an arrow function wrapper.

// 10. Render PassingArgumentsToHandlers under Topic 2 in Day06EventHandling.
function PassingArgumentsToHandlers() {
  const [selectedSection, setSelectedSection] = useState<PortfolioSection>("Projects")

  function handleSelectSection(section: PortfolioSection) {
    setSelectedSection(section)
  }

  return (
    <section>
      <h2>Topic 3 - Passing arguments to handlers</h2>
      <p>Selected section: {selectedSection}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <button onClick={() => handleSelectSection("Projects")}>Projects</button>
        <button onClick={() => handleSelectSection("Skills")}>Skills</button>
        <button onClick={() => handleSelectSection("Contact")}>Contact</button>
      </div>
      <p>Passing an argument needs an arrow function wrapper.</p>
    </section>
  )
}

// Create a component called Day06EventHandling and render functions inside it
function Day06EventHandling() {
  return (
    <main>
      <h1>Day 6 - Event Handling</h1>
      <EventHandlersBasics />
      <hr />
      <EventHandlersUpdatingState />
      <hr />
      <PassingArgumentsToHandlers />
      <hr />
      <EventObjectPractice />
      <hr />
      <InputChangePreview />
      <hr />
      <Day06FinalPractice />
      <hr />
    </main>
  )
}

// Export Day06EventHandling as the default export.
export default Day06EventHandling
// 10. Render Day06EventHandling from App.tsx.