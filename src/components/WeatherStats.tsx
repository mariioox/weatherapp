// import type { OpenWeatherResponse } from "../types/openWeather";

// type Props = {
//   weather: OpenWeatherResponse;
// };

// function WeatherStats({ weather }: Props) {
//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//       <Stat label="Humidity" value={`${current.humidity}%`} />
//       <Stat label="Wind" value={`${current.windSpeed} m/s`} />
//       <Stat label="Pressure" value={`${current.pressure} hPa`} />
//       <Stat label="Feels Like" value={`${current.feelsLike}°C`} />
//     </div>
//   );
// }

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="rounded-lg border p-4 text-center">
//       <p className="text-sm text-muted-foreground">{label}</p>
//       <p className="text-lg font-semibold">{value}</p>
//     </div>
//   );
// }

// export default WeatherStats;

import type { OpenWeatherResponse } from "../types/openWeather";

type Props = {
  weather: OpenWeatherResponse;
};

function WeatherStats({ weather }: Props) {
  return (
    <div>
      <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Pressure: {weather.main.pressure} hPa</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherStats;
