# Day 3 Notes - Props

## Day status

Day 3 is cleared.

Main goal: understand props as parent-to-child inputs, pass string/number/boolean values, receive props through the `props` object and destructuring, keep props read-only, and use props to build reusable components.

---

## 1. Core mental model

Props are inputs passed from a parent component to a child component.

```text
Parent chooses the value
  -> passes it as a prop
    -> child receives it
      -> child renders or uses it
```

Important rules:

```text
Props flow downward.
The parent owns the value.
The child receives the value.
The child should not modify props.
Parent/child relationship is based on rendering, not file names.
```

Example:

```tsx
function WelcomeMessage(props: { name: string }) {
  return <h2>Hello, {props.name}</h2>
}

function Day03Props() {
  return <WelcomeMessage name="Ashwin" />
}
```

Here, `Day03Props` is the parent because it renders `WelcomeMessage`. `WelcomeMessage` is the child because it receives the `name` prop.

---

## 2. Passing basic prop values

Props can pass different value types.

```tsx
<ProfileSummary
  fullName="Sudharsan Srinivasan"
  role="Full Stack Software Engineer"
  yearsOfExperience={6}
  isOpenToWork={true}
/>
```

Rules:

```text
String props can use quotes.
Number props use curly braces.
Boolean props use curly braces.
```

Correct:

```tsx
yearsOfExperience={6}
isOpenToWork={true}
```

Wrong for real number/boolean values:

```tsx
yearsOfExperience="6"
isOpenToWork="true"
```

Those would pass strings instead of a number and boolean.

For boolean display, use a conditional expression:

```tsx
<p>Status: {isOpenToWork ? "Open to work" : "Not looking"}</p>
```

---

## 3. Receiving props: `props` object vs destructuring

Two styles were practiced.

### Props object style

```tsx
function ProfileSummary(props: {
  fullName: string
  role: string
  yearsOfExperience: number
  isOpenToWork: boolean
}) {
  return <h2>{props.fullName}</h2>
}
```

This is useful while learning because it makes the props object obvious.

### Destructuring style

```tsx
function LearningTopicCard({
  topicName,
  dayNumber,
  isCompleted,
}: {
  topicName: string
  dayNumber: number
  isCompleted: boolean
}) {
  return <h2>{topicName}</h2>
}
```

Destructuring does not change how props work. It just unpacks values from the props object so JSX is cleaner.

Good comparison:

```text
props object style -> props.fullName
Destructuring style -> fullName
```

---

## 4. Props are read-only

Props should be treated as read-only input.

Bad habit:

```tsx
props.name = "Someone else"
```

Better mental model:

```text
State = data a component owns and can update.
Props = data a component receives and should not mutate.
```

Exercise 4 used `ReadOnlyPropsPractice.tsx` and `ReadOnlyPropsReminder` to reinforce this rule.

Important correction learned:

```text
The direct parent is the component that renders the child.
```

After splitting files, the flow became:

```text
Day03Props
  -> ReadOnlyPropsPractice
      -> ReadOnlyPropsReminder
```

So `ReadOnlyPropsPractice` is the direct parent of `ReadOnlyPropsReminder`, even though `Day03Props` imports and renders `ReadOnlyPropsPractice`.

---

## 5. Reusable components with props

Props make components reusable.

```text
Same component + different props = reusable UI
```

Exercise 5 created `MiniProjectCard` in `ReusablePropsPractice.tsx` and reused it three times with different values.

Simplified pattern:

```tsx
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
```

This turns hardcoded repeated markup into one reusable UI structure.

---

## 6. File organization after Day 3

Day 3 started in one file, then was split once the file became too long.

Current Day 3 folder:

```text
src/week1/day03-props/
  Day03Props.tsx
  ReadOnlyPropsPractice.tsx
  ReusablePropsPractice.tsx
  Day03FinalPractice.tsx
```

Roles:

```text
Day03Props.tsx = main Day 3 composer + Exercises 1-3
ReadOnlyPropsPractice.tsx = read-only props rule
ReusablePropsPractice.tsx = reusable component pattern
Day03FinalPractice.tsx = final mixed props checkpoint
```

Good decision:

```text
Keep the first few intro examples together.
Split larger later exercises into focused files.
Do not over-split into useless tiny files.
```

---

## 7. Exercises completed

Completed:

```text
Exercise 1 - Props mental model + parent/child flow
Exercise 2 - Passing string, number, and boolean props
Exercise 3 - Destructuring props
Exercise 4 - Props are read-only
Exercise 5 - Reusable components with props
Final mixed exercise - Portfolio props checkpoint
```

Final mixed exercise components:

```text
Day03FinalPractice
  -> FinalHeader
  -> PortfolioFeatureCard
  -> PropsRuleReminder
```

Final exercise status: cleared.

The final exercise intentionally kept both prop receiving styles:

```text
FinalHeader = regular props object style
PortfolioFeatureCard = destructuring style
PropsRuleReminder = destructuring style
```

This was useful because it showed both valid patterns in one checkpoint.

---

## 8. Mistakes and corrections

| Issue | Correction |
|---|---|
| TypeScript warning: `props` implicitly has `any` type | Type props inline for now, e.g. `props: { name: string }` |
| Long inline prop type became hard to read | Break prop types across multiple lines |
| Very long JSX component calls | Put each prop on its own line |
| Refactoring too early would remove the first raw `props.name` example | Keep early props-object examples, then add new destructuring examples |
| Owner text became inaccurate after moving Exercise 4 to a new file | Direct parent is the component that renders the child |
| Final exercise prompt originally expected destructuring for `FinalHeader` | Prompt was updated to intentionally show regular props style there |
| Missing `/5` in difficulty output | Render `Difficulty: {difficultyLevel}/5` |

Main recurring warning:

```text
A concept can be right but still fail the prompt.
Prompt alignment matters.
```

---

## 9. Portfolio mapping

Props and reusable UI connect directly to the portfolio.

Verified portfolio examples:

```text
Projects.tsx -> projects array rendered into repeated project UI; nested highlights and technologies are mapped.
Skills.tsx -> skillCategories array rendered into categories; each category maps skills into repeated badges/tooltips.
Experience.tsx -> experiences array rendered into experience cards; technologies and achievements are mapped inside each card.
SmartAIAssistantButton.tsx -> direct props example receiving isOpen, setIsOpen, and optional theme.
```

How Day 3 maps:

| Day 3 concept | Portfolio connection |
|---|---|
| Parent passes props | App/parent components pass values into children |
| Child receives props | Child components render/use values passed from parent |
| Props are read-only | Child should not directly change parent-owned values |
| Reusable components | Repeated project cards, skills, technologies, achievements |
| Destructuring props | `SmartAIAssistantButton` receives/destructures props |

Core portfolio takeaway:

```text
Projects / Skills / Experience = reusable repeated UI from data
SmartAIAssistantButton = direct parent-to-child props example
```

---

## 10. Interview-ready wording

Use this:

```text
Props let me make components reusable by passing data from a parent component into a child component. The parent owns the value, and the child receives it as read-only input. In my portfolio, this pattern shows up in repeated UI like Projects, Skills, and Experience, where data is rendered into project cards, skill badges, technologies, and achievement lists. A direct props example is the AI assistant button, which receives values like isOpen, setIsOpen, and theme from its parent and uses them to control the assistant UI.
```

Short version:

```text
Props are inputs from parent to child. They help turn hardcoded components into reusable components.
```

---

## 11. What to remember before Day 4

```text
Props flow from parent to child.
The parent decides the prop values.
The child receives and uses the props.
Props should be treated as read-only.
Strings use quotes; numbers and booleans use curly braces.
You can receive props with `props.name` or destructuring.
Destructuring is cleaner for components with multiple props.
Same component + different props = reusable UI.
```

Next:

```text
Day 4 - TypeScript props with type and interface
```

Day 4 will clean up the inline prop typing used in Day 3 and introduce reusable prop types/interfaces.
