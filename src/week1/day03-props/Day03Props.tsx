import ReadOnlyPropsPractice from "./ReadOnlyPropsPractice"
import ReusablePropsPractice from "./ReusablePropsPractice"
import Day03FinalPractice from "./Day03FinalPractice"

// Props Exercise 1
// Topic: Props mental model + parent/child flow

// 1. Create a component called WelcomeMessage
// 2. WelcomeMessage should receive props
// 3. Inside WelcomeMessage, render an h2 that says:
//    Hello, <name>
// 4. Create a component called Day03Props
// 5. Inside Day03Props, render:
//    - an h1 that says: Day 3 - Props
//    - WelcomeMessage with name="Ashwin"
//    - WelcomeMessage with name="React learner"
// 6. Export Day03Props as default

function WelcomeMessage(props: { name: string }) {
  return (
    <div>
      <h2>Hello, {props.name}</h2>
    </div>
  )
}

// Props Exercise 2
// Topic: Passing string, number, and boolean props

// 1. Create a component called ProfileSummary
// 2. It should receive these props:
//    - fullName: string
//    - role: string
//    - yearsOfExperience: number
//    - isOpenToWork: boolean
// 3. Inside ProfileSummary, render a section
// 4. Inside the section, render:
//    - an h2 showing fullName
//    - a p showing Role: <role>
//    - a p showing Experience: <yearsOfExperience> years
//    - a p showing Status: Open to work if isOpenToWork is true, otherwise Not looking
// 5. Inside Day03Props, render ProfileSummary twice:
//    First:
//      fullName="Sudharsan Srinivasan"
//      role="Full Stack Software Engineer"
//      yearsOfExperience={6}
//      isOpenToWork={true}
//    Second:
//      fullName="React Practice User"
//      role="Frontend Learner"
//      yearsOfExperience={1}
//      isOpenToWork={false}
function ProfileSummary(props: { 
  fullName: string
  role: string
  yearsOfExperience: number
  isOpenToWork: boolean 
}) {
  return (
    <section>
      <h2>{props.fullName}</h2>
      <p>Role: {props.role}</p>
      <p>Experience: {props.yearsOfExperience} years</p>
      <p>Status: {props.isOpenToWork ? "Open to work" : "Not looking"}</p>
    </section>
  )
}

// Props Exercise 3
// Topic: Destructuring props
// 1. Create a component called LearningTopicCard
// 2. It should receive these props using destructuring:
//    - topicName: string
//    - dayNumber: number
//    - isCompleted: boolean
// 3. Render a section
// 4. Inside the section, render:
//    - an h2 showing topicName
//    - a p showing Day: <dayNumber>
//    - a p showing Status: Completed if isCompleted is true, otherwise In progress
// 5. Inside Day03Props, render LearningTopicCard twice:
//    First:
//      topicName="Components and JSX"
//      dayNumber={2}
//      isCompleted={true}
//    Second:
//      topicName="Props"
//      dayNumber={3}
//      isCompleted={false}
function LearningTopicCard({
  topicName,
  dayNumber,
  isCompleted,
}: {
  topicName: string
  dayNumber: number
  isCompleted: boolean
}) {
  return (
    <section>
      <h2>{topicName}</h2>
      <p>Day: {dayNumber}</p>
      <p>Status: {isCompleted ? "Completed" : "In progress"}</p>
    </section>
  )
}

function Day03Props() {
  return (
    <div>
      <h1>Day 3 - Props</h1>
      <WelcomeMessage name="Ashwin" />
      <WelcomeMessage name="React learner" />
      <ProfileSummary 
        fullName="Sudharsan Srinivasan"
        role="Full Stack Software Engineer"
        yearsOfExperience={6}
        isOpenToWork={true}
      />
      <ProfileSummary 
        fullName="React Practice User"
        role="Frontend Learner"
        yearsOfExperience={1}
        isOpenToWork={false} 
      />
      <LearningTopicCard
        topicName="Components and JSX"
        dayNumber={2}
        isCompleted={true}
      />
      <LearningTopicCard
        topicName="Props"
        dayNumber={3}
        isCompleted={false}
      />
      <ReadOnlyPropsPractice />
      <ReusablePropsPractice />
      <Day03FinalPractice />
    </div>
  )
}

export default Day03Props