// Day 4 - Topic 5 Exercise
// Goal: Build a portfolio-style reusable typed card.

// Portfolio mapping:
// - In the real portfolio, Projects.tsx stores project objects in a projects array.
// - Each project has fields like title, tagline, description, technologies, highlights, imagePath, imageAlt, and githubUrl.
// - Projects.tsx maps over projects to render repeated project UI.
// - This exercise practices typing that kind of project/card shape more explicitly.

// 1. Create a type called PortfolioProjectStatus
// 2. It should only allow:
//    "live"
//    "in-progress"
//    "planned"
type PortfolioProjectStatus = "live" | "in-progress" | "planned"

// 3. Create a type called PortfolioTypedCardProps
// 4. It should include:
//    title: string
//    tagline: string
//    description: string
//    technologies: string[]
//    highlights: string[]
//    status?: PortfolioProjectStatus
//    githubUrl?: string
type PortfolioTypedCardProps = {
  title: string
  tagline: string
  description: string
  technologies: string[]
  highlights: string[]
  status?: PortfolioProjectStatus
  githubUrl?: string
}

// 5. Create a component called PortfolioTypedCard
// 6. It should receive props using destructuring
// 7. Type the destructured props using PortfolioTypedCardProps
// 8. Give status a default value of "planned"
// 9. Inside the component, return a section
// 10. Inside the section:
//    - render an h2 with the title
//    - render a p tag with: Tagline: <tagline>
//    - render a p tag with: Description: <description>
//    - render a p tag with: Status: <status>
//    - render an h3 that says: Technologies
//    - render technologies using map()
//    - render an h3 that says: Highlights
//    - render highlights using map()
//    - render a p tag with: GitHub: <githubUrl OR Not available>
function PortfolioTypedCard({
  title,
  tagline,
  description,
  technologies,
  highlights,
  status = "planned",
  githubUrl,
}: PortfolioTypedCardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>Tagline: {tagline}</p>
      <p>Description: {description}</p>
      <p>Status: {status}</p>
      <h3>Technologies</h3>
      <ul>
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
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

// 11. Create a component called PortfolioTypedCardPractice
// 12. Inside it, render PortfolioTypedCard twice
// 13. First card should pass status and githubUrl
// 14. Second card should leave out status and githubUrl
function PortfolioTypedCardPractice() {
  return (
    <div>
      <PortfolioTypedCard
        title="Portfolio Website"
        tagline="React + TypeScript portfolio with project and contact sections"
        description="A personal portfolio site used to showcase my work, projects, and experience."
        technologies={["React", "TypeScript", "Vite", "Tailwind"]}
        highlights={[
          "Built reusable project card UI",
          "Rendered technologies from typed arrays",
          "Connected frontend structure to real portfolio patterns",
        ]}
        status="live"
        githubUrl="https://github.com/sudharsan-ak/personal-portfolio"
      />

      <PortfolioTypedCard
        title="Contact Form Practice"
        tagline="Typed reusable card without optional props"
        description="A practice card that leaves out optional status and GitHub URL to test default values."
        technologies={["React", "TypeScript"]}
        highlights={[
          "Uses default status value",
          "Uses fallback GitHub text",
          "Practices typed array props",
        ]}
      />
    </div>
  )
}    

// 15. Export PortfolioTypedCardPractice as the default export
export default PortfolioTypedCardPractice