import OptionalUnionPropsPractice from "./OptionalUnionPropsPractice"
import PortfolioTypedCardPractice from "./PortfolioTypedCardPractice"
import Day04FinalPractice from "./Day04FinalPractice"

// Day 4 - Topic 1 Exercise
// Goal: Practice inline prop typing first, so we can see why named prop types will be cleaner later.

// 1. Create a component called InlineProfileCard
// 2. It should receive props using the regular props object style
// 3. Type the props inline with:
//    fullName: string
//    role: string
//    yearsOfExperience: number
//    isOpenToWork: boolean
// 4. Inside the component, return a section
// 5. Inside the section:
//    - render an h2 with the full name
//    - render a p tag with: Role: <role>
//    - render a p tag with: Experience: <yearsOfExperience> years
//    - render a p tag with: Status: Open to work OR Status: Not looking
// 6. Create the main Day04TypeScriptProps component
// 7. Inside Day04TypeScriptProps, render InlineProfileCard twice with different prop values
// 8. Export Day04TypeScriptProps as the default export

// Day 4 - Topic 2 Exercise
// Goal: Move messy inline prop typing into a reusable named type.

// 1. Create a type called ProfileCardProps
// 2. The type should include:
//    fullName: string
//    role: string
//    yearsOfExperience: number
//    isOpenToWork: boolean
// 3. Create a component called ProfileCard
// 4. ProfileCard should receive props using destructuring
// 5. Type the destructured props using ProfileCardProps
// 6. Inside the component, return a section
// 7. Inside the section:
//    - render an h2 with fullName
//    - render a p tag with: Role: <role>
//    - render a p tag with: Experience: <yearsOfExperience> years
//    - render a p tag with: Status: Open to work OR Status: Not looking
// 8. In Day04TypeScriptProps, keep your old InlineProfileCard examples
// 9. Below them, render ProfileCard twice with different prop values
// 10. Make one ProfileCard open to work and one not looking

// Day 4 - Topic 3 Exercise
// Goal: Practice typing React props with interface.

// Placement:
// - Add this exercise comment block before the type/interface section.
// - Add the interface below ProfileCardProps.
// - Add the PortfolioProjectCard component below the existing child components.
// - Render PortfolioProjectCard examples inside Day04TypeScriptProps below the ProfileCard examples.

// 1. Create an interface called PortfolioProjectCardProps
// 2. It should include:
//    title: string
//    description: string
//    technologies: string[]
//    isFeatured: boolean
// 3. Create a component called PortfolioProjectCard
// 4. It should receive props using destructuring
// 5. Type the destructured props using PortfolioProjectCardProps
// 6. Inside the component, return a section
// 7. Inside the section:
//    - render an h2 with the title
//    - render a p tag with: Description: <description>
//    - render a p tag with: Technologies: <technologies joined by comma>
//    - render a p tag with: Featured: Yes OR Featured: No
// 8. In Day04TypeScriptProps, render PortfolioProjectCard twice
// 9. Use different project data for each card
// 10. Make one project featured and one not featured

type ProfileCardProps = {
  fullName: string
  role: string
  yearsOfExperience: number
  isOpenToWork: boolean
}

interface PortfolioProjectCardProps {
  title: string
  description: string
  technologies: string[]
  isFeatured: boolean
}

function ProfileCard({
  fullName,
  role,
  yearsOfExperience,
  isOpenToWork,
}: ProfileCardProps) {
  return (
    <section>
      <h2>Profile Card with Type</h2>
      <h2>{fullName}</h2>
      <p>Role: {role}</p>
      <p>Experience: {yearsOfExperience} years</p>
      <p>Status: {isOpenToWork ? "Open to work" : "Not looking"}</p>
    </section>
  )
}

function InlineProfileCard(props: {
  fullName: string
  role: string
  yearsOfExperience: number
  isOpenToWork: boolean
}) {
  return (
    <section>
      <h2>Inline Profile Card</h2>
      <h2>{props.fullName}</h2>
      <p>Role: {props.role}</p>
      <p>Experience: {props.yearsOfExperience} years</p>
      <p>Status: {props.isOpenToWork ? "Open to work" : "Not looking"}</p>
      <hr />
    </section>
  )
}

function PortfolioProjectCard({
  title,
  description,
  technologies,
  isFeatured,
}: PortfolioProjectCardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>Description: {description}</p>
      <p>Technologies: {technologies.join(", ")}</p>
      <p>Featured: {isFeatured ? "Yes" : "No"}</p>
    </section>
  )
}

function Day04TypeScriptProps() {
  return (
    <div>
      <InlineProfileCard
        fullName="Sudharsan Srinivasan"
        role="Senior Software Engineer"
        yearsOfExperience={6}
        isOpenToWork={true}
      />
      <InlineProfileCard
        fullName="John Doe"
        role="Senior Software Engineer"
        yearsOfExperience={7}
        isOpenToWork={false}
      />
      <ProfileCard
        fullName="Sudharsan S"
        role="Senior Software Engineer"
        yearsOfExperience={6}
        isOpenToWork={true}
      />
      <ProfileCard
        fullName="John Dutton"
        role="Senior Software Engineer"
        yearsOfExperience={7}
        isOpenToWork={false}
      />
      <PortfolioProjectCard
        title="Portfolio project card with Interface - Example 1"
        description="This card describes technologies with featured set as true"
        technologies={["JavaScript", "TypeScript", "React", "Node.js"]}
        isFeatured={true}
      />
      <PortfolioProjectCard
        title="Portfolio project card with Interface - Example 2"
        description="This card describes technologies with featured set as false"
        technologies={["Django", "Docker", "Kubernetes", "C#"]}
        isFeatured={false}
      />
      <hr />
      <OptionalUnionPropsPractice />
      <hr />
      <PortfolioTypedCardPractice />
      <hr />
      <Day04FinalPractice />
    </div>
  )
}

export default Day04TypeScriptProps