// Props Exercise 4
// Topic: Props are read-only

// 1. Create a component called ReadOnlyPropsReminder
// 2. It should receive these props using destructuring:
//    - componentName: string
//    - owner: string
//    - reminder: string
// 3. Render a section
// 4. Inside the section, render:
//    - an h2 showing componentName
//    - a p showing Owner: <owner>
//    - a p showing Reminder: <reminder>
// 5. Do not modify/reassign any prop value inside the child component
// 6. Create a component called ReadOnlyPropsPractice
// 7. Inside ReadOnlyPropsPractice, render ReadOnlyPropsReminder twice:
//    First:
//      componentName="ProfileSummary"
//      owner="Day03Props parent component"
//      reminder="The parent passes fullName, role, experience, and open-to-work status."
//    Second:
//      componentName="LearningTopicCard"
//      owner="Day03Props parent component"
//      reminder="The child receives topicName, dayNumber, and isCompleted, but does not change them."
// 8. Export ReadOnlyPropsPractice as default

function ReadOnlyPropsReminder({
  componentName,
  owner,
  reminder,
}: {
  componentName: string
  owner: string
  reminder: string
}) {
  return (
    <section>
      <h2>{componentName}</h2>
      <p>Owner: {owner}</p>
      <p>Reminder: {reminder}</p>
    </section>
  )
}

function ReadOnlyPropsPractice() {
  return (
    <div>
      <ReadOnlyPropsReminder
        componentName="ProfileSummary"
        owner="ReadOnlyPropsPractice parent component"
        reminder="The parent passes fullName, role, experience, and open-to-work status."
      />
      <ReadOnlyPropsReminder
        componentName="LearningTopicCard"
        owner="ReadOnlyPropsPractice parent component"
        reminder="The child receives topicName, dayNumber, and isCompleted, but does not change them."
      />
    </div>
  )
}

export default ReadOnlyPropsPractice