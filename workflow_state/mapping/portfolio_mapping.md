# Portfolio Mapping - React + TypeScript Learning Project

This file tracks verified mappings between React learning topics and the actual portfolio repo/live site.

Portfolio GitHub:
https://github.com/sudharsan-ak/personal-portfolio/

Live site:
https://sudharsansrinivasan.com/

## Rule

Only add mappings that are verified from the actual repo or live site.

Do not guess exact implementation.

Use normal GitHub file pages in user-facing responses, not raw source links.

Every new verified mapping stored in this file should include:

```text
concept being mapped
normal GitHub file link
exact verified behavior/pattern
learning topics connected to it
```

### User-facing portfolio mapping response format

When explaining a portfolio mapping in chat, use compact paragraph style.

Do **not** use a bullet-list metadata block like:

```text
- Concept:
- Verified file:
- What it shows:
```

Do **not** make the filename itself a clickable markdown link.

Do **not** use visible markdown GitHub links in chat responses, because they render visible `GitHub ↗` text instead of the desired GitHub/source chip style.

Use this user-facing format:

```md
## Portfolio mapping

**<Concept> - `<FileName.tsx>`**

Your `<FileName.tsx>` shows <short verified behavior>. This maps to the current topic because <short learning connection>. <GitHub/source citation chip>
```

Rules:

```text
- Show the verified filename as plain inline code, e.g. `Contact.tsx`.
- Do not make the filename clickable.
- Do not show the raw GitHub URL.
- Do not use arrow-link filename formatting.
- Do not write `(github.com)` as visible text.
- Do not write visible markdown links with `GitHub` as the link text in user-facing portfolio mappings.
- Use a GitHub/source citation chip after the explanation when available.
- If a GitHub/source citation chip cannot be generated, mention the verified filename only and do not force a visible markdown link.
- The underlying source, when available, should point to the normal GitHub blob file page.
```

Correct visual goal:

```md
## Portfolio mapping

**Object state with `useState` - `Contact.tsx`**

Your `Contact.tsx` keeps related form values like `name`, `email`, and `message` together in object state. Topic 5 is the smaller version of that same idea: keep related values in one object, then update one field by creating a new object with spread syntax instead of mutating the old state. <GitHub/source citation chip>
```

## App architecture mapping

Verified file:
https://github.com/sudharsan-ak/personal-portfolio/blob/main/client/src/App.tsx

Current verified ideas:

```text
App.tsx imports routing tools from wouter.
App.tsx uses QueryClientProvider.
App.tsx uses TooltipProvider and Toaster.
App.tsx imports Home, Resume, APIPage, and NotFound page components.
App.tsx imports shared/floating UI such as DynamicBackground, TimelineButton, FloatingBookingButton, and SmartAIAssistantButton.
Router renders routes for /, /resume, /api-docs, and fallback NotFound.
```

Learning concepts connected:

```text
components
composition
routing
app shell
providers
shared UI
conditional rendering later
```

## Theme state and union type mapping

Verified file:
https://github.com/sudharsan-ak/personal-portfolio/blob/main/client/src/App.tsx

Verified concept:

```tsx
useState<"light" | "dark" | "nightowl" | "system">("light")
```

Verified behavior/pattern:

```text
App owns the current theme value as state.
The theme value is limited to known string options.
This prevents random invalid theme values.
```

Learning concepts connected:

```text
useState
TypeScript generic state typing
union types
limited allowed values
parent-owned state
string state
```

## AI assistant props and open-state mapping

Verified file:
https://github.com/sudharsan-ak/personal-portfolio/blob/main/client/src/components/SmartAIAssistantButton.tsx

Verified prop interface shape:

```tsx
interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  theme?: "light" | "dark" | "nightowl" | "system"
}
```

Verified behavior:

```text
SmartAIAssistantButton receives isOpen, setIsOpen, and optional theme.
The button toggles open state using setIsOpen((prev) => !prev).
The component passes isOpen, setIsOpen, buttonRef, and theme into SmartAIAssistantChat.
```

Learning concepts connected:

```text
props
props are read-only
parent-to-child data flow
state setter props
boolean state
toggle state
functional updates
optional props
union props
event handling later
```

## Projects mapping

Verified file:
https://github.com/sudharsan-ak/personal-portfolio/blob/main/client/src/components/Projects.tsx

Verified concepts:

```text
Projects.tsx defines a projects array inside the Projects component.
Project objects include fields such as title, tagline, description, technologies, highlights, imagePath, imageAlt, and githubUrl.
Projects.tsx maps over project.highlights.
Projects.tsx maps over project.technologies and renders Badge components.
```

Learning concepts connected:

```text
arrays
object-shaped data
array props
map rendering
reusable cards
keys
portfolio-style typed card practice
```

## Contact form mapping

Verified file:
https://github.com/sudharsan-ak/personal-portfolio/blob/main/client/src/components/Contact.tsx

Verified concepts:

```text
Contact uses form state with name, email, and message.
Contact uses loading state.
handleChange updates form state using e.target.name and e.target.value.
handleSubmit prevents default form refresh.
handleSubmit sends a POST request to /api/contact using fetch.
The form resets on success.
loading is cleared in finally.
```

Learning concepts connected:

```text
state
object state
controlled forms
event handlers
fetch/API
loading state
success/error handling
```

## Day 1 to Day 5 mapping summary

```text
Day 1 -> main.tsx/App.tsx startup flow maps to real portfolio app startup.
Day 2 -> components/JSX map to portfolio sections and App/Home composition.
Day 3 -> props map to SmartAIAssistantButton and repeated UI patterns.
Day 4 -> TypeScript props map to SmartAIAssistantButton Props interface, App theme union type, and Projects array rendering.
Day 5 -> state maps to App theme state, AI assistant open/toggle state, and Contact form object/loading state.
```

## Current status

```text
Mappings captured through Day 5.
Update this file only when new verified repo/live-site mappings are added.
```
