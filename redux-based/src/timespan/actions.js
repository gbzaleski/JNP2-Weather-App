import {CURRENT_WEATHER, HOURLY_FORECAST, DAILY_FORECAST } from './constants'

export const setRealtime = () => ({
    type: CURRENT_WEATHER
});

export const setHourly = () => ({
    type: HOURLY_FORECAST
});

export const setDaily = () => ({
    type: DAILY_FORECAST
});
