// Topic 5 Exercise: Conditional rendering inside lists
//
// Goal:
// Practice rendering optional UI inside mapped object cards.
//
// 1. Create a type called PortfolioItem.
//    It should describe:
//    - id: number
//    - title: string
//    - category: "project" | "skill" | "experience"
//    - isFeatured: boolean
//    - description?: string
//    - githubUrl?: string
//    - tags: string[]
type PortfolioItem = {
  id: number
  title: string
  category: "project" | "skill" | "experience"
  isFeatured: boolean
  description?: string
  githubUrl?: string
  tags: string[]
}

// 2. Create a component called ConditionalListItemsPractice.
//
// 3. Inside the component, create an array called portfolioItems typed as PortfolioItem[].
//    Add these 3 objects:
//
//    id: 1
//    title: "Portfolio Website"
//    category: "project"
//    isFeatured: true
//    description: "React and TypeScript portfolio with project cards."
//    githubUrl: "https://github.com/sudharsan-ak/personal-portfolio"
//    tags: ["React", "TypeScript", "Vite"]
//
//    id: 2
//    title: "Projects API"
//    category: "project"
//    isFeatured: false
//    description should be omitted
//    githubUrl should be omitted
//    tags: ["Node.js", "AWS Lambda", "PostgreSQL"]
//
//    id: 3
//    title: "Frontend Skills"
//    category: "skill"
//    isFeatured: true
//    description: "Reusable UI skills used across portfolio sections."
//    githubUrl should be omitted
//    tags: ["Components", "Props", "State"]
//
// 4. Render a section with an h2 that says:
//    Conditional portfolio items
//
// 5. Map over portfolioItems and render one article per item.
//
// 6. Each article should:
//    - use item.id as the key
//    - use a conditional className:
//      "featured-card" if item.isFeatured is true
//      "normal-card" otherwise
//
// 7. Inside each article, render:
//    - h3 with item.title
//    - p with: Category: {item.category}
//
// 8. If item.isFeatured is true, show a paragraph that says:
//    Featured item
//
// 9. Render the description using a ternary:
//    - if item.description exists, show the description
//    - otherwise, show: No description available.
//
// 10. Render the GitHub URL using conditional rendering:
//    - if item.githubUrl exists, render an anchor tag with text: View GitHub
//    - otherwise, render a paragraph that says: GitHub link not available.
//
// 11. Render item.tags as a ul.
//    Each tag should be an li.
//    Use the tag itself as the key for now.
function ConditionalListItemsPractice() {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Portfolio Website",
      category: "project",
      isFeatured: true,
      description: "React and TypeScript portfolio with project cards.",
      githubUrl: "https://github.com/sudharsan-ak/personal-portfolio",
      tags: ["React", "TypeScript", "Vite"],
    }, 
    {
      id: 2,
      title: "Projects API",
      category: "project",
      isFeatured: false,
      tags: ["Node.js", "AWS Lambda", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Frontend Skills",
      category: "skill",
      isFeatured: true,
      description: "Reusable UI skills used across portfolio sections.",
      tags: ["Components", "Props", "State"],
    },
  ]

  return (
    <section>
      <h2>Topic 5 - Conditional rendering inside lists</h2>
      <h2>Conditional portfolio items</h2>
      {portfolioItems.map((item) => (
        <article key={item.id} className={item.isFeatured ? "featured-card" : "normal-card"}>
          <h3>{item.title}</h3>
          <p>Category: {item.category}</p>
          {item.isFeatured && <p>Featured item</p>}
          {item.description ? <p>{item.description}</p> : <p>No description available.</p>}
          {item.githubUrl ? (
            <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
              View GitHub
            </a>
          ) : (
            <p>GitHub link not available.</p>
          )}
          {item.tags.length > 0 && (
            <ul>
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </section>
  )
}
// 12. Export ConditionalListItemsPractice as default.
//
// 13. Import and render ConditionalListItemsPractice inside
//     Day07ConditionalListRendering.tsx, under ObjectListRenderingPractice.
export default ConditionalListItemsPractice