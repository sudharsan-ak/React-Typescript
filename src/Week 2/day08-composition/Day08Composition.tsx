import Day08FinalPractice from './Day08FinalPractice'

// Day 8 - Topic 1 Exercise: Component composition basics

// Goal:
// Practice splitting one portfolio-style screen into smaller focused components.

// 1. Create a main component called Day08Composition.

// 2. Inside Day08Composition, render a main tag.

// 3. Inside the main tag, render these child components:
//    - PortfolioIntro
//    - FeaturedWorkPreview
//    - LearningFocusPreview
function Day08Composition() {
  return (
    <main>
      <PortfolioIntro />
      <FeaturedWorkPreview />
      <LearningFocusPreview />
      <Day08FinalPractice />
    </main>
  )
}

// 4. Create a component called PortfolioIntro.
//    It should render a section with:
//    - an h1 with your name
//    - a p tag with your role
//    - a p tag with your main stack
function PortfolioIntro() {
  return (
    <section>
      <h1>Sudharsan Srinivasan</h1>
      <p>Senior Software Engineer</p>
      <p>React, TypeScript, Node.js</p>
    </section>
  )
}

// 5. Create a component called FeaturedWorkPreview.
//    It should render a section with:
//    - an h2 that says Featured work
//    - two article tags
//    - each article should have an h3 and a p
function FeaturedWorkPreview() {
  return (
    // <section>
    //   <h2>Featured work</h2>
    //   {/* <article>
    //     <h3>Project 1 - Personal Portfolio Website</h3>
    //     <p>Personal website showcasing my work, projects, and experience.</p>
    //   </article>
    //   <article>
    //     <h3>Project 2 - LinkedIn Recruiter Finder</h3>
    //     <p>Chrome extension to find recruiters on Linkedin from companies.</p>
    //   </article> */}
    //   <WorkCard title="Project 1 - Personal Portfolio Website" description="Personal website showcasing my work, projects, and experience." />
    //   <WorkCard title="Project 2 - LinkedIn Recruiter Finder" description="Chrome extension to find recruiters on Linkedin from companies."/>  
    // </section>
    <SectionWrapper title="Featured work">
      <WorkCard title="Project 1 - Personal Portfolio Website" description="Personal website showcasing my work, projects, and experience." />
      <WorkCard title="Project 2 - LinkedIn Recruiter Finder" description="Chrome extension to find recruiters on Linkedin from companies."/>  
    </SectionWrapper>
  )
}

// 6. Create a component called LearningFocusPreview.
//    It should render a section with:
//    - an h2 that says Current learning focus
//    - a ul
//    - three li items:
//      React component composition
//      Reusable components
//      Cleaner portfolio structure
function LearningFocusPreview() {
  return (
    // <section>
    //   <h2>Current learning focus</h2>
    //   <ul>
    //     <li>React component composition</li>
    //     <li>Reusable components</li>
    //     <li>Cleaner portfolio structure</li>
    //   </ul>
    // </section>
    <SectionWrapper title="Current learning focus">
      <ul>
        <li>React component composition</li>
        <li>Reusable components</li>
        <li>Cleaner portfolio structure</li>
      </ul>
    </SectionWrapper>
  )
}

// ---------------------------------------------------------------------
// Topic 2 Exercise: Reusable child component with props

// Goal:
// Refactor repeated project article JSX into a reusable component.

// 1. Create a type called WorkCardProps.
//    It should describe the props needed by one reusable work card:
//    - title
//    - description
type WorkCardProps = {
  title: string
  description: string
}

// 2. Create a reusable component called WorkCard.
//    It should receive title and description as props.
//    It should render:
//    - an article
//    - an h3 showing the title
//    - a p showing the description

// 3. Update FeaturedWorkPreview.
//    Instead of manually writing two article tags inside it,
//    render WorkCard twice with different prop values.

// 4. Keep PortfolioIntro and LearningFocusPreview as they are.

// 5. Confirm the browser output still shows:
//    - your intro section
//    - Featured work
//    - two project cards
//    - Current learning focus list

// Hint:
// The parent component should pass the data.
// The reusable child component should only render one card.
function WorkCard({ title, description }: WorkCardProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  ) 
}

// ---------------------------------------------------------------------
// Day 8 - Topic 3 Exercise: Reusable wrapper component with children

// Goal:
// Create a reusable section wrapper where the outer layout is fixed,
// but the inside content is flexible.

// 1. Import ReactNode from react as a type import.
import type { ReactNode } from 'react' // import usually stay at the top but for learning, let it be here now.

// 2. Create a type called SectionWrapperProps.
//    It should have:
//    - title as a string
//    - children as ReactNode
type SectionWrapperProps = {
  title: string
  children: ReactNode
}

// 3. Create a component called SectionWrapper.
//    It should receive title and children.
//    It should render:
//    - a section
//    - an h2 showing the title
//    - the children below the h2

// 4. Refactor FeaturedWorkPreview.
//    Instead of manually rendering its own section and h2,
//    wrap the two WorkCard components with:
//    <SectionWrapper title="Featured work">
//      ...
//    </SectionWrapper>

// 5. Refactor LearningFocusPreview.
//    Instead of manually rendering its own section and h2,
//    wrap the ul with:
//    <SectionWrapper title="Current learning focus">
//      ...
//    </SectionWrapper>

// 6. Keep PortfolioIntro as its own normal section.

// 7. Confirm the browser output stays the same.
function SectionWrapper({ title, children }: SectionWrapperProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

// Export Day08Composition as the default export.
// Import and render Day08Composition in App.tsx.
export default Day08Composition