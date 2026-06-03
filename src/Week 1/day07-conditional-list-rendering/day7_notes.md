# Day 7 Notes - Conditional Rendering and List Rendering

## Day status

Day 7 is cleared.

Main goal: understand how React chooses which UI to show, how to render arrays with `.map()`, how keys work, how to handle empty/fallback UI, and how to combine conditional rendering inside mapped cards.

---

## 1. Core mental model

Conditional rendering means JavaScript conditions decide what JSX appears.

```text
state/data/props -> condition -> matching UI
```

List rendering means an array of data becomes repeated JSX.

```text
array -> map() -> repeated JSX
```

Day 7 connects directly to Day 5 and Day 6:

```text
event updates state -> state changes -> React re-renders -> conditional/list UI updates
```

---

## 2. `if/else`, early return, fallback UI, and `null`

Use `if`/early returns when a component needs to choose between larger UI blocks.

```tsx
if (isLoading) {
  return <p>Loading portfolio section...</p>
}

if (hasError) {
  return <p>Could not load portfolio section.</p>
}

if (!selectedSection) {
  return (
    <section>
      <h2>No section selected</h2>
      <p>Choose Projects, Skills, or Experience to continue.</p>
    </section>
  )
}
```

Good pattern:

```text
special cases first
normal UI last
```

Use fallback UI when the user needs feedback.

```text
No section selected
No tasks match the current filters
No tools added yet
```

Return `null` only when showing nothing is the correct behavior.

```tsx
function renderAdminNotice() {
  if (!shouldShowAdminNotice) {
    return null
  }

  return <p>Admin notice</p>
}
```

---

## 3. Ternary rendering and `&&` rendering

Use a ternary when you need one of two UI choices.

```tsx
{isCompleted ? <p>Topic completed</p> : <p>Topic still in progress</p>}
```

Use `&&` when you only want to show something if the condition is true.

```tsx
{isDetailsVisible && (
  <p>Conditional rendering lets state decide what UI appears.</p>
)}
```

Simple rule:

```text
ternary -> show A or B
&& -> show A only if true
```

Boolean state can control show/hide UI.

```tsx
const [isDetailsVisible, setIsDetailsVisible] = useState(false)

<button onClick={() => setIsDetailsVisible((previousValue) => !previousValue)}>
  {isDetailsVisible ? "Hide details" : "Show details"}
</button>
```

Conditional `className` was also practiced lightly.

```tsx
className={isSelected ? "selected-button" : "normal-button"}
```

---

## 4. List rendering with `.map()` and keys

React uses `.map()` to turn arrays into repeated JSX.

```tsx
const coreSkills = ["React", "TypeScript", "JavaScript", "Node.js"]

<ul>
  {coreSkills.map((skill) => (
    <li key={skill}>{skill}</li>
  ))}
</ul>
```

Important points:

```text
map() runs once per item.
key helps React track identity.
key does not render visible text.
The visible value must still be rendered inside the JSX.
```

For string arrays, `key={skill}` is okay only when values are unique and stable.

For object arrays, prefer a real id.

```tsx
<article key={project.id}>
```

Avoid using index as the default habit. It is okay only for static lists that never reorder, insert, or delete.

---

## 5. Empty array fallback

An empty array does not crash. It just renders nothing.

Better pattern:

```tsx
{emptyTools.length === 0 ? (
  <p>No tools added yet.</p>
) : (
  <ul>
    {emptyTools.map((tool) => (
      <li key={tool}>{tool}</li>
    ))}
  </ul>
)}
```

Important HTML rule:

```text
Do not put <p> directly inside <ul>.
A <ul> should contain <li> elements.
```

---

## 6. Arrays of objects, nested lists, and filter before map

Real React UI usually renders object-shaped data.

```tsx
type PortfolioProject = {
  id: number
  title: string
  category: "frontend" | "backend" | "automation"
  isFeatured: boolean
  technologies: string[]
}
```

Filter chooses items. Map renders chosen items.

```tsx
const featuredProjects = projects.filter((project) => project.isFeatured)
```

Nested arrays need nested maps.

```tsx
{featuredProjects.map((project) => (
  <article key={project.id}>
    <h3>{project.title}</h3>
    <p>Category: {project.category}</p>

    <ul>
      {project.technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  </article>
))}
```

Mental model:

```text
outer map -> one card per object
inner map -> repeated child data inside that card
```

---

## 7. Conditional rendering inside lists

Mapped cards often contain optional UI.

```tsx
type PortfolioItem = {
  id: number
  title: string
  category: "project" | "skill" | "experience"
  isFeatured: boolean
  description?: string
  githubUrl?: string
  tags: string[]
}
```

Patterns practiced:

```tsx
{item.isFeatured && <p>Featured item</p>}
```

```tsx
{item.description ? <p>{item.description}</p> : <p>No description available.</p>}
```

```tsx
{item.githubUrl ? (
  <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
    View GitHub
  </a>
) : (
  <p>GitHub link not available.</p>
)}
```

```tsx
<ul>
  {item.tags.map((tag) => (
    <li key={tag}>{tag}</li>
  ))}
</ul>
```

Core pattern:

```text
map creates each card
key gives card identity
ternary handles A/B fields
&& handles optional badges/sections
nested map renders repeated child data
```

---

## 8. Final mixed exercise

Scenario: Portfolio launch readiness board.

Practiced:

```text
early return fallback
boolean show/hide state
selected filter state
ternary rendering
&& rendering
filter before map
stable keys with task.id
arrays of objects
optional owner/note fields
conditional rendering inside task cards
nested tag list with ul/li
```

Final exercise status: cleared.

One cleanup reminder from review:

```text
Avoid inline style in these learning exercises unless styling is the point.
Use simple className strings or plain markup.
```

---

## 9. File organization after Day 7

Day 7 practice files:

```text
src/week1/day07-conditional-list-rendering/
  Day07ConditionalListRendering.tsx
  ConditionalBasicsPractice.tsx
  TernaryAndShowHidePractice.tsx
  ListRenderingPractice.tsx
  ObjectListRenderingPractice.tsx
  ConditionalListItemsPractice.tsx
  Day07FinalPractice.tsx
```

Render flow:

```text
App.tsx
  -> Day07ConditionalListRendering.tsx
      -> ConditionalBasicsPractice
      -> TernaryAndShowHidePractice
      -> ListRenderingPractice
      -> ObjectListRenderingPractice
      -> ConditionalListItemsPractice
      -> Day07FinalPractice
```

---

## 10. Corrections and reminders

| Issue | Reminder |
|---|---|
| Used `&&` during Topic 1 | Valid React, but Topic 1 was specifically for `if`, fallback, and `null` |
| Fallback paragraph inside `<ul>` | Put fallback outside the `<ul>`; only `<li>` should be direct children of `<ul>` |
| Visible GitHub markdown link in portfolio mapping | User-facing mapping should use inline filename and source chip style, not visible markdown links |
| Generic final task names | Fine for practice, but real portfolio examples should use meaningful names |
| Inline styles in final exercise | Not a blocker, but keep rendering exercises focused on React logic |

---

## 11. Portfolio mapping

Verified portfolio connections:

```text
Projects.tsx -> projects array, object-shaped project data, nested technologies/highlights maps, optional GitHub UI, image/fallback UI
SmartAIAssistantButton.tsx -> boolean open/closed UI controlled by state
Contact.tsx -> loading/form state that can drive conditional UI
```

Day 7 is closest to `Projects.tsx` because project data is rendered through arrays, objects, nested lists, keys, and optional UI.

---

## 12. Interview-ready wording

Conditional rendering means I use JavaScript conditions to decide what JSX a component should show. For larger branches like loading, error, empty, or not-selected states, I prefer early returns. For smaller inline UI decisions, I use ternaries when I need A or B, and `&&` when I only want to show optional UI if a condition is true.

List rendering means I use `.map()` to turn an array of data into repeated JSX. Each repeated item needs a key so React can track identity. In real UI, I usually render arrays of objects, use stable ids as keys, filter the data before mapping when needed, and conditionally show optional fields inside each card.

---

## 13. What to remember before Day 8

```text
Use early returns for big UI branches.
Use ternary for A/B UI.
Use && for optional UI.
Use fallback UI instead of blank screens when the user needs feedback.
Use null only when rendering nothing is intentional.
Use map() to render arrays.
Use stable keys when available.
Use filter() before map() when showing only part of a list.
Do not put non-li elements directly inside ul.
Optional object fields need conditional rendering or fallback text.
```

Next:

```text
Day 8 - Component composition and reusable components
```
