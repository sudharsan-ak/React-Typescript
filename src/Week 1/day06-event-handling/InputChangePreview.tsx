// Topic 5: Input/change event preview

// 1. Import useState from react.

import { useState } from 'react'

// 2. Create a component called InputChangePreview.

// 3. Inside the component, create string state called displayName.
//    Initial value should be an empty string.

// 4. Create a named handler called handleDisplayNameChange.

// 5. The handler should receive an event parameter.
//    Type it as:
//    React.ChangeEvent<HTMLInputElement>

// 6. Inside the handler, update displayName using:
//    event.currentTarget.value

// 7. Return a section tag.

// 8. Inside the section, render:
//    h2: Topic 5 - Input change preview
//    p: Inputs use onChange to react to typing.

// 9. Add one input with:
//    type="text"
//    value={displayName}
//    onChange={handleDisplayNameChange}
//    placeholder="Type your display name"

// 10. Under the input, render:
//     p: Display name: {displayName}

// 11. Add one more p tag:
//     The input value is stored in React state.
function InputChangePreview() {
  const [displayName, setDisplayName] = useState("")

  function handleDisplayNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDisplayName(event.currentTarget.value)
  }

  return (
    <section>
      <h2>Topic 5 - Input change preview</h2>
      <p>Inputs use onChange to react to typing.</p>
      <input
        type="text"
        value={displayName}
        onChange={handleDisplayNameChange}
        placeholder="Type your display name"
      />
      {displayName && <p>Display name: {displayName}</p>}
      <p>The input value is stored in React state.</p>
    </section>
  )
}

// 12. Export InputChangePreview as the default export.

// 13. Import InputChangePreview into Day06EventHandling.tsx.

// 14. Render <InputChangePreview /> under EventObjectPractice, with an <hr /> before it.
export default InputChangePreview