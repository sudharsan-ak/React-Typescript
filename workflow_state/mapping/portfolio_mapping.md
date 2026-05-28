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

Learning concepts connected:

```text
useState
TypeScript generic state typing
union types
limited allowed values
parent-owned state
```

## AI assistant props mapping

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
controlled forms
event handlers
fetch/API
loading state
success/error handling
```

## Day 1 to Day 4 mapping summary

```text
Day 1 -> main.tsx/App.tsx startup flow maps to real portfolio app startup.
Day 2 -> components/JSX map to portfolio sections and App/Home composition.
Day 3 -> props map to SmartAIAssistantButton and repeated UI patterns.
Day 4 -> TypeScript props map to SmartAIAssistantButton Props interface, App theme union type, and Projects array rendering.
```

## Current status

```text
Mappings captured through Day 4.
Update this file only when new verified repo/live-site mappings are added.
```
