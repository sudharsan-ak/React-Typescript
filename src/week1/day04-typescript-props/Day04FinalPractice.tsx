// Day 4 - Final Mixed Exercise
// Scenario: Typed portfolio section summary
//
// This component is a final Day 4 checkpoint for TypeScript props.
// It combines union types, an interface for component props, optional props,
// array props rendered with map(), destructured props, default prop values,
// reusable card components, and fallback rendering for missing values.
type SectionStatus = "completed" | "in-progress" | "planned"

type SectionPriority = "high" | "medium" | "low"

interface PortfolioSectionCardProps {
  title: string
  description: string
  skills: string[]
  highlights: string[]
  status: SectionStatus
  priority?: SectionPriority
  githubUrl?: string
}

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

export default Day04FinalPractice