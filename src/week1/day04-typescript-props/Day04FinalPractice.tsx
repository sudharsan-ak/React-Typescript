// Day 4 - Final Mixed Exercise
// Goal: Practice TypeScript props with type, interface, optional props, union props, array props, default values, and reusable components.

// Scenario:
// Build a small portfolio section summary using typed reusable cards.

// 1. Create a type called SectionStatus
// 2. SectionStatus should only allow:
//    "completed"
//    "in-progress"
//    "planned"
type SectionStatus = "completed" | "in-progress" | "planned"

// 3. Create a type called SectionPriority
// 4. SectionPriority should only allow:
//    "high"
//    "medium"
//    "low"
type SectionPriority = "high" | "medium" | "low"

// 5. Create an interface called PortfolioSectionCardProps
// 6. It should include:
//    title: string
//    description: string
//    skills: string[]
//    highlights: string[]
//    status: SectionStatus
//    priority?: SectionPriority
//    githubUrl?: string
interface PortfolioSectionCardProps {
  title: string
  description: string
  skills: string[]
  highlights: string[]
  status: SectionStatus
  priority?: SectionPriority
  githubUrl?: string
}

// 7. Create a component called PortfolioSectionCard
// 8. It should receive props using destructuring
// 9. Type the destructured props using PortfolioSectionCardProps
// 10. Give priority a default value of "medium"
// 11. Inside the component, return a section
// 12. Inside the section:
//     - render an h2 with the title
//     - render a p tag with: Description: <description>
//     - render a p tag with: Status: <status>
//     - render a p tag with: Priority: <priority>
//     - render an h3 that says: Skills
//     - render skills using map() inside a ul/li
//     - render an h3 that says: Highlights
//     - render highlights using map() inside a ul/li
//     - render a p tag with: GitHub: <githubUrl OR Not available>
function PortfolioSectionCard({
  title,
  description,
  skills,
  highlights,
  status,
  priority = "medium",
  githubUrl,
}: PortfolioSectionCardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>Description: {description}</p>
      <p>Status: {status}</p>
      <p>Priority: {priority}</p>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <h3>Highlights</h3>
      <ul>
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <p>GitHub: {githubUrl ?? "Not available"}</p>
    </section>
  )
}

// 13. Create a component called Day04FinalPractice
// 14. Inside it, render a main tag
// 15. Inside the main tag:
//     - render an h1 that says: Day 4 Final Practice
//     - render PortfolioSectionCard three times
// 16. First card:
//     - pass all props including priority and githubUrl
// 17. Second card:
//     - leave out githubUrl
// 18. Third card:
//     - leave out priority
// 19. Across the three cards, use different valid status values
function Day04FinalPractice() {
  return (
    <main>
      <h1>Day 4 Final Practice</h1>
      <PortfolioSectionCard
        title="Portfolio Website"
        description="A personal portfolio site used to showcase my work, projects, and experience."
        skills={["React", "TypeScript", "Vite", "Tailwind"]}
        highlights={[
          "Built reusable project card UI",
          "Rendered technologies from typed arrays",
          "Connected frontend structure to real portfolio patterns",
        ]}
        status="completed"
        priority="high"
        githubUrl="https://github.com/sudharsan-ak/personal-portfolio"
      />
      <PortfolioSectionCard
        title="Contact Form Practice"
        description="A practice card that leaves out GitHub URL to test default values."
        skills={["React", "TypeScript"]}
        highlights={[
          "Uses fallback GitHub text",
          "Practices typed array props",
        ]}
        status="in-progress"
        priority="low"
      />
      <PortfolioSectionCard
        title="A sample 3rd project card"
        description="A sample 3rd project description that leaves out priority to test default values"
        skills={["React", "TypeScript"]}
        highlights={[
          "Uses fallback priority value",
          "Practices typed array props",
        ]}
        status="planned"
      />
    </main>
  )
}
// 20. Export Day04FinalPractice as the default export
export default Day04FinalPractice