// Day 3 - Props Exercise 5
// Topic: Reusable components with props

// 1. Create a component called MiniProjectCard
// 2. It should receive these props using destructuring:
//    - title: string
//    - description: string
//    - techStack: string
//    - isFeatured: boolean
// 3. Render a section
// 4. Inside the section, render:
//    - an h2 showing title
//    - a p showing Description: <description>
//    - a p showing Tech Stack: <techStack>
//    - a p showing Featured: Yes if isFeatured is true, otherwise No
// 5. Create a component called ReusablePropsPractice
// 6. Inside ReusablePropsPractice, render:
//    - an h2 that says: Reusable project cards
//    - MiniProjectCard three times with different values
// 7. Use these three project examples:
//
//    First:
//      title="Portfolio Website"
//      description="Personal portfolio built with React and TypeScript."
//      techStack="React, TypeScript, Supabase"
//      isFeatured={true}
//
//    Second:
//      title="Jobflow Automator"
//      description="Automation project for tracking job applications."
//      techStack="Node.js, TypeScript, Gmail API"
//      isFeatured={true}
//
//    Third:
//      title="React Props Practice"
//      description="Small practice component for learning reusable UI."
//      techStack="React, TypeScript, Vite"
//      isFeatured={false}
//
// 8. Export ReusablePropsPractice as default
function MiniProjectCard({
  title,
  description,
  techStack,
  isFeatured,
}: {
  title: string
  description: string
  techStack: string
  isFeatured: boolean
}) {
  return (
    <section>
      <h2>{title}</h2>
      <p>Description: {description}</p>
      <p>Tech Stack: {techStack}</p>
      <p>Featured: {isFeatured ? "Yes" : "No"}</p>
    </section>
  )
}

function ReusablePropsPractice() {
  return (
    <div>
      <h2>Reusable project cards</h2>
      <MiniProjectCard
        title="Portfolio Website"
        description="Personal portfolio built with React and TypeScript."
        techStack="React, TypeScript, Supabase"
        isFeatured={true}
      />
      <MiniProjectCard
        title="Jobflow Automator"
        description="Automation project for tracking job applications."
        techStack="Node.js, TypeScript, Gmail API"
        isFeatured={true}
      />
      <MiniProjectCard
        title="React Props Practice"
        description="Small practice component for learning reusable UI."
        techStack="React, TypeScript, Vite"
        isFeatured={false}
      />
    </div>
  )
}

export default ReusablePropsPractice