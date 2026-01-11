import type { OpenWeatherForecastResponse } from "../types/OpenWeatherForecast";

type Props = {
  forecast: OpenWeatherForecastResponse;
};

function ForecastList({ forecast }: Props) {
  return (
    <div className="overflow-x-auto">
      <ul className="flex gap-4">
        {forecast.list.slice(0, 8).map((item) => {
          const condition = item.weather[0];
          const time = new Date(item.dt * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <li
              key={item.dt}
              className="min-w-[120px] bg-white rounded-lg p-4 text-center shadow-sm"
            >
              <p className="text-sm text-gray-500">{time}</p>

              <img
                src={`https://openweathermap.org/img/wn/${condition.icon}.png`}
                alt={condition.description}
                className="mx-auto"
              />

              <p className="font-semibold">{Math.round(item.main.temp)}°</p>

              <p className="text-xs capitalize text-gray-500">
                {condition.main}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ForecastList;
