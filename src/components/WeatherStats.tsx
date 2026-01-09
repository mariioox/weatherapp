import type { CurrentWeather } from "../types/weather";

type Props = {
  current: CurrentWeather;
};

function WeatherStats({ current }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <Stat label="Humidity" value={`${current.humidity}%`} />
      <Stat label="Wind" value={`${current.windSpeed} m/s`} />
      <Stat label="Pressure" value={`${current.pressure} hPa`} />
      <Stat label="Feels Like" value={`${current.feelsLike}°C`} />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border p-4 text-center">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}

export default WeatherStats;
