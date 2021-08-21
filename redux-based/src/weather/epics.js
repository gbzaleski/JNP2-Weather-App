import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap, takeUntil } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { LINK_CURRENT, LINK_FORECAST, WEATHER_REQUEST, 
    DAYS_BUFFER_FOR_HOURLY, EVENTS_TO_SHOW_DAILY } from './constants';
import { TIME_RANGE_S, TO_SECONDS, MAX_NICE_TEMPERATURE, MIN_NICE_TEMPERATURE, 
    MAX_NICE_AVG_TEMPERATURE, MIN_NICE_AVG_TEMPERATURE, RAIN_NAME} from './constants';
import { fetchWeather } from './actions';
import { WEATHER_API_KEY } from '../confidential';
import { LOCATION_INPUT } from '../locationTips/constants'
import { CURRENT_WEATHER, HOURLY_FORECAST, DAILY_FORECAST} from '../timespan/constants'

const getLink = (location, timespan) => {
    return timespan === CURRENT_WEATHER ?
        `${LINK_CURRENT}.json?key=${WEATHER_API_KEY}&q=${location}`
    : timespan === HOURLY_FORECAST ?
        `${LINK_FORECAST}.json?key=${WEATHER_API_KEY}&q=${location}&days=${DAYS_BUFFER_FOR_HOURLY}&aqi=no&alerts=no`
    :
        `${LINK_FORECAST}.json?key=${WEATHER_API_KEY}&q=${location}&days=${EVENTS_TO_SHOW_DAILY}&aqi=no&alerts=no`
}

const castWeather = (weather, timespan) => {
    if (timespan === CURRENT_WEATHER)
    {
        return weather
    }

    if (timespan === HOURLY_FORECAST)
    {
      let datasetRaw = weather.forecast.forecastday[0].hour;
      for (let i = 1; i < weather.forecast.forecastday.length; ++i)
      {
        datasetRaw = datasetRaw.concat(weather.forecast.forecastday[i].hour)
      }
      const time = new Date()
      const currentTime = time.getTime() / TO_SECONDS
      const maxTimeRange = currentTime + TIME_RANGE_S

      return datasetRaw.filter((ele) => {
          return currentTime < ele.time_epoch && ele.time_epoch <= maxTimeRange
      })
    }

    if (timespan === DAILY_FORECAST)
    {
       return weather.forecast.forecastday
    }

    return {}
}

// Calculating nicesness of weather.
const getNiceness = (weather, timespan) => {
    if (timespan === CURRENT_WEATHER)
        return undefined

    // Nice indicators.
    let isRain = false
    let averageTemperature = 0
    let maxTemperature = MAX_NICE_TEMPERATURE
    let minTemperature = MIN_NICE_TEMPERATURE

    if (timespan === HOURLY_FORECAST)
    {
        weather.forEach((ele) => {
            isRain = isRain || ele.condition.text.toLowerCase().includes(RAIN_NAME)
            averageTemperature += ele.temp_c
            maxTemperature = Math.max(maxTemperature, ele.temp_c)
            minTemperature = Math.min(minTemperature, ele.temp_c)
        })
    }
    else 
    {
        weather.forEach((ele) => {
            const day = ele.day
            isRain = isRain || day.condition.text.toLowerCase().includes(RAIN_NAME)
            averageTemperature += day.avgtemp_c
            maxTemperature = Math.max(maxTemperature, day.maxtemp_c)
            minTemperature = Math.min(minTemperature, day.mintemp_c)
        })
    }
    averageTemperature /= weather.length
  
    return (isRain ? 0 : 1)
        + (MIN_NICE_AVG_TEMPERATURE <= averageTemperature && averageTemperature <= MAX_NICE_AVG_TEMPERATURE)
        + (MIN_NICE_TEMPERATURE <= minTemperature && maxTemperature <= MAX_NICE_TEMPERATURE)
}

const castTimespan = (weather) => {
    return weather.forecast ?
        weather.forecast.forecastday.length === DAYS_BUFFER_FOR_HOURLY ? HOURLY_FORECAST
        : DAILY_FORECAST
    : CURRENT_WEATHER
}

const castLocation = (weather) => {
    return `${weather.location.name}, ${weather.location.country}`
}

export const fetchWeatherEpic = (action$) => {
   return action$.pipe(
        ofType(WEATHER_REQUEST),
        mergeMap(action =>
            ajax.getJSON(getLink(action.location, action.timespan))
                .pipe(
                    map(fetchWeather),
                    map(ele => {
                        const timespanStatus = castTimespan(ele.weather)
                        const parsedWeather = castWeather(ele.weather, timespanStatus)
                        return {
                            type: ele.type, 
                            description: ele.description,
                            timespan: timespanStatus,
                            nicometer: getNiceness(parsedWeather, timespanStatus),
                            location: castLocation(ele.weather),
                            data: parsedWeather,
                    }}),
                    catchError(() => EMPTY),
                    takeUntil(
                        action$.pipe(
                            ofType(LOCATION_INPUT),
                        )
                    )
                )
            )
    )
}