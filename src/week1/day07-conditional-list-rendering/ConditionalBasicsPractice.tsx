// Topic 1 Exercise: Conditional rendering basics
//
// Goal:
// Practice if/else before return, early return, fallback UI, and returning null.
//
// 1. Create a component called ConditionalBasicsPractice.

// 2. Inside the component, create these constants:
//    const isLoading = false
//    const hasError = false
//    const selectedSection = ""
//    const shouldShowAdminNotice = false
//
// 3. First, handle loading with an early return.
//    If isLoading is true, return a paragraph that says:
//    Loading portfolio section...
//
// 4. Next, handle error with an early return.
//    If hasError is true, return a paragraph that says:
//    Could not load portfolio section.
//
// 5. Next, handle missing selectedSection with an early return.
//    If selectedSection is empty, return a section with:
//    - an h2 that says: No section selected
//    - a p that says: Choose Projects, Skills, or Experience to continue.
//
// 6. After those early returns, return the normal UI:
//    - a section
//    - an h2 that displays: Selected section: {selectedSection}
//    - a p that says: This is the normal portfolio section view.
//
// 7. Inside the normal UI, create a small admin notice area.
//    If shouldShowAdminNotice is false, render nothing for that notice.
//    Hint: create a tiny helper component or use a small conditional check.
//    Use null when nothing should render.
//
function ConditionalBasicsPractice() {
  const isLoading = false
  const hasError = false
  const selectedSection = ""
  const shouldShowAdminNotice = false

  if (isLoading) {
    return <p>Loading portfolio section...</p>
  }

  if (hasError) {
    return <p>Could not load portfolio section.</p>
  }

  if (!selectedSection) {
    return (
      <section>
        <h2>No section selected</h2>
        <p>Choose Projects, Skills, or Experience to continue.</p>
      </section>
    )
  }

  function renderAdminNotice() {
    if (!shouldShowAdminNotice) {
      return null
    }

    return (
      <section>
        <h2>Admin notice</h2>
      </section>
    )
  }

  return (
    <section>
      <h2>Selected section: {selectedSection}</h2>
      <p>This is the normal portfolio section view.</p>
      {renderAdminNotice()}
    </section>
  )
}

// 8. Export ConditionalBasicsPractice as default.
//
// 9. Import and render ConditionalBasicsPractice from your Day 7 main file
//    or directly from App.tsx if you have not created the Day 7 main file yet.
export default ConditionalBasicsPractice