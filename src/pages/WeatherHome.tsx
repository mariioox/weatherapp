import ForecastList from "../components/ForecastList";
import WeatherHero from "../components/WeatherHero";
import WeatherStats from "../components/WeatherStats";
import type { WeatherData } from "../types/weather";
import { useEffect, useState } from "react";
import CitySearch from "../components/CitySearch";

function WeatherHome() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const API_KEY = "YOUR_API_KEY";

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather");
        }

        const data: WeatherData = await response.json();
        setWeather(data);
      } catch (err) {
        console.log(err);
        setError("Could not load weather data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="space-y-8">
      {/* Location */}
      <CitySearch onSearch={setCity} />

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <>
          {/* Current Weather */}
          <WeatherHero current={weather.current} />

          {/* Stats */}
          <WeatherStats current={weather.current} />

          {/* Forecast */}
          <ForecastList forecast={weather.forecast} />
        </>
      )}
    </div>
  );
}

export default WeatherHome;
