import { createSelector } from 'reselect';
import { prop } from 'ramda';
import { WEATHER_REDUCER_NAME } from './reducer';

export const getWeatherReducerState = prop(WEATHER_REDUCER_NAME)

export const weatherSelector = createSelector(
    getWeatherReducerState,
    (state) => state.get("weather")
)

export const showDataSelector = createSelector(
    getWeatherReducerState,
    (state) => state.get("showData")
)

export const whetherShowLoaderSelector = createSelector(
    getWeatherReducerState,
    (state) => state.get("showLoader")
)

