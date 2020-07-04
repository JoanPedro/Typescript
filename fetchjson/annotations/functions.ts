const add = (a: number, b: number): number => {
  return a + b;
};

const multiple: (a: number, b: number) => number = (a: number, b: number) => {
  return a * b;
};

const subtract = (a: number, b: number) => {
  a - b;
};

function divider(a: number, b: number): number {
  return a / b;
};

const logger = (message: string): void => {
  console.log(message)
};

const throwError = (message: string): never => {
  throw new Error(message)
};

const throwErrorOrMessage = (message?: string): string => {
  if (!message) throw new Error(message)
  return message;
};

const todayWeather = {
  date: new Date(),
  weather: 'Sunny'
}

interface Forecast {
  date: Date,
  weather: string
}

const orLogWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date, forecast.weather);
}

const eqLogWeather = (forecast: Forecast): void => {
  console.log(forecast.date, forecast.weather);
};

const desLogWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date, weather);
}

add(1, 1);
subtract(2, 1);
multiple(1, 1);
divider(2, 2);
logger('Typescript @types');
// throwError('Missign param');
throwErrorOrMessage('Message');
eqLogWeather(todayWeather);
orLogWeather(todayWeather);
desLogWeather(todayWeather);
throwErrorOrMessage();