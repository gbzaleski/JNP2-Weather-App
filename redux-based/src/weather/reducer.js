import { fromJS } from 'immutable';
import { WEATHER_REQUEST, FETCH_WEATHER} from './constants';

export const WEATHER_REDUCER_NAME = "WeatherReducer";

const initialState = fromJS({
    showData: false,
    showLoader: false,
    weather: {},
})

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) 
    {
        case WEATHER_REQUEST:
            return state.set("showLoader", true).set("showData", false)

        case FETCH_WEATHER:
            return state.set("showLoader", false).set("weather", action).set("showData", true)

        default:
            return state
    }
}