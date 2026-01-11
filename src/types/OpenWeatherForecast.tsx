export type OpenWeatherForecastResponse = {
  list: {
    dt: number;
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: {
      main: string;
      icon: string;
      description: string;
    }[];
  }[];
};
