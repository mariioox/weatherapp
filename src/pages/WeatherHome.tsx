import ForecastList from "../components/ForecastList";
import WeatherHero from "../components/WeatherHero";
import WeatherStats from "../components/WeatherStats";
import type { WeatherData } from "../types/weather";

const mockWeather: WeatherData = {
  current: {
    location: "Lagos, Nigeria",
    temperature: 28,
    feelsLike: 30,
    condition: "Clear",
    icon: "01d",
    humidity: 74,
    windSpeed: 3.6,
    pressure: 1012,
  },
  forecast: [
    {
      time: "12 PM",
      temperature: 30,
      condition: "Sunny",
      icon: "01d",
    },
    {
      time: "3 PM",
      temperature: 29,
      condition: "Partly Cloudy",
      icon: "02d",
    },
    {
      time: "6 PM",
      temperature: 27,
      condition: "Cloudy",
      icon: "03d",
    },
  ],
};

function WeatherHome() {
  return (
    <div className="space-y-8">
      {/* Location */}
      <section>
        <h2 className="text-xl font-semibold">Lagos, Nigeria</h2>
        <p className="text-muted-foreground">Monday, Sept 18</p>
      </section>

      {/* Current Weather */}
      <WeatherHero current={mockWeather.current} />

      {/* Stats */}
      <WeatherStats current={mockWeather.current} />

      {/* Forecast */}
      <ForecastList forecast={mockWeather.forecast} />
    </div>
  );
}

export default WeatherHome;
