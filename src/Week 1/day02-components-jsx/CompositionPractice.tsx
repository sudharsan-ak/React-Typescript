// Day 2 - Exercise 10: Component Composition

// 1. Create a component called CompositionIntro
// 2. It should return a section tag
// 3. Inside the section, add an h2 that says:
// Component composition
// 4. Add a p tag that says:
// Composition means building bigger UI from smaller components.
function CompositionIntro() {
  return (
    <section>
      <h2>Component composition</h2>
      <p>Composition means building bigger UI from smaller components.</p>
    </section>
  )
}

// 5. Create a component called ParentChildReminder
// 6. It should return a section tag
// 7. Inside the section, add an h2 that says:
// Parent and child components
// 8. Add a p tag that says:
// A component becomes a child when another component renders it.
function ParentChildReminder() {
  return (
    <section>
      <h2>Parent and child components</h2>
      <p>A component becomes a child when another component renders it.</p>
    </section>
  )
}

// 9. Create a component called CompositionPractice
// 10. It should return a section tag
// 11. Inside the section, render:
// <CompositionIntro />
// <ParentChildReminder />
function CompositionPractice() {
  return (
    <section>
      <CompositionIntro />
      <ParentChildReminder />
    </section>
  )
}

// 12. Export CompositionPractice as the default export
export default CompositionPractice