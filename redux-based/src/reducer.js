import { combineReducers } from 'redux';
import { GIF_REDUCER_NAME, gifReducer } from './gif/reducer';
import { TIMESPAN_REDUCER_NAME, timespanReducer } from './timespan/reducer';
import { LOCATION_TIPS_REDUCER_NAME, locationTipsReducer } from './locationTips/reducer';
import { WEATHER_REDUCER_NAME, weatherReducer } from './weather/reducer';
import { THEME_REDUCER_NAME, themeReducer } from './theming/reducer';

export default function createReducer() 
{
    return combineReducers({
        [GIF_REDUCER_NAME]: gifReducer,
        [TIMESPAN_REDUCER_NAME]: timespanReducer,
        [LOCATION_TIPS_REDUCER_NAME]: locationTipsReducer,
        [WEATHER_REDUCER_NAME]: weatherReducer,
        [THEME_REDUCER_NAME]: themeReducer,
    });
}