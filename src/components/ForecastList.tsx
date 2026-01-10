import type { OpenWeatherForecastResponse } from "../types/OpenWeatherForecast";

type Props = {
  forecast: OpenWeatherForecastResponse;
};

function ForecastList({ forecast }: Props) {
  return (
    <ul className="space-y-2">
      {forecast.list.slice(0, 5).map((item) => (
        <li key={item.dt}>
          <span>{item.dt_txt}</span> <span>{Math.round(item.main.temp)}°C</span>{" "}
          <span>{item.weather[0].main}</span>
        </li>
      ))}
    </ul>
  );
}

export default ForecastList;
