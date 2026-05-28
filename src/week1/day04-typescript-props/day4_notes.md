# Day 4 Notes - TypeScript Props with `type` and `interface`

## Day status

Day 4 is cleared.

Main goal: clean up Day 3 inline prop typing by using named `type` and `interface` definitions, then apply optional props, union props, default values, array props, and reusable portfolio-style typed components.

---

## 1. Why inline prop typing gets messy

Day 3 used inline prop typing like this:

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

This is valid, but it gets noisy when a component has several props.

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

---

## 2. Named prop types using `type`

A `type` can describe the shape of a component's props.

```tsx
type ProfileCardProps = {
  fullName: string
  role: string
  yearsOfExperience: number
  isOpenToWork: boolean
}

function ProfileCard({
  fullName,
  role,
  yearsOfExperience,
  isOpenToWork,
}: ProfileCardProps) {
  return (
    <section>
      <h2>{fullName}</h2>
      <p>Role: {role}</p>
      <p>Experience: {yearsOfExperience} years</p>
      <p>Status: {isOpenToWork ? "Open to work" : "Not looking"}</p>
    </section>
  )
}
```

This separates the prop contract from the rendering logic.

Common naming pattern:

```text
ComponentNameProps
```

Example:

```text
ProfileCard -> ProfileCardProps
PortfolioTypedCard -> PortfolioTypedCardProps
```

---

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

Used in a component:

```tsx
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
```

### Beginner rule: `type` vs `interface`

For React props, both are fine.

Practical rule for now:

```text
Object-shaped props -> type or interface
Union values -> type
Consistency matters more than arguing type vs interface
```

Example:

```tsx
type Status = "live" | "in-progress" | "planned"

interface StatusCardProps {
  title: string
  status: Status
}
```

---

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
<p>Category: {category ?? "General"}</p>
```

Default value during destructuring:

```tsx
function ProjectStatusCard({
  category = "General",
  isFeatured = false,
}: ProjectStatusCardProps) {
  // use category and isFeatured safely
}
```

Important correction:

```text
A union type limits allowed values.
A default value is assigned in component logic.
```

The type itself does not create a default.

---

## 5. Union props

Union types limit a value to a fixed list of allowed options.

```tsx
type ProjectStatus = "live" | "in-progress" | "planned"
```

Then use it in props:

```tsx
interface ProjectStatusCardProps {
  title: string
  status: ProjectStatus
}
```

This is better than:

```tsx
status: string
```

because `string` would allow invalid values like `"banana"`.

Union props are useful for controlled values like:

```text
status
variant
theme
priority
size
```

---

## 6. Array props and `.map()`

Array props were practiced with:

```tsx
technologies: string[]
highlights: string[]
skills: string[]
```

Rendering arrays with `.map()`:

```tsx
<ul>
  {skills.map((skill) => (
    <li key={skill}>{skill}</li>
  ))}
</ul>
```

Meaning:

```text
skills.map loops through each skill
skill is the current array item
<li> renders one list item
key gives React a stable identity for that item
{skill} displays the visible text
```

The `>` in `<li key={skill}>` simply closes the opening tag. The visible content starts after that.

Better semantic HTML:

```text
Use ul/li for real lists instead of multiple p tags.
```

---

## 7. File organization after Day 4

Topic 4 and Topic 5 became large enough to split into focused files.

Current Day 4 folder:

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

Good structure rule:

```text
Types/interfaces first
child components next
main practice component after that
export default at the bottom
```

For the main day file:

```text
import focused practice components
render them in learning order
keep Day04TypeScriptProps as the composer
```

---

## 8. Exercises completed

Completed:

```text
Topic 1 - Inline prop typing
Topic 2 - Named prop types using type
Topic 3 - Props with interface and beginner type vs interface
Topic 4 - Optional props and union props
Topic 5 - Portfolio-style reusable typed card
Final mixed exercise - Portfolio section summary cards
```

Final exercise used:

```text
SectionStatus union type
SectionPriority union type
PortfolioSectionCardProps interface
optional priority
optional githubUrl
default priority = "medium"
githubUrl fallback = "Not available"
skills and highlights arrays rendered with ul/li + map
three reusable typed cards
```

Final exercise status: cleared.

---

## 9. Mistakes and corrections

| Issue | Correction |
|---|---|
| Inline prop typing got bulky | Move larger prop shapes into named `type` or `interface` |
| Confused union type with default value | Union limits allowed values; default is set inside component logic |
| Missing exact label text like `Status:` | Match the prompt output exactly |
| Used custom label like `Category Style 1` | Use requested output when the prompt specifies exact text |
| Assumed uploaded/rendered file was missing import/render | Verify the current uploaded/local file carefully before calling it out |
| Asked for placement but got full solution | Going forward, give exact placement comments without solving the exercise unless asked |
| Used raw GitHub links in explanations | Use normal GitHub file pages in user-facing responses; raw links only for internal inspection if needed |
| Used p tags for repeated list data | Use `ul/li` for real lists in final practice |

Recurring Day 4 reminder:

```text
A concept can be correct but still fail the prompt if the rendered text does not match.
```

---

## 10. Portfolio mapping

Day 4 connects directly to the actual portfolio.

### `App.tsx` - union type for theme

`App.tsx` uses a limited theme union:

```tsx
useState<"light" | "dark" | "nightowl" | "system">("light")
```

This is the same idea as:

```tsx
type ProjectStatus = "live" | "in-progress" | "planned"
```

It prevents random invalid values.

Normal GitHub file page:

```text
https://github.com/sudharsan-ak/personal-portfolio/blob/main/client/src/App.tsx
```

### `SmartAIAssistantButton.tsx` - interface, optional prop, union prop

The AI assistant button has a props interface with required and optional props:

```tsx
interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  theme?: "light" | "dark" | "nightowl" | "system"
}
```

Mapping:

```text
interface Props -> typed prop shape
theme? -> optional prop
"light" | "dark" | "nightowl" | "system" -> union prop
```

Normal GitHub file page:

```text
https://github.com/sudharsan-ak/personal-portfolio/blob/main/client/src/components/SmartAIAssistantButton.tsx
```

### `Projects.tsx` - array data and repeated rendering

The Projects section stores project data with arrays like technologies and highlights, then maps them into repeated UI.

Mapping:

```tsx
type PortfolioTypedCardProps = {
  title: string
  description: string
  technologies: string[]
  highlights: string[]
  githubUrl?: string
}
```

Normal GitHub file page:

```text
https://github.com/sudharsan-ak/personal-portfolio/blob/main/client/src/components/Projects.tsx
```

---

## 11. Interview-ready wording

Use this:

```text
In my portfolio, TypeScript helps make component props safer and easier to understand. For example, the AI assistant button receives typed props like isOpen, setIsOpen, and an optional theme. The theme is also restricted to known values like light, dark, nightowl, and system, so TypeScript catches invalid theme values early. In the Projects section, project data follows a reusable shape with fields like title, description, technologies, highlights, image path, and GitHub URL, and the UI maps over those arrays to render repeated project cards and badges.
```

Short version:

```text
TypeScript lets me define exactly what props a component expects. In my portfolio, that shows up in the AI assistant props, theme union values, and project-card data where arrays like technologies and highlights are rendered into repeated UI.
```

---

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

Next:

```text
Day 5 - State with useState
```
