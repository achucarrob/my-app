import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <header>
          <form>
            <input
              type="search"
              placeholder="Enter a city.."
              required=""
              className="search-input"
            />
            <input
              type="submit"
              defaultValue="Search"
              className="search-button"
            />
          </form>
        </header>
        <main>
          <div className="current-weather">
            <div>
              <h1 className="current-city">Paris</h1>
              <p className="current-details">
                Tuesday 21:46, thunderstorm
                <br />
                Humidity: 80%, Wind: 15 km/h
              </p>
            </div>
            <div className="current-temperature">
              <span className="current-temperature-icon">☀️</span>
              <span
                className="current-temperature-value"
                id="current-temperature"
              >
                24
              </span>
              <span className="current-temperature-unit">°C</span>
            </div>
          </div>
        </main>
        <footer>
          <p>This project was coded by Claudia Achucarro. You can find the repository in</p>
          <a href="https://github.com/achucarrob/my-app" target="_blank" rel="noreferrer"> this link.</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
