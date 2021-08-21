import React from 'react';
import { useSelector } from 'react-redux';
import { weatherSelector } from '../weather/selectors';
import { CURRENT_WEATHER, DAILY_FORECAST, HOURLY_FORECAST } from '../timespan/constants';
import CurrentWeatherBoard from './CurrentWeatherBoard';
import HourlyWeatherBoard from './HourlyWeatherBoard';
import DailyWeatherBoard from './DailyWeatherBoard';

// React element for showing fetched information.
export default function ContentHolder()
{
    const weather = useSelector(weatherSelector)

    return(<>
        {weather.timespan === CURRENT_WEATHER && <CurrentWeatherBoard/>}
        {weather.timespan === HOURLY_FORECAST && <HourlyWeatherBoard/>}
        {weather.timespan === DAILY_FORECAST && <DailyWeatherBoard/>}
    </>)
}