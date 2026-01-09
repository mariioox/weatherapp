import type { ForecastItem } from "../types/weather";

type Props = {
  forecast: ForecastItem[];
};

function ForecastList({ forecast }: Props) {
  return (
    <div className="flex gap-4 overflow-x-auto">
      {forecast.map((item, index) => (
        <div
          key={index}
          className="min-w-[100px] rounded-lg border p-3 text-center"
        >
          <p className="text-sm">{item.time}</p>

          <img
            src={`https://openweathermap.org/img/wn/${item.icon}.png`}
            alt={item.condition}
            className="mx-auto"
          />

          <p className="font-semibold">{item.temperature}°C</p>
        </div>
      ))}
    </div>
  );
}

export default ForecastList;
