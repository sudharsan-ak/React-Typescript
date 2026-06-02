// Day 3 - Final Mixed Exercise
// Scenario: Portfolio props checkpoint
//
// This component is a final Day 3 checkpoint for React props.
// It combines parent-to-child data flow, inline prop typing, props without
// destructuring, destructured props, reusable components, boolean props,
// repeated component rendering with different values, and read-only prop usage.
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

export default Day03FinalPractice
