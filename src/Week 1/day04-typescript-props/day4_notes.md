# Day 4 Notes - TypeScript Props with `type` and `interface`

## Day status

Day 4 is cleared.

Main goal: clean up inline prop typing by using named `type` and `interface` definitions, then apply optional props, union props, default values, array props, and reusable portfolio-style typed components.

## 1. Why inline prop typing gets messy

Inline prop typing is valid, but it gets noisy when a component has several props.

```tsx
function InlineProfileCard(props: {
  fullName: string
  role: string
  yearsOfExperience: number
  isOpenToWork: boolean
}) {
  return <h2>{props.fullName}</h2>
}
```

Better rule:

```text
Tiny one-off props -> inline typing is okay while learning.
Reusable component or 3+ props -> use a named type/interface.
```

Important mental model:

```text
type/interface = describes the prop shape
parent JSX = provides the actual values
component = receives and renders the values
```

A type/interface does not create actual data.

## 2. Named prop types using `type`

A `type` can describe the shape of a component's props.

```tsx
type ProfileCardProps = {
  fullName: string
  role: string
  yearsOfExperience: number
  isOpenToWork: boolean
}
```

Use it in the component:

```tsx
function ProfileCard({ fullName, role }: ProfileCardProps) {
  return <h2>{fullName}</h2>
}
```

This separates the prop contract from rendering logic.

Naming pattern:

```text
ComponentNameProps
```

## 3. Props with `interface`

An `interface` can also describe object-shaped props.

```tsx
interface PortfolioProjectCardProps {
  title: string
  description: string
  technologies: string[]
  isFeatured: boolean
}
```

Beginner rule:

```text
Object-shaped props -> type or interface
Union values -> type
Consistency matters more than arguing type vs interface
```

Example:

```tsx
type Status = 'live' | 'in-progress' | 'planned'

interface StatusCardProps {
  title: string
  status: Status
}
```

## 4. Optional props

Optional props use `?`.

```tsx
interface ProjectStatusCardProps {
  title: string
  category?: string
  isFeatured?: boolean
}
```

Meaning:

```text
category can be passed or omitted
isFeatured can be passed or omitted
```

When a prop is optional, the component must handle the missing case.

Fallback inside JSX:

```tsx
<p>Category: {category ?? 'General'}</p>
```

Default value during destructuring:

```tsx
function ProjectStatusCard({
  category = 'General',
  isFeatured = false,
}: ProjectStatusCardProps) {
  // safe to use category and isFeatured
}
```

Important correction:

```text
A union type limits allowed values.
A default value is assigned in component logic.
The type itself does not create a default.
```

## 5. Union props

Union types limit a value to a fixed list of allowed options.

```tsx
type ProjectStatus = 'live' | 'in-progress' | 'planned'
```

Using a union is better than `status: string` when only fixed values are valid.

Union props are useful for:

```text
status
variant
theme
priority
size
selected tab
```

## 6. Array props and `.map()`

Array props were practiced with values like:

```tsx
technologies: string[]
highlights: string[]
skills: string[]
```

Rendering arrays:

```tsx
<ul>
  {skills.map((skill) => (
    <li key={skill}>{skill}</li>
  ))}
</ul>
```

Meaning:

```text
map loops through each item
one JSX element is returned per item
key gives React a stable identity for that item
key does not display in the browser
```

Better semantic HTML:

```text
Use ul/li for real lists instead of multiple p tags.
```

## 7. File organization after Day 4

```text
src/week1/day04-typescript-props/
  Day04TypeScriptProps.tsx
  OptionalUnionPropsPractice.tsx
  PortfolioTypedCardPractice.tsx
  Day04FinalPractice.tsx
```

Roles:

```text
Day04TypeScriptProps.tsx = main Day 4 composer
OptionalUnionPropsPractice.tsx = optional props + union props practice
PortfolioTypedCardPractice.tsx = portfolio-style typed reusable card practice
Day04FinalPractice.tsx = final mixed Day 4 checkpoint
```

Good structure:

```text
Types/interfaces first.
Child components next.
Main practice component after that.
export default at the bottom.
```

## 8. Exercises completed

```text
inline prop typing
named prop types using type
props using interface
beginner type vs interface
optional props
union props
default values
array props
map rendering
portfolio-style typed reusable card
final mixed exercise
```

Final exercise used:

```text
SectionStatus union type
SectionPriority union type
PortfolioSectionCardProps interface
optional priority
optional githubUrl
default priority = medium
githubUrl fallback = Not available
skills and highlights arrays rendered with ul/li + map
three reusable typed cards
```

Final exercise status: cleared.

## 9. Mistakes and corrections

| Issue | Correction |
|---|---|
| Inline prop typing got bulky | Move larger prop shapes into named `type` or `interface` |
| Confused union type with default value | Union limits values; default is set in component logic |
| Missing exact labels like `Status:` | Match requested output when prompt specifies text |
| Used custom label instead of requested label | Follow prompt wording in exercises |
| Asked for placement but got full solution | Give placement guidance, not solved code, unless asked |
| Used raw GitHub links | Use normal GitHub file pages in user-facing responses |
| Used `p` tags for repeated list data | Use `ul/li` for real lists |

Recurring reminder:

```text
A concept can be correct but still fail the prompt if rendered text does not match.
```

## 10. Portfolio mapping

Day 4 connects directly to the real portfolio.

`App.tsx` uses a limited theme union:

```tsx
useState<'light' | 'dark' | 'nightowl' | 'system'>('light')
```

This prevents random invalid theme values.

`SmartAIAssistantButton.tsx` has a props interface with required and optional props:

```tsx
interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  theme?: 'light' | 'dark' | 'nightowl' | 'system'
}
```

Mapping:

```text
interface Props -> typed prop shape
theme? -> optional prop
theme union -> only known theme values allowed
```

`Projects.tsx` stores project data with arrays like technologies and highlights, then maps them into repeated UI. This maps to object-shaped data, array fields, `.map()`, keys, and reusable card-style UI.

## 11. Interview-ready wording

```text
In my portfolio, TypeScript helps make component props safer and easier to understand. For example, the AI assistant button receives typed props like isOpen, setIsOpen, and an optional theme. The theme is also restricted to known values like light, dark, nightowl, and system, so TypeScript catches invalid theme values early. In the Projects section, project data follows a reusable shape with fields like title, description, technologies, highlights, image path, and GitHub URL, and the UI maps over those arrays to render repeated project cards and badges.
```

Short version:

```text
TypeScript lets me define exactly what props a component expects. In my portfolio, that shows up in the AI assistant props, theme union values, and project-card data where arrays like technologies and highlights are rendered into repeated UI.
```

## 12. What to remember before Day 5

```text
Inline prop typing is valid but gets messy.
Named type/interface keeps components cleaner.
For React props, type and interface are both fine.
Use type for union values.
Use ? only when a prop can actually be missing.
Use defaults in destructuring or fallbacks in JSX for optional props.
Use union types to prevent invalid string values.
Use string[] for arrays of strings.
Use map() to render arrays into JSX.
Every mapped element needs a stable key.
Use ul/li for real lists.
Parent passes real values; type/interface only defines the expected shape.
```

Next: Day 5 - State with useState.
