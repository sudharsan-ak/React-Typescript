// Day 3 - Final Mixed Exercise
// Scenario: Portfolio props checkpoint

// 1. Create a component called FinalHeader
// It should receive props without using destructuring:
// - title: string
// - subtitle: string
//
// Render a section with:
// - an h2 showing title
// - a p showing subtitle
function FinalHeader(props: { 
  title: string
  subtitle: string
}) {
  return (
    <section>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </section>
  )
}

// 2. Create a component called PortfolioFeatureCard
// It should receive props using destructuring:
// - featureName: string
// - description: string
// - techFocus: string
// - difficultyLevel: number
// - isPortfolioRelevant: boolean
//
// Render a section with:
// - an h2 showing featureName
// - a p showing Description: <description>
// - a p showing Tech Focus: <techFocus>
// - a p showing Difficulty: <difficultyLevel>/5
// - a p showing Portfolio Relevant: Yes if true, otherwise No
function PortfolioFeatureCard({
  featureName,
  description,
  techFocus,
  difficultyLevel,
  isPortfolioRelevant,
}: {
  featureName: string
  description: string
  techFocus: string
  difficultyLevel: number
  isPortfolioRelevant: boolean
}) {
  return (
    <section>
      <h2>{featureName}</h2>
      <p>Description: {description}</p>
      <p>Tech Focus: {techFocus}</p>
      <p>Difficulty: {difficultyLevel}/5</p>
      <p>Portfolio Relevant: {isPortfolioRelevant ? "Yes" : "No"}</p>
    </section>
  )
}

// 3. Create a component called PropsRuleReminder
// It should receive props using destructuring:
// - ruleName: string
// - explanation: string
//
// Render a section with:
// - an h2 showing ruleName
// - a p showing explanation
//
// Important: do not modify or reassign any prop value inside this component.
function PropsRuleReminder({
  ruleName,
  explanation,
}: {
  ruleName: string
  explanation: string
}) {
  return (
    <section>
      <h2>{ruleName}</h2>
      <p>{explanation}</p>
    </section>
  )
}

// 4. Create a component called Day03FinalPractice
// Inside it, render:
// - FinalHeader once
// - PortfolioFeatureCard three times with different values
// - PropsRuleReminder twice

// 5. Use this data:
//
// FinalHeader:
// title="Day 3 final checkpoint"
// subtitle="I can pass data from parent components to child components using props."
//
// First PortfolioFeatureCard:
// featureName="AI Assistant Toggle"
// description="A parent component can control whether the assistant is open and pass that value to a child."
// techFocus="Props, state later, conditional rendering later"
// difficultyLevel={4}
// isPortfolioRelevant={true}
//
// Second PortfolioFeatureCard:
// featureName="Project Cards"
// description="The same UI structure can show different projects when different values are passed in."
// techFocus="Reusable components and props"
// difficultyLevel={3}
// isPortfolioRelevant={true}
//
// Third PortfolioFeatureCard:
// featureName="Practice Greeting"
// description="A small learning example for passing a name into a child component."
// techFocus="Basic props"
// difficultyLevel={1}
// isPortfolioRelevant={false}
//
// First PropsRuleReminder:
// ruleName="Parent owns the value"
// explanation="The parent decides what prop values are passed into the child."
//
// Second PropsRuleReminder:
// ruleName="Child treats props as read-only"
// explanation="The child can display props, but it should not modify them."
function Day03FinalPractice() {
  return (
    <div>
      <FinalHeader 
        title="Day 3 final checkpoint"
        subtitle="I can pass data from parent components to child components using props."
      />
      <PortfolioFeatureCard
        featureName="AI Assistant Toggle"
        description="A parent component can control whether the assistant is open and pass that value to a child."
        techFocus="Props, state later, conditional rendering later"
        difficultyLevel={4}
        isPortfolioRelevant={true}
      />
      <PortfolioFeatureCard
        featureName="Project Cards"
        description="The same UI structure can show different projects when different values are passed in."
        techFocus="Reusable components and props"
        difficultyLevel={3}
        isPortfolioRelevant={true}
      />
      <PortfolioFeatureCard
        featureName="Practice Greeting"
        description="A small learning example for passing a name into a child component."
        techFocus="Basic props"
        difficultyLevel={1}
        isPortfolioRelevant={false}
      />
      <PropsRuleReminder 
        ruleName="Parent owns the value"
        explanation="The parent decides what prop values are passed into the child."
      />
      <PropsRuleReminder 
        ruleName="Child treats props as read-only"
        explanation="The child can display props, but it should not modify them."
      />
    </div>
  )
}

// 6. Export Day03FinalPractice as default
export default Day03FinalPractice