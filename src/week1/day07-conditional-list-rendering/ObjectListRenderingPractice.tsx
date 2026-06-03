// Topic 4 Exercise: Arrays of objects, nested lists, and filter before map
//
// Goal:
// Practice rendering object-shaped data, nested arrays, stable keys,
// and filtering before mapping.
//
// 1. Create a type called PortfolioProject.
//    It should describe:
//    - id: number
//    - title: string
//    - category: "frontend" | "backend" | "automation"
//    - isFeatured: boolean
//    - technologies: string[]
type PortfolioProject = {
  id: number
  title: string
  category: "frontend" | "backend" | "automation"
  isFeatured: boolean
  technologies: string[]
}

//
// 2. Create a component called ObjectListRenderingPractice.
//
// 3. Inside the component, create a projects array typed as PortfolioProject[].
//    Add 3 project objects:
//    - id: 1, title: "Portfolio Website", category: "frontend",
//      isFeatured: true, technologies: ["React", "TypeScript", "Vite"]
//    - id: 2, title: "Projects API", category: "backend",
//      isFeatured: false, technologies: ["Node.js", "AWS Lambda", "PostgreSQL"]
//    - id: 3, title: "JobFlow Automator", category: "automation",
//      isFeatured: true, technologies: ["TypeScript", "Node.js", "Playwright"]
//
// 4. Create a variable called featuredProjects.
//    It should use filter() to keep only projects where isFeatured is true.
//
// 5. Render a section with an h2 that says:
//    Featured projects
//
// 6. If featuredProjects is empty, show a paragraph that says:
//    No featured projects yet.
//
// 7. Otherwise, map over featuredProjects and render an article for each project.
//    Each article should include:
//    - key using project.id
//    - h3 with project.title
//    - p with: Category: {project.category}
//    - ul that maps over project.technologies
//    - each technology should render as an li
//    - use the technology itself as the key for now
function ObjectListRenderingPractice() {
  const projects: PortfolioProject[] = [
    {
      id: 1,
      title: "Portfolio Website",
      category: "frontend",
      isFeatured: true,
      technologies: ["React", "TypeScript", "Vite"],
    },
    {
      id: 2,
      title: "Projects API",
      category: "backend",
      isFeatured: false,
      technologies: ["Node.js", "AWS Lambda", "PostgreSQL"],
    },
    {
      id: 3,
      title: "JobFlow Automator",
      category: "automation",
      isFeatured: true,
      technologies: ["TypeScript", "Node.js", "Playwright"],
    }
  ]

  const featuredProjects = projects.filter((project) => project.isFeatured)

  return (
    <section>
      <h2>Topic 4 - Object List Rendering</h2>
      <h2>Featured projects</h2>
      {featuredProjects.length === 0 ? (
        <p>No featured projects yet.</p>
      ) : (
        featuredProjects.map((project) => (
          <article key={project.id}>
            <h3>{project.title}</h3>
            <p>Category: {project.category}</p>
            <ul>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))
        )}
    </section>
  )   
}

// 8. Export ObjectListRenderingPractice as default.
//
// 9. Import and render ObjectListRenderingPractice inside
//    Day07ConditionalListRendering.tsx, under ListRenderingPractice.
export default ObjectListRenderingPractice