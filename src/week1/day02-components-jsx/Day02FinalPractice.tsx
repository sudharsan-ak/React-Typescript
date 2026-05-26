// Day 2 - Final Mixed Exercise
// Scenario: React learning checkpoint card

// 1. Create a component called FinalHeader
// It should return a section tag
// Inside the section:
// - add className="final-card"
// - add an h2 that says: Day 2 final checkpoint
// - add a p tag that says: I can build UI using React components and JSX.
function FinalHeader() {
  return (
    <section className="final-card">
      <h2>Day 2 final checkpoint</h2>
      <p>I can build UI using React components and JSX.</p>
    </section>
  )
}

// 2. Create a component called ConceptSummary
// Inside the component, create these constants:
// const dayNumber = 2
// const mainTopic = "Components and JSX"
// Return a section tag
// Inside the section:
// - add an h2 that says: Concept summary
// - add a p tag that displays: Day 2 focused on Components and JSX.
// Use curly braces for dayNumber and mainTopic.
function ConceptSummary() {
  const dayNumber = 2
  const mainTopic = "Components and JSX"

  return (
    <section>
      <h2>Concept summary</h2>
      <p>Day {dayNumber} focused on {mainTopic}.</p>
    </section>
  )
}

// 3. Create a component called JSXRuleList
// It should return a section tag
// Inside the section:
// - add an h2 that says: JSX rules I practiced
// - add a ul with three li items:
//   className instead of class
//   One parent wrapper
//   Curly braces for JavaScript values
function JSXRuleList() {
  return (
    <section>
      <h2>JSX rules I practiced</h2>
      <ul>
        <li>className instead of class</li>
        <li>One parent wrapper</li>
        <li>Curly braces for JavaScript values</li>
      </ul>
    </section>
  )
}

// 4. Create a component called SelfClosingReminder
// Inside the component, create:
// const imageAlt = "Small placeholder"
// Return a section tag
// Inside the section:
// - add an h2 that says: Self-closing reminder
// - add an input with type="text" and placeholder="Self-closing input"
// - add an img with src="https://via.placeholder.com/60" and alt={imageAlt}
// Make sure input and img are self-closing.
function SelfClosingReminder() {
  const imageAlt = "Small placeholder"

  return (
    <section>
      <h2>Self-closing reminder</h2>
      <input type="text" placeholder="Self-closing input" />
      <img src="https://via.placeholder.com/60" alt={imageAlt} />
    </section>
  )
}

// 5. Create a component called Day02FinalPractice
// It should return a main tag
// Inside the main tag, render:
// <FinalHeader />
// <ConceptSummary />
// <JSXRuleList />
// <SelfClosingReminder />
function Day02FinalPractice() {
  return (
    <main>
      <FinalHeader />
      <ConceptSummary />
      <JSXRuleList />
      <SelfClosingReminder />
    </main>
  )
}

// 6. Export Day02FinalPractice as the default export
export default Day02FinalPractice