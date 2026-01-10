import type { OpenWeatherForecastResponse } from "../types/OpenWeatherForecast";
import type { OpenWeatherResponse } from "../types/openWeather";
import WeatherStats from "../components/WeatherStats";
import ForecastList from "../components/ForecastList";
import WeatherHero from "../components/WeatherHero";
import CitySearch from "../components/CitySearch";
import { useEffect, useState } from "react";

function WeatherHome() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<OpenWeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const API_KEY = "b95036906081f2d653626c50a0e0ec51";
  const [forecast, setForecast] = useState<OpenWeatherForecastResponse | null>(
    null
  );

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // For Current Weather data
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!weatherResponse.ok) {
          throw new Error("Failed to fetch weather");
        }

        const weatherData = await weatherResponse.json();
        setWeather(weatherData);

        // For Forecast data
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!forecastResponse.ok) {
          throw new Error("Failed to fetch forecast");
        }

        const forecastData = await forecastResponse.json();
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
      {/* Location */}
      <CitySearch onSearch={setCity} />

      {isLoading && <p>Loading...</p>}
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
