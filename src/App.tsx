import Day01Setup from './week1/day01-setup/Day01Setup'
import Day02ComponentsJSX from './week1/day02-components-jsx/Day02ComponentsJSX'
import Day03Props from './week1/day03-props/Day03Props'
import Day04TypeScriptProps from './week1/day04-typescript-props/Day04TypeScriptProps'
import Day05StateUseState from './week1/day05-state-usestate/Day05StateUseState'
import Day06EventHandling from './week1/day06-event-handling/Day06EventHandling'
import Day07ConditionalListRendering from './week1/day07-conditional-list-rendering/Day07ConditionalListRendering'

function App() {
  return(
    <main>
      <Day01Setup />
      <hr />
      <Day02ComponentsJSX />
      <hr />
      <Day03Props />
      <hr />
      <Day04TypeScriptProps />
      <hr />
      <Day05StateUseState />
      <hr />
      <Day06EventHandling />
      <hr />
      <Day07ConditionalListRendering />
      <hr />
    </main>
  )
}

export default App