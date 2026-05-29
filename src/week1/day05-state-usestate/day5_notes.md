# Day 5 Notes - State with `useState`

## Day status

Day 5 is cleared.

Main goal: understand state as component-owned changing data, practice `useState`, update number/boolean/string/object state safely, use functional updates, and connect state back to the real portfolio.

---

## 1. State mental model

State is data a component owns and can update.

```text
Props = data received from a parent
State = data owned by the component
```

Basic shape:

```tsx
const [value, setValue] = useState(initialValue)
```

Meaning:

```text
value = current state value
setValue = function used to update state
initialValue = first value React uses
```

When state changes, React re-renders the component with the new value.

---

## 2. Number state

Number state was practiced with a counter.

```tsx
const [practiceCount, setPracticeCount] = useState(0)
```

Good update pattern when the next value depends on the previous value:

```tsx
setPracticeCount((previousCount) => previousCount + 1)
```

Decrease:

```tsx
setPracticeCount((previousCount) => previousCount - 1)
```

Reset:

```tsx
setPracticeCount(0)
```

Important rule:

```text
Use the setter. Do not mutate or reassign the state variable directly.
```

For real UI, if a counter should not go below `0`, clamp it:

```tsx
setCompletedExercises((previousCount) => Math.max(previousCount - 1, 0))
```

Or disable the button when the count is already `0`.

---

## 3. Boolean state

Boolean state was practiced with open/closed UI.

```tsx
const [isPanelOpen, setIsPanelOpen] = useState(false)
```

Toggle pattern:

```tsx
setIsPanelOpen((previousValue) => !previousValue)
```

Boolean state is useful for:

```text
open / closed
shown / hidden
enabled / disabled
selected / not selected
loading / not loading
```

Conditional rendering preview:

```tsx
{isPanelOpen && <p>This panel is currently visible.</p>}
```

Meaning:

```text
If isPanelOpen is true, render the paragraph.
If false, render nothing.
```

---

## 4. String state and union state

String state was practiced with selected portfolio sections.

```tsx
const [selectedSection, setSelectedSection] = useState<PortfolioSection>("Projects")
```

Union type used:

```tsx
type PortfolioSection = "Projects" | "Skills" | "Contact"
```

This is better than plain `string` when only fixed values are allowed.

Rule:

```text
Fixed choices -> union type
Free-form text -> string
```

Examples where unions are useful:

```text
theme
status
selected tab
mode
priority
variant
```

---

## 5. Object state

Object state is for grouped related values.

Example:

```tsx
type LearningProfile = {
  name: string
  role: string
  focusArea: string
}
```

State:

```tsx
const [learningProfile, setLearningProfile] = useState<LearningProfile>({
  name: "Sudharsan",
  role: "Full Stack Software Engineer",
  focusArea: "React state",
})
```

Mental model:

```text
LearningProfile = TypeScript shape
useState(...) object = initial state value
learningProfile = current object state
setLearningProfile = setter function
```

Do not mutate object state directly:

```tsx
learningProfile.focusArea = "Object state with useState"
```

Correct pattern:

```tsx
setLearningProfile((previousProfile) => ({
  ...previousProfile,
  focusArea: "Object state with useState",
}))
```

The spread syntax means:

```text
copy the old object
keep fields that are not changing
overwrite the field being updated
return a new object
```

Important warning:

```tsx
setLearningProfile({
  focusArea: "Object state with useState",
})
```

This is wrong if the object also needs `name` and `role`, because `useState` does not automatically merge object fields.

---

## 6. Functional updates

Functional updates were used throughout Day 5.

Number:

```tsx
setPracticeCount((previousCount) => previousCount + 1)
```

Boolean:

```tsx
setIsPanelOpen((previousValue) => !previousValue)
```

Object:

```tsx
setLearningProfile((previousProfile) => ({
  ...previousProfile,
  role: "React + TypeScript Learner",
}))
```

Rule:

```text
If the next state depends on the previous state, use the functional update form.
```

---

## 7. File organization after Day 5

Day 5 used one main topic composer and one final practice file.

```text
src/week1/day05-state-usestate/
  Day05StateUseState.tsx
  Day05FinalPractice.tsx
```

Roles:

```text
Day05StateUseState.tsx = main Day 5 topic composer
Day05FinalPractice.tsx = final mixed state checkpoint
```

Good structure:

```text
Topic components stay in the day composer while the file is manageable.
Final mixed exercise can be split into its own file when the main day file is already large.
```

---

## 8. Exercises completed

Completed:

```text
Topic 1 - State mental model + useState syntax
Topic 2 - Number state + functional updates
Topic 3 - Boolean state + toggle/show-hide UI
Topic 4 - String state + union state
Topic 5 - Object state + no direct mutation
Final mixed exercise - React learning dashboard
```

Final exercise practiced:

```text
number state
boolean state
string union state
object state
functional updates
spread syntax
conditional rendering
separate final practice file
```

Final exercise status: cleared.

---

## 9. Corrections and reminders

| Issue | Reminder |
|---|---|
| Directly mutating object state | Use setter + spread syntax instead |
| Updating object state without spread | You may accidentally remove other fields |
| Counter can go below zero | Use `Math.max(previousCount - 1, 0)` or disable the button |
| Setter naming | Prefer clear setter names like `setIsSummaryVisible` |
| Final exercise scaffolds | Final exercises should be task-based, not line-by-line solved templates |

Main recurring reminder:

```text
React only knows state changed when the setter is called.
```

---

## 10. Portfolio mapping

Day 5 connects directly to the real portfolio.

### Theme state - `App.tsx`

`App.tsx` uses `useState` with a limited theme union:

```tsx
useState<"light" | "dark" | "nightowl" | "system">("light")
```

This maps to Day 5 string union state.

Normal GitHub file page:

```text
https://github.com/sudharsan-ak/personal-portfolio/blob/main/client/src/App.tsx
```

### AI assistant open state - `SmartAIAssistantButton.tsx`

The AI assistant flow uses boolean open/closed state. The child receives `isOpen` and `setIsOpen`, then toggles open state with a functional update.

This maps to Day 5 boolean state and toggle state.

Normal GitHub file page:

```text
https://github.com/sudharsan-ak/personal-portfolio/blob/main/client/src/components/SmartAIAssistantButton.tsx
```

### Contact form state - `Contact.tsx`

The contact form uses related values like `name`, `email`, and `message` together as form state. This maps to Day 5 object state.

Normal GitHub file page:

```text
https://github.com/sudharsan-ak/personal-portfolio/blob/main/client/src/components/Contact.tsx
```

---

## 11. Interview-ready wording

Use this:

```text
State is component-owned data that can change over time. In React, I use useState to store the current value and a setter function to update it. In my portfolio, this shows up in a few places: App owns theme state with a limited set of allowed theme values, the AI assistant uses boolean open/closed state, and the Contact form groups related fields like name, email, and message into object state. When updating state based on the previous value, I use functional updates, and when updating object state, I create a new object with spread syntax instead of mutating the old one.
```

Short version:

```text
useState lets a component own changing data. I use functional updates when the next value depends on the previous value, and I use spread syntax for object state so React gets a new object instead of a mutated one.
```

---

## 12. What to remember before Day 6

```text
State belongs to the component that owns it.
Props are received from a parent.
useState returns current value + setter.
Call the setter to update state.
Use functional updates when the new value depends on the old value.
Use union types for fixed string options.
Do not mutate object state directly.
Use spread syntax when updating one object field.
Boolean state commonly controls show/hide and open/closed UI.
```

Next:

```text
Day 6 - Event handling
```
