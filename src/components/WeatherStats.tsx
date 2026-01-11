import type { OpenWeatherResponse } from "../types/openWeather";

type Props = {
  weather: OpenWeatherResponse;
};

function WeatherStats({ weather }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Stat
        label="Feels Like"
        value={`${Math.round(weather.main.feels_like)}°C`}
      />
      <Stat label="Humidity" value={`${weather.main.humidity}%`} />
      <Stat label="Wind Speed" value={`${weather.wind.speed} m/s`} />
      <Stat label="Pressure" value={`${weather.main.pressure} hPa`} />
    </div>
  );
}

type StatProps = {
  label: string;
  value: string;
};

function Stat({ label, value }: StatProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}

export default WeatherStats;
