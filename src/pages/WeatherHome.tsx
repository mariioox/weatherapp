import ForecastList from "../components/ForecastList";
import WeatherHero from "../components/WeatherHero";
import WeatherStats from "../components/WeatherStats";

function WeatherHome() {
  return (
    <div className="space-y-8">
      {/* Location */}
      <section>
        <h2 className="text-xl font-semibold">Lagos, Nigeria</h2>
        <p className="text-muted-foreground">Monday, Sept 18</p>
      </section>

      {/* Current Weather */}
      {/* <WeatherHero current={weather.current} /> */}

      {/* Stats */}
      {/* <WeatherStats current={weather.current} /> */}

      {/* Forecast */}
      {/* <ForecastList forecast={weather.forecast} /> */}
    </div>
  );
}

export default WeatherHome;
