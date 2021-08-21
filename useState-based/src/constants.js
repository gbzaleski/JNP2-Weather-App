// Constants used in project.

export const CURRENT_WEATHER = "current-weather";

export const HOURLY_FORECAST = "hourly-forecast";

export const DAILY_FORECAST = "daily-forecast";

export const LINK_CURRENT = "http://api.weatherapi.com/v1/current";

export const LINK_FORECAST = "http://api.weatherapi.com/v1/forecast";

export const LINK_AUTOCOMPLETE = "http://api.weatherapi.com/v1/search";

export const LINK_GIFS = "https://api.tenor.com/v1/search";

export const TO_SECONDS = 1000

const EVENTS_TO_SHOW_HOURLY = 3;

export const TIME_RANGE_S = EVENTS_TO_SHOW_HOURLY * 60 * 60;

export const DATE_PREFIX = 10;

export const DAYS_BUFFER_FOR_HOURLY = 1 + Math.ceil(EVENTS_TO_SHOW_HOURLY / 24);

export const MAX_NICE_TEMPERATURE = 30;

export const MIN_NICE_TEMPERATURE = 15;

export const MAX_NICE_AVG_TEMPERATURE = 25;

export const MIN_NICE_AVG_TEMPERATURE = 18;

export const NICE_THRESHOLD = 3;

export const PASSABLE_THRESHOLD = 2;

export const RAIN_NAME = "rain";

export const EVENTS_TO_SHOW_DAILY = 3;

export const LOADING_GIF_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ajux_loader.gif/600px-Ajux_loader.gif";

export const GIF_SWITCH_TIME_MS = 30000;

export const LOCATING_STATUS = "Locating…";