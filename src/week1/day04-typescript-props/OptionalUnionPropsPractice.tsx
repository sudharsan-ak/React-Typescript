// Day 4 - Topic 4 Exercise
// Goal: Practice optional props and union props.

// 1. Create a type called ProjectStatus
// 2. ProjectStatus should only allow:
//    "live"
//    "in-progress"
//    "planned"
type ProjectStatus = "live" | "in-progress" | "planned"

// 3. Create an interface called ProjectStatusCardProps
// 4. It should include:
//    title: string
//    status: ProjectStatus
//    category?: string
//    isFeatured?: boolean
interface ProjectStatusCardProps {
  title: string
  status: ProjectStatus
  category?: string
  isFeatured?: boolean
}

// 5. Create a component called ProjectStatusCard
// 6. It should receive props using destructuring
// 7. Type the destructured props using ProjectStatusCardProps
// 8. Inside the component, return a section
// 9. Inside the section:
//    - render an h2 with the title
//    - render a p tag with: Status: <status>
//    - render a p tag with: Category: <category OR General>
//    - render a p tag with: Featured: Yes OR Featured: No
// Another way to use optional inside return is this => {category && <p>Category Style 2: {category}</p>}

function ProjectStatusCard({
  title,
  status,
  category,
  isFeatured,
}: ProjectStatusCardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>Status: {status}</p>
      <p>Category: {category ?? "General"}</p>
      <p>Featured: {isFeatured ? "Yes" : "No"}</p>
    </section>
  )
}

// 10. Create a component called OptionalUnionPropsPractice
// 11. Inside OptionalUnionPropsPractice, render ProjectStatusCard three times
// 12. Use all three valid status values across the three cards
// 13. For one card, pass both optional props
// 14. For one card, leave out category
// 15. For one card, leave out isFeatured

function OptionalUnionPropsPractice() {
  return (
    <div>
      <ProjectStatusCard
        title="Card 1 with Live Status and both optionals props"
        status="live"
        category="2 Props Special Category"
        isFeatured={true}
      />
      <ProjectStatusCard
        title="Card 2 with In progress Status and only category"
        status="in-progress"
        category="1 Prop Special Category"
      />
      <ProjectStatusCard
        title="Card 3 with Planned Status and only featured"
        status="planned"
        isFeatured={false}
      />
    </div>
  )
}
// 16. Export OptionalUnionPropsPractice as the default export
export default OptionalUnionPropsPractice