import type { OpenWeatherForecastResponse } from "../types/OpenWeatherForecast";
import type { OpenWeatherResponse } from "../types/openWeather";
import WeatherStats from "../components/WeatherStats";
import ForecastList from "../components/ForecastList";
import WeatherHero from "../components/WeatherHero";
import CitySearch from "../components/CitySearch";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function WeatherHome() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<OpenWeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [forecast, setForecast] = useState<OpenWeatherForecastResponse | null>(
    null,
  );

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // For Current Weather data
        const [weatherResponse, forecastResponse] = await Promise.all([
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
          ),
          fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`,
          ),
        ]);

        if (!weatherResponse.ok || !forecastResponse.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        setWeather(weatherData);
        setForecast(forecastData);
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
      <CitySearch onSearch={setCity} isLoading={isLoading} />
      <h1>hello</h1>

      {isLoading && <p className="text-xl">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!isLoading && weather && forecast && (
        <>
          <WeatherHero weather={weather} />
          <WeatherStats weather={weather} />
          <ForecastList forecast={forecast} />
        </>
      )}
    </div>
  );
}

export default WeatherHome;
