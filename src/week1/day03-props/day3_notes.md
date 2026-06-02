# Day 3 Notes - Props

## Day status

Day 3 is cleared.

Main goal: understand props as parent-to-child inputs, pass string/number/boolean values, receive props through the `props` object and destructuring, keep props read-only, and use props to build reusable components.

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

Here, `Day03Props` is the parent because it renders `WelcomeMessage`.

## 2. Passing basic prop values

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

Wrong if the component expects number/boolean values:

```tsx
yearsOfExperience="6"
isOpenToWork="true"
```

Those pass strings, not a number and boolean.

For boolean display:

```tsx
<p>Status: {isOpenToWork ? 'Open to work' : 'Not looking'}</p>
```

## 3. Receiving props

Two styles were practiced.

Props object style:

```tsx
function ProfileSummary(props: { fullName: string; role: string }) {
  return <h2>{props.fullName}</h2>
}
```

Destructuring style:

```tsx
function LearningTopicCard({
  topicName,
  dayNumber,
}: {
  topicName: string
  dayNumber: number
}) {
  return <h2>{topicName} - Day {dayNumber}</h2>
}
```

Comparison:

```text
props object style -> props.fullName
destructuring style -> fullName
```

Destructuring does not change how props work. It only unpacks values from the props object.

## 4. Props are read-only

Props should be treated as read-only input.

Bad habit:

```tsx
props.name = 'Someone else'
```

Better mental model:

```text
State = data a component owns and can update
Props = data a component receives and should not mutate
```

Important correction:

```text
The direct parent is the component that renders the child.
```

After splitting files:

```text
Day03Props
  -> ReadOnlyPropsPractice
      -> ReadOnlyPropsReminder
```

So `ReadOnlyPropsPractice` is the direct parent of `ReadOnlyPropsReminder`.

## 5. Reusable components with props

Props make components reusable.

```text
Same component + different props = reusable UI
```

Pattern:

```tsx
function MiniProjectCard({
  title,
  description,
  isFeatured,
}: {
  title: string
  description: string
  isFeatured: boolean
}) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Featured: {isFeatured ? 'Yes' : 'No'}</p>
    </section>
  )
}
```

This turns repeated hardcoded markup into one reusable UI structure.

## 6. File organization after Day 3

```text
src/week1/day03-props/
  Day03Props.tsx
  ReadOnlyPropsPractice.tsx
  ReusablePropsPractice.tsx
  Day03FinalPractice.tsx
```

Roles:

```text
Day03Props.tsx = main Day 3 composer + intro props examples
ReadOnlyPropsPractice.tsx = read-only props rule
ReusablePropsPractice.tsx = reusable component pattern
Day03FinalPractice.tsx = final mixed props checkpoint
```

Good rule:

```text
Keep intro examples together.
Split larger later exercises into focused files.
Do not over-split into tiny files.
```

## 7. Exercises completed

```text
props mental model
passing string, number, and boolean props
receiving props through props object
receiving props through destructuring
props are read-only
reusable components with props
final mixed exercise
```

Final mixed exercise:

```text
Day03FinalPractice
  -> FinalHeader
  -> PortfolioFeatureCard
  -> PropsRuleReminder
```

Final exercise status: cleared.

The final exercise intentionally showed both receiving styles:

```text
FinalHeader = props object style
PortfolioFeatureCard = destructuring style
PropsRuleReminder = destructuring style
```

## 8. Mistakes and corrections

| Issue | Correction |
|---|---|
| `props` implicitly had `any` type | Type props inline for now |
| Long inline prop type got hard to read | Break across lines or move to named type later |
| Long JSX component calls | Put each prop on its own line |
| Parent text became inaccurate after file split | Direct parent is the component that renders the child |
| Missing `/5` in difficulty output | Render exact requested text |

Main warning:

```text
A concept can be right but still fail the prompt.
Prompt alignment matters.
```

## 9. Portfolio mapping

Verified portfolio patterns:

```text
Projects.tsx -> project data rendered into repeated project UI
Skills.tsx -> skill categories rendered into repeated badges/tooltips
Experience.tsx -> experience data rendered into cards, technologies, and achievements
SmartAIAssistantButton.tsx -> direct props example receiving isOpen, setIsOpen, and optional theme
```

Mapping:

| Day 3 concept | Portfolio connection |
|---|---|
| Parent passes props | App/parent components pass values into children |
| Child receives props | Child components render/use passed values |
| Props are read-only | Child should not directly mutate parent-owned values |
| Reusable components | Repeated project cards, skills, technologies, achievements |
| Destructuring props | `SmartAIAssistantButton` receives/destructures props |

## 10. Interview-ready wording

```text
Props let me make components reusable by passing data from a parent component into a child component. The parent owns the value, and the child receives it as read-only input. In my portfolio, this pattern shows up in repeated UI like Projects, Skills, and Experience, where data is rendered into project cards, skill badges, technologies, and achievement lists. A direct props example is the AI assistant button, which receives values like isOpen, setIsOpen, and theme from its parent.
```

Short version:

```text
Props are inputs from parent to child. They help turn hardcoded components into reusable components.
```

## 11. What to remember before Day 4

```text
Props flow from parent to child.
The parent decides the prop values.
The child receives and uses the props.
Props should be treated as read-only.
Strings use quotes; numbers and booleans use curly braces.
You can receive props with props.name or destructuring.
Destructuring is cleaner for components with multiple props.
Same component + different props = reusable UI.
```

Next: Day 4 - TypeScript props with type and interface.
