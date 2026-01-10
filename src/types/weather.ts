export type CurrentWeather = {
  location: string;
  temperature: number;   // Celsius
  feelsLike: number;     // Celsius
  condition: string;     // "Clear", "Rain", etc.
  icon: string;          // API icon code
  humidity: number;      // %
  windSpeed: number;     // m/s
  pressure: number;      // hPa
};

export type ForecastItem = {
  time: string;          // "12 PM", "Mon"
  temperature: number;   // Celsius
  condition: string;     // "Clouds"
  icon: string;          // API icon code
};

export type WeatherData = {
  current: CurrentWeather;
  forecast: ForecastItem[];
};
