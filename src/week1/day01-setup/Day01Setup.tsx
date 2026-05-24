function Day01Setup() {
  return (
    <main>
      <h1>Day 1 - React + TypeScript Setup</h1>

      <section>
        <h2>Files I learned today</h2>
        <ul>
          <li>index.html gives React a root div.</li>
          <li>main.tsx mounts the App component.</li>
          <li>App.tsx controls the visible UI.</li>
        </ul>
      </section>

      <section>
        <h2>Startup flow</h2>
        <p>
          index.html loads main.tsx, main.tsx renders App, and App returns the UI shown in the browser.
        </p>
      </section>
    </main>
  )
}

export default Day01Setup