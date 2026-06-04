# Day 8 Notes - Component Composition and Reusable Components

## Day status

```text
Day 8 - Cleared
Week 2 - Started
Next: Day 9 - Controlled forms
```

Day 8 focused on how to structure React UI so components stay readable, reusable, and not bloated.

---

## 1. Main idea

Component composition means building larger UI by combining smaller focused components.

```text
Parent component -> arranges child components
Child component -> owns one focused piece of UI
Reusable component -> same structure, different data
Wrapper component -> same outer layout, flexible inner content
```

The key habit is not "create more files." The key habit is to create better boundaries.

---

## 2. Topic 1 - Composition mental model

A bloated component tries to handle too many things in one place.

Bad direction:

```text
One component handles page layout, header, projects, skills, experience, lists, cards, and all details.
```

Better direction:

```text
Page component
  -> Header section
  -> Content section
  -> List section
  -> Summary section
```

A parent component should often read like a table of contents.

Good split reasons:

```text
The JSX is getting hard to scan.
A section has its own clear responsibility.
A repeated UI pattern appears.
A child component can be named clearly.
The parent is mixing too many concerns.
```

Bad split reasons:

```text
The JSX is tiny.
The component name is vague.
The split only makes the folder look fancy.
The split hides complexity instead of reducing it.
```

Beginner rule:

```text
If you can give a section a clear meaningful name, it may deserve its own component.
```

---

## 3. Topic 2 - Reusable components with props

Repeated JSX should often become a reusable component when the structure is the same and only the data changes.

Pattern:

```text
same JSX structure + different values = reusable component with props
```

Example idea:

```text
FeaturedWorkPreview owns the project data.
WorkCard receives title and description.
WorkCard renders one article.
```

This keeps the parent focused on what to show and the child focused on how one item looks.

---

## 4. Topic 3 - `children` and reusable wrappers

`children` means whatever JSX is placed between a component's opening and closing tags.

Pattern:

```text
same outer shell + flexible inner content = wrapper component with children
```

Example idea:

```tsx
<SectionWrapper title="Featured work">
  <WorkCard title="Project 1" description="..." />
  <WorkCard title="Project 2" description="..." />
</SectionWrapper>
```

`SectionWrapper` owns the common outer structure:

```text
section
  h2
  children
```

The parent controls what goes inside.

TypeScript typing:

```tsx
type SectionWrapperProps = {
  title: string
  children: ReactNode
}
```

Important clarification:

```text
The type does not render anything.
The component renders JSX.
The type only describes the props shape that the component accepts.
```

Use normal props for specific named data. Use `children` when the inside content should be flexible JSX.

---

## 5. Topic 4 - Production cleanup habits

In a real project, meaningful section components are often split into their own files.

Good candidates for separate files:

```text
CourseHeader
LessonsSection
InstructorSection
CourseChecklistSection
LessonCard
DashboardSection
```

But do not create one file for every tiny line of JSX.

Good production balance:

```text
Readable parent
Focused child components
Reusable repeated UI
No giant monster component
No fake abstraction
No file explosion
```

Practice files can keep heavier comments and old commented-out code as a learning trail. Final exercise files should be cleaner, though useful comments are still fine.

---

## 6. Final mixed exercise

Scenario:

```text
Online course dashboard
```

Practiced:

```text
Day08FinalPractice as the parent composer
CourseHeader as a focused section
DashboardSection as a reusable wrapper with children
LessonsSection owning lesson data
LessonCard rendering one lesson through props
map() rendering multiple lessons
conditional rendering for optional lesson status
InstructorSection and CourseChecklistSection using the wrapper
```

Final exercise status:

```text
Cleared
```

Main correction:

```text
Inline prop typing worked, but named types would be cleaner for reusable pieces like DashboardSectionProps and Lesson.
```

---

## 7. Interview-ready wording

In my React projects, I use component composition to keep the app readable. A page-level component should mostly organize the major sections instead of holding every detail itself. Section components own focused areas of the UI, and repeated patterns like cards, badges, or list items can become reusable child components that receive data through props.

When the same outer layout repeats but the inner content changes, I can use the `children` prop. The wrapper component owns the common structure, like a section title and layout, while the parent passes whatever JSX belongs inside. The goal is to keep components focused without overengineering tiny pieces into unnecessary files.

---

## 8. What to remember before Day 9

Day 8 was about structure, not a new hook.

Covered so far:

```text
components
JSX
props
TypeScript props
useState
event handling
conditional rendering
list rendering
component composition
reusable components
children
```

Next:

```text
Day 9 - Controlled forms
```

Controlled forms will build directly on `useState`, event handling, and props.
