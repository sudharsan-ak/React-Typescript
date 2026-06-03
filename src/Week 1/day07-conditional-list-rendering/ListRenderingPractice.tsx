// Topic 3 Exercise: List rendering with map and keys
//
// Goal:
// Practice rendering arrays with .map(), using keys, and showing fallback UI
// when an array is empty.
//
// 1. Create a component called ListRenderingPractice.
//
// 2. Inside the component, create this array:
//    const coreSkills = ["React", "TypeScript", "JavaScript", "Node.js"]
//
// 3. Render a section with:
//    - an h2 that says: Core skills
//    - a ul
//    - inside the ul, use coreSkills.map()
//    - render each skill as an li
//    - use the skill itself as the key
//
// 4. Under that, create this second array:
//    const emptyTools: string[] = []
//
// 5. Render another section with:
//    - an h2 that says: Tools
//
// 6. Under the Tools heading:
//    - if emptyTools is empty, show a paragraph that says:
//      No tools added yet.
//    - otherwise, render a ul and map over emptyTools
function ListRenderingPractice() {
  const coreSkills = ["React", "TypeScript", "JavaScript", "Node.js"]
  const emptyTools: string[] = []

  return (
    <section>
      <h2>Topic 3 - List Rendering</h2>
      <h2>Core skills</h2>
      <ul>
        {coreSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h2>Tools</h2>
      {emptyTools.length === 0 ? (
        <p>No tools added yet.</p>
      ) : (
        <ul>
          {emptyTools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      )}
    </section>
  )
}


// 7. Export ListRenderingPractice as default.
//
// 8. Import and render ListRenderingPractice inside
//    Day07ConditionalListRendering.tsx, under TernaryAndShowHidePractice.
export default ListRenderingPractice