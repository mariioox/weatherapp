import type { OpenWeatherResponse } from "../types/openWeather";

type Props = {
  weather: OpenWeatherResponse;
};

function WeatherHero({ weather }: Props) {
  const condition = weather.weather[0];

  // Changes gradient bg according to temp.
  const gradientClass =
    Math.round(weather.main.temp) < 15
      ? "bg-gradient-to-r from-blue-600 to-sky-300"
      : "bg-gradient-to-r from-orange-500 to-yellow-300";

  return (
    <div className={`text-white rounded-xl p-6 shadow-md ${gradientClass}`}>
      <div className="flex items-center justify-between">
        {/* Left: Location + Condition */}
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="text-lg capitalize">{condition.description}</p>
        </div>

        {/* Right: Temperature + Icon */}
        <div className="flex items-center gap-4">
          <img
            src={`https://openweathermap.org/img/wn/${condition.icon}@2x.png`}
            alt={condition.description}
            className="w-20 h-20"
          />
          <span className="text-5xl font-bold">
            {Math.round(weather.main.temp)}°
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherHero;
