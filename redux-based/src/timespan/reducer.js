import { CURRENT_WEATHER, HOURLY_FORECAST, DAILY_FORECAST } from './constants'
import { fromJS } from 'immutable';

export const TIMESPAN_REDUCER_NAME = "TimespanReducer";

const initialState = fromJS({
    timespan: CURRENT_WEATHER
});

export const timespanReducer = (state = initialState, action) => {
    switch (action.type) 
    {
        case CURRENT_WEATHER:
            return state.set('timespan', CURRENT_WEATHER)

        case HOURLY_FORECAST:
            return state.set('timespan', HOURLY_FORECAST)

        case DAILY_FORECAST:
            return state.set('timespan', DAILY_FORECAST)

        default:
            return state;
    }
};