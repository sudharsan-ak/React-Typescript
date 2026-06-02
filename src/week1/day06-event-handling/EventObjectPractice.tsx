// Topic 4: Event object basics and currentTarget vs target

// 1. Create a component called EventObjectPractice.

// 2. Inside the component, create a named handler called handleOuterButtonClick.

// 3. The handler should receive an event parameter.
//    Type it as:
//    React.MouseEvent<HTMLButtonElement>

// 4. Inside the handler, console.log:
//    "currentTarget text:" and event.currentTarget.textContent
//    "target:" and event.target

// 5. Return a section tag.

// 6. Inside the section, render:
//    h2: Topic 4 - Event object basics
//    p: React can pass event details into handler functions.

// 7. Add one button with onClick={handleOuterButtonClick}.

// 8. Inside the button, render:
//    span: Click the nested span

// 9. Under the button, render this p tag:
//    currentTarget is the element with the handler. target is what was actually clicked.
function EventObjectPractice() {
  function handleOuterButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    console.log("currentTarget text:", event.currentTarget.textContent)
    console.log("target:", event.target)
  }

  return (
    <section>
      <h2>Topic 4 - Event object basics</h2>
      <p>React can pass event details into handler functions.</p>
      <button onClick={handleOuterButtonClick}>
        <span>Click the nested span</span>
      </button>
      <p>currentTarget is the element with the handler. target is what was actually clicked.</p>
    </section>
  )
}

// 10. Export EventObjectPractice as the default export.

// 11. Import EventObjectPractice into Day06EventHandling.tsx.

// 12. Render <EventObjectPractice /> under Topic 3, with an <hr /> before it.
export default EventObjectPractice