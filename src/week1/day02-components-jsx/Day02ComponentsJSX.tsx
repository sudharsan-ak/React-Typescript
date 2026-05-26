import DayBadge from './DayBadge'
import JSXRulesPractice from './JSXRulesPractice'
import CompositionPractice from './CompositionPractice'
import Day02FinalPractice from './Day02FinalPractice'

// Day 2 - React Mental Model, Components, JSX
// Practice file for Day 2 exercises

// Exercise 1 - Component Tree
function DayHeader() {
  return <h1>Day 2 - React Mental Model</h1>
}

function DaySummary() {
  return <p>React apps are built as a tree of components.</p>
}

// Exercise 2 - What is a Component?
function LearningStatus() {
  return (
    <section>
      <h2>Topic cleared</h2>
      <p>I created my first Day 2 component tree.</p>
    </section>
  )
}

// Exercise 3 - Function Components

// 1. Create a component called PortfolioConnection
// 2. It should return a section tag
// 3. Inside the section, add an h2 that says:
// Portfolio connection
// 4. Add a p tag that says:
// My portfolio uses function components like Hero, Projects, Contact, and Navigation.
// 5. Render <PortfolioConnection /> inside Day02ComponentsJSX below <LearningStatus />
function PortfolioConnection() {
  return (
    <section>
      <h2>Portfolio connection</h2>
      <p>My portfolio uses function components like Hero, Projects, Contact, and Navigation.</p>
    </section>
  )
}

// Exercise 5 - JSX Basics

// 1. Create a component called JSXBasics
// 2. It should return a section tag
// 3. Inside the section, add an h2 that says:
// JSX basics
// 4. Add a p tag that says:
// JSX lets React components describe UI.
// 5. Add a ul with three li items:
// HTML-like tags
// Custom components
// JavaScript-friendly syntax
// 6. Render <JSXBasics /> inside Day02ComponentsJSX below <DayBadge />
function JSXBasics() {
  return (
    <section>
      <h2>JSX basics</h2>
      <p>JSX lets React components describe UI.</p>
      <ul>
        <li>HTML-like tags</li>
        <li>Custom components</li>
        <li>JavaScript-friendly syntax</li>
      </ul>
    </section>
  )
}

// Exercise 6 - One Parent Wrapper

// 1. Create a component called WrapperRule
// 2. It should return a section tag
// 3. Inside the section, add an h2 that says:
// One parent wrapper
// 4. Add a p tag that says:
// JSX must return one top-level parent element.
// 5. Add another p tag that says:
// A section, div, main, or fragment can be used as the wrapper.
// 6. Render <WrapperRule /> inside Day02ComponentsJSX below <JSXBasics />
function WrapperRule() {
  return (
    <section>
      <h2>One parent wrapper</h2>
      <p>JSX must return one top-level parent element.</p>
      <p>A section, div, main, or fragment can be used as the wrapper.</p>
    </section>
  )
}

// Main Day 2 component
function Day02ComponentsJSX() {
  return (
    <main>
      <DayHeader />
      <DaySummary />
      <LearningStatus />
      <PortfolioConnection />
      <DayBadge />
      <JSXBasics />
      <WrapperRule />
      <JSXRulesPractice />
      <CompositionPractice />
      <Day02FinalPractice />
    </main>
  )
}

export default Day02ComponentsJSX