// Day 7 - Final Mixed Exercise
// Scenario: Portfolio launch readiness board
//
// Goal:
// Build a small dashboard that shows portfolio launch tasks.
// This should combine:
// - early return fallback
// - ternary rendering
// - && rendering
// - boolean show/hide state
// - selected filter state
// - .map()
// - stable keys
// - arrays of objects
// - optional fields
// - conditional rendering inside lists
//
// Important:
// Do not overbuild this.
// Do not add forms.
// Do not add CSS unless you want basic className strings.
// Do not put <p> directly inside <ul>.
//
// 1. Import useState from react.
import { useState } from 'react'

// 2. Create a union type for task area.
//    Valid areas should be:
//    "projects", "skills", "experience", "contact"
type TaskArea = "projects" | "skills" | "experience" | "contact"

// 3. Create a union type for priority.
//    Valid priorities should be:
//    "high", "medium", "low"
type Priority = "high" | "medium" | "low"

// 4. Create a type for a launch task object.
//    Each task should have:
//    - id
//    - title
//    - area
//    - priority
//    - isComplete
//    - tags
//    Optional fields:
//    - owner
//    - note
type LaunchTask = {
  id: number
  title: string
  area: TaskArea
  priority: Priority
  isComplete: boolean
  tags: string[]
  owner?: string
  note?: string
}

// 5. Create a component called Day07FinalPractice.
//
// 6. Inside the component, create:
//    - a boolean state to show/hide completed tasks
//    - a selected area state that can be "all" or one task area
//
// 7. Inside the component, create at least 5 launch task objects.
//    Requirements:
//    - at least 2 completed tasks
//    - at least 2 incomplete tasks
//    - at least 1 high priority task
//    - at least 1 task without owner
//    - at least 1 task without note
//    - every task should have at least 2 tags
//
// 8. Add a simple early return:
//    If the original tasks array is empty, return fallback UI:
//    "No launch tasks available."
//
// 9. Create a filteredTasks variable.
//    It should:
//    - filter by selected area unless selected area is "all"
//    - hide completed tasks when showCompleted is false
//
// 10. Render a section with heading:
//     Portfolio launch readiness
//
// 11. Add buttons to switch selected area:
//     All, Projects, Skills, Experience, Contact
//
// 12. Add one button to toggle completed tasks.
//     Use ternary text:
//     - Show completed
//     - Hide completed
//
// 13. Under the controls:
//     If filteredTasks is empty, show:
//     No tasks match the current filters.
//
// 14. Otherwise, map over filteredTasks and render one article per task.
//
// 15. Each article should include:
//     - key using task.id
//     - conditional className based on priority
//     - h3 with task title
//     - p showing area
//     - p showing complete/incomplete status using ternary
//
// 16. Inside each task card:
//     - show "High priority" only when priority is high
//     - show owner if owner exists, otherwise show "Owner not assigned."
//     - show note if note exists, otherwise show "No note added."
//     - render tags as a ul/li list using map()
//     - use each tag as the key for now
function Day07FinalPractice() {
  const [showCompleted, setShowCompleted] = useState(false)
  const [selectedArea, setSelectedArea] = useState<TaskArea | "all">("all")

  const tasks: LaunchTask[] = [
    {
      id: 1,
      title: "Project A",
      area: "projects",
      priority: "high",
      isComplete: true,
      tags: ["React", "TypeScript"],
      owner: "Owner A",
      note: "Note A",
    },
    {
      id: 2,
      title: "Project B",
      area: "projects",
      priority: "medium",
      isComplete: false,
      tags: ["Node.js", "AWS Lambda"],
    },
    {
      id: 3,
      title: "Skill C",
      area: "skills",
      priority: "low",
      isComplete: true,
      tags: ["Components", "Props"],
      owner: "Owner C",
      note: "Note C",
    },
    {
      id: 4,
      title: "Experience D",
      area: "experience",
      priority: "high",
      isComplete: false,
      tags: ["TypeScript", "Node.js"],
      owner: "Owner D",
    },
    {
      id: 5,
      title: "Contact E",
      area: "contact",
      priority: "medium",
      isComplete: true,
      tags: ["Vite", "React"],
      note: "Note E",
    },
  ]

  if (tasks.length === 0) {
    return <p>No launch tasks available.</p>
  }

  const filteredTasks = tasks.filter((task) => {
    if (selectedArea !== "all" && task.area !== selectedArea) {
      return false
    }

    if (!showCompleted && task.isComplete) {
      return false
    }

    return true
  })

  return (
    <section>
      <h2>Portfolio launch readiness</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={() => setSelectedArea("all")}>All</button>
        <button onClick={() => setSelectedArea("projects")}>Projects</button>
        <button onClick={() => setSelectedArea("skills")}>Skills</button>
        <button onClick={() => setSelectedArea("experience")}>Experience</button>
        <button onClick={() => setSelectedArea("contact")}>Contact</button>
        <button onClick={() => setShowCompleted((previousState) => !previousState)}>
          {showCompleted ? "Hide completed" : "Show completed"}
        </button>
      </div>
      {filteredTasks.length === 0 ? (
        <p>No tasks match the current filters.</p>
      ) : (
        filteredTasks.map((task) => (
          <article key={task.id} className={task.priority}>
            <h3>{task.title}</h3>
            <p>{task.area}</p>
            <p>{task.isComplete ? "Complete" : "Incomplete"}</p>
            {task.priority === "high" && <p>High priority</p>}
            {task.owner ? (
              <p>Owner: {task.owner}</p>
            ) : (
              <p>Owner not assigned.</p>
            )}
            {task.note ? (
              <p>Note: {task.note}</p>
            ) : (
              <p>No note added.</p>
            )}
            <ul>
              {task.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))
      )}
    </section>
  )
}

// 17. Export Day07FinalPractice as default.
//
// 18. Import and render Day07FinalPractice inside Day07ConditionalListRendering.tsx
//     under ConditionalListItemsPractice.
export default Day07FinalPractice