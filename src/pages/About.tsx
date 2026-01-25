function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">About This Project</h1>

      <p className="text-gray-700">
        This is a simple weather application built with <strong>React</strong>{" "}
        and <strong>TypeScript</strong>. The main idea is to let users search
        for a city and quickly see the current weather along with a short-term
        forecast.
      </p>

      <p className="text-gray-700">
        I built this project as part of my learning process while getting more
        comfortable with modern frontend development.
      </p>

      <h2 className="text-xl font-semibold">Why I Built It</h2>

      <p className="text-gray-700">
        I wanted a project that felt practical but still challenged me. This app
        helped me practice working with real APIs, handling async data, managing
        component state, and thinking more carefully about how data flows
        through a React app.
      </p>

      <h2 className="text-xl font-semibold">What It Can Do</h2>

      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Search for cities using autocomplete suggestions</li>
        <li>Show current weather conditions</li>
        <li>Display extra weather details like humidity and wind speed</li>
        <li>Show a short-term weather forecast</li>
        <li>Handle loading and error states properly</li>
      </ul>

      <h2 className="text-xl font-semibold">Tech Stack</h2>

      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>React</li>
        <li>TypeScript</li>
        <li>OpenWeather API</li>
        <li>CSS utility classes for styling</li>
      </ul>

      <h2 className="text-xl font-semibold">What I Learned</h2>

      <p className="text-gray-700">
        Building this app helped me better understand how React works under the
        hood, especially around <code>useEffect</code>, derived state, and API
        response handling. It also taught me the importance of matching API data
        to TypeScript types instead of guessing and hoping things work.
      </p>

      <p className="text-gray-700">
        The project is still evolving as I continue learning, and I plan to
        improve both the UI and the internal structure over time.
      </p>
      <a href="https://github.com/mariioox/weatherapp">Want to check it out?</a>
    </div>
  );
}

export default About;
