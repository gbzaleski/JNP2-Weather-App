import { WEATHER_REQUEST, FETCH_WEATHER} from './constants'

export const requestWeather = (location, timespan) => ({
    type: WEATHER_REQUEST,
    location: location,
    timespan: timespan
})

export const fetchWeather = (weather) => ({
    type: FETCH_WEATHER,
    weather: weather,
    description: weather.current.condition.text
})