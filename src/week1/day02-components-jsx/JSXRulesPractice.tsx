// Day 2 - JSX Rules Practice
// Exercise 7 - className, not class

// 1. Create a component called ClassNameRule
// 2. It should return a section tag
// 3. Add className="jsx-rule-card" to the section
// 4. Inside the section, add an h2 that says:
// className, not class
// 5. Add className="jsx-rule-title" to the h2
// 6. Add a p tag that says:
// JSX uses className because it is JavaScript-friendly.
// 7. Add className="jsx-rule-text" to the p tag
// 8. Render <ClassNameRule /> inside JSXRulesPractice
// 9. Export JSXRulesPractice and render it inside Day02ComponentsJSX below <WrapperRule />
function ClassNameRule() {
  return(
    <section className="jsx-rule-card">
      <h2 className="jsx-rule-title">className, not class</h2>
      <p className="jsx-rule-text">JSX uses className because it is JavaScript-friendly.</p>
    </section>
  )
}

// Exercise 8 - Curly Braces for JavaScript Values

// 1. Create a component called JavaScriptValuesRule
// 2. Inside the component, create a const called topic with the value "JSX"
// 3. Create a const called dayNumber with the value 2
// 4. Create a const called framework with the value "React"
// 5. Return a section tag
// 6. Inside the section, add an h2 that displays:
// JavaScript values in JSX
// 7. Add a p tag that displays this using curly braces:
// I am learning JSX on Day 2.
// 8. Add another p tag that displays this using curly braces:
// React components can use JavaScript values inside the UI.
// 9. Render <JavaScriptValuesRule /> inside JSXRulesPractice below <ClassNameRule />
function JavaScriptValuesRule() {
  const topic = "JSX"
  const dayNumber = 2
  const framework = "React"

  return (
    <section>
      <h2>JavaScript values in JSX</h2>
      <p>I am learning {topic} on Day {dayNumber}.</p>
      <p>{framework} components can use JavaScript values inside the UI.</p>
    </section>
  )
}

// Exercise 9 - Self-Closing Tags

// 1. Create a component called SelfClosingRule
// 2. Inside the component, create a const called imageAlt with the value:
// React logo placeholder
// 3. Return a section tag
// 4. Inside the section, add an h2 that says:
// Self-closing tags
// 5. Add a p tag that says:
// JSX tags without children should be self-closing.
// 6. Add an input tag with:
// type="text"
// placeholder="Self-closing input"
// 7. Add an img tag with:
// src="https://via.placeholder.com/80"
// alt={imageAlt}
// 8. Make sure input and img are self-closing
// 9. Render <SelfClosingRule /> inside JSXRulesPractice below <JavaScriptValuesRule />
function SelfClosingRule() {
  const imageAlt = "React logo placeholder"

  return (
    <section>
      <h2>Self-closing tags</h2>
      <p>JSX tags without children should be self-closing.</p>
      <input type="text" placeholder="Self-closing input" />
      <img src="https://via.placeholder.com/80" alt={imageAlt} />
    </section>
  )
}

// Main JSX Rules Practice component

function JSXRulesPractice() {
  return (
   <section>
      <h2>JSX rules practice</h2>
      <ClassNameRule />
      <JavaScriptValuesRule />
      <SelfClosingRule />
    </section>
  )
}

export default JSXRulesPractice