// Day 7 - Final Mixed Exercise
// Scenario: Portfolio launch readiness board
//
// This component is a final Day 7 checkpoint for conditional rendering and
// list rendering. It builds a small portfolio launch dashboard from an array
// of task objects, filters tasks by selected area, toggles completed tasks,
// handles an early empty-state return, and renders task cards with stable keys,
// ternary rendering, && rendering, optional owner/note fields, priority-based
// class names, and mapped tag lists.
//
// Important:
// Do not overbuild this.
// Do not add forms.
// Do not add CSS unless you want basic className strings.
// Do not put <p> directly inside <ul>.
import { useState } from 'react'

type TaskArea = "projects" | "skills" | "experience" | "contact"

type Priority = "high" | "medium" | "low"

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

export default Day07FinalPractice