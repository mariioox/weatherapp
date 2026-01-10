// import type { CurrentWeather } from "../types/weather";

// type Props = {
//   current: CurrentWeather;
// };

// function WeatherHero({ current }: Props) {
//   return (
//     <div className="flex items-center gap-6">
//       <img
//         src={`https://openweathermap.org/img/wn/${current.icon}@2x.png`}
//         alt={current.condition}
//       />

//       <div>
//         <h1 className="text-5xl font-bold">{current.temperature}°C</h1>

//         <p className="text-lg text-muted-foreground">{current.condition}</p>

//         <p className="text-sm">Feels like {current.feelsLike}°C</p>
//       </div>
//     </div>
//   );
// }

// export default WeatherHero;

import type { OpenWeatherResponse } from "../types/openWeather";

type Props = {
  weather: OpenWeatherResponse;
};

function WeatherHero({ weather }: Props) {
  return (
    <div>
      <h1 className="mr-10">{weather.name}</h1>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      />
      <p>{weather.main.temp}°C</p>
      <p className="text-xl">{weather.weather[0].main}</p>
    </div>
  );
}

export default WeatherHero;
