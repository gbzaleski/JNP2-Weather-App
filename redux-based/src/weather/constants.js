
// Settings:
const EVENTS_TO_SHOW_HOURLY_INPUT = 3;

const EVENTS_TO_SHOW_DAILY_INPUT = 3;
// -------------------------

export const WEATHER_REQUEST = "weather-request";

export const FETCH_WEATHER = "fetch-weather";

export const LINK_CURRENT = "http://api.weatherapi.com/v1/current";

export const LINK_FORECAST = "http://api.weatherapi.com/v1/forecast";

export const TO_SECONDS = 1000

export const TIME_RANGE_S = EVENTS_TO_SHOW_HOURLY_INPUT * 60 * 60;

export const DATE_PREFIX = 10;

export const DAYS_BUFFER_FOR_HOURLY = 1 + Math.ceil(EVENTS_TO_SHOW_HOURLY_INPUT / 24);

export const MAX_NICE_TEMPERATURE = 30;

export const MIN_NICE_TEMPERATURE = 15;

export const MAX_NICE_AVG_TEMPERATURE = 25;

export const MIN_NICE_AVG_TEMPERATURE = 18;

// Daily forecast should cover a larger timespan than hourly.
export const EVENTS_TO_SHOW_DAILY 
    = Math.max(EVENTS_TO_SHOW_DAILY_INPUT, DAYS_BUFFER_FOR_HOURLY + 1)

export const NICE_THRESHOLD = 3;

export const PASSABLE_THRESHOLD = 2;

export const RAIN_NAME = "rain";

