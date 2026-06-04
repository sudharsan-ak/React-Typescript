// Day 8 - Final Mixed Exercise
// Scenario: Online course dashboard
//
// This component is a final Day 8 checkpoint for component composition and
// reusable component boundaries. It builds a small course dashboard by
// composing a header, lessons section, instructor section, and checklist
// section inside a main tag. It also uses a reusable wrapper component with
// children, reusable lesson cards with props, list rendering with map(), and
// conditional rendering for optional lesson status.
//
// Requirements:
// - Import ReactNode from react as a type import.
// - Use a DashboardSection wrapper that receives a title and children.
// - Create at least 3 lesson objects with id, title, duration, topics, and optional status.
// - Render lessons with map() and use each lesson id as the stable key.
// - Render lesson topics as a ul/li list.
// - Show lesson status only when the lesson has one.
// - Keep the component tree focused and avoid over-splitting tiny pieces.

import type { ReactNode } from 'react'

function Day08FinalPractice() {
  return (
    <main>
      <CourseHeader />
      <LessonsSection />
      <InstructorSection />
      <CourseChecklistSection />
    </main>
  )
}

function CourseHeader() {
  return (
    <section>
      <h2>Day 8 - Final Practice</h2>
      <h3>Level: Medium</h3>
      <p>Practice building a course dashboard with reusable composed components.</p>
    </section>
  )
}

function DashboardSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function LessonsSection() {
  const lessons = [
    {
      id: 1,
      title: "Component composition basics",
      duration: "2 hours",
      topics: ["Component tree", "Splitting UI into sections"],
      status: "Completed",
    },
    {
      id: 2,
      title: "Reusable components with props",
      duration: "3 hours",
      topics: ["Typed props", "Reusable card components"],
    },
    {
      id: 3,
      title: "Wrapper components with children",
      duration: "4 hours",
      topics: ["ReactNode children", "Flexible section layout"],
      status: "In progress",
    },
  ]

  return (
    <DashboardSection title="Lessons">
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </DashboardSection>
  )
}

function LessonCard({ lesson }: { lesson: { title: string; duration: string; topics: string[]; status?: string } }) {
  return (
    <article>
      <h3>{lesson.title}</h3>
      <p>{lesson.duration}</p>
      <ul>
        {lesson.topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
      {lesson.status && <p>{lesson.status}</p>}
    </article>
  )
}

function InstructorSection() {
  return (
    <DashboardSection title="Instructor">
      <p>Rip Wheeler</p>
      <p>Frontend development instructor</p>
      <p>Cybersecurity</p>
      <p>Artificial Intelligence</p>
    </DashboardSection>
  )
}

function CourseChecklistSection() {
  return (
    <DashboardSection title="Course checklist">
      <ul>
        <li>Lessons are split into cards</li>
        <li>Section wrapper avoids repeated layout</li>
        <li>Optional status is conditionally rendered</li>
        <li>Main component only composes sections</li>
      </ul>
    </DashboardSection>
  )
}

export default Day08FinalPractice
