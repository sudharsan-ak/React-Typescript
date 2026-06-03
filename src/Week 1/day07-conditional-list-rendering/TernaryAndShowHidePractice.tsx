// Day 7 - Topic 2 Exercise: Ternary and && rendering
//
// Goal:
// Practice ternary rendering, && rendering, show/hide UI from boolean state,
// and a light conditional className.
//
// 1. Import useState from react.
import { useState } from 'react'

// 2. Create a component called TernaryAndShowHidePractice.
//
// 3. Inside the component, create these pieces of state:
//    - isCompleted, starting as false
//    - isDetailsVisible, starting as false
//    - isSelected, starting as false
//
// 4. Create a button that toggles isCompleted.
//    The button text should use a ternary:
//    - if isCompleted is true: Mark as in progress
//    - otherwise: Mark as completed
//
// 5. Under that button, render a paragraph using a ternary:
//    - if isCompleted is true: Topic completed
//    - otherwise: Topic still in progress
//
// 6. Create a second button that toggles isDetailsVisible.
//    The button text should use a ternary:
//    - if isDetailsVisible is true: Hide details
//    - otherwise: Show details
//
// 7. Under that button, use && rendering.
//    Only show this paragraph when isDetailsVisible is true:
//    Conditional rendering lets state decide what UI appears.
//
// 8. Create a third button that toggles isSelected.
//    Give the button a className using a ternary:
//    - if isSelected is true: selected-button
//    - otherwise: normal-button
//    The button text should use a ternary:
//    - if isSelected is true: Selected
//    - otherwise: Not selected
function TernaryAndShowHidePractice() {
  const [isCompleted, setIsCompleted] = useState(false)
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  function toggleIsDetailsVisible() {
    setIsDetailsVisible((previousState) => !previousState)
  }

  function toggleIsSelected() {
    setIsSelected((previousToggle) => !previousToggle)
  }

  return (
    <section>
      <h2>Topic 2 -Ternary and && rendering</h2>
      {/* Inline Handler Example */}
      <button onClick={() => setIsCompleted((previousValue) => !previousValue)}>
        {isCompleted ? "Mark as in progress" : "Mark as completed"}
      </button>
      <p>{isCompleted ? "Topic completed" : "Topic still in progress"}</p>
      <button onClick={toggleIsDetailsVisible}>
        {isDetailsVisible ? "Hide details" : "Show details"}
      </button>
      {isDetailsVisible && <p>Conditional rendering lets state decide what UI appears.</p>}
      <button onClick={toggleIsSelected} className={isSelected ? "selected-button" : "normal-button"}>
        {isSelected ? "Selected" : "Not selected"}
      </button>     
    </section>
  )
}

// 9. Export TernaryAndShowHidePractice as default.
//
// 10. Import and render TernaryAndShowHidePractice inside
//     Day07ConditionalListRendering.tsx, under ConditionalBasicsPractice.
export default TernaryAndShowHidePractice