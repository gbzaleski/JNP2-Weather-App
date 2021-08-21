import React from 'react';
import { useSelector } from 'react-redux';
import { weatherSelector } from '../weather/selectors';
import { NICE_THRESHOLD, PASSABLE_THRESHOLD, DATE_PREFIX } from '../constants';
import { HorizontalLine } from '../styledElements';

// React element for display weather request for hourly forecast.
export default function HourlyWeatherBoard()
{
    const weather = useSelector(weatherSelector)

    const header = <>
        <h2>Location: {weather.location}</h2>
        <h2>Nicometer: {weather.nicometer >= NICE_THRESHOLD ? "Nice" :
            weather.nicometer >= PASSABLE_THRESHOLD ? "Passable" : "Not nice"
        }</h2>
    </>

    return weather.data.map((value, i) => {
        const weatherDescription = value.condition.text
        return(<>
            {i === 0 ? header : ""}
            <HorizontalLine/>
            <p>{value.time.slice(DATE_PREFIX)}</p>
            <p>Temperature: {value.temp_c}°C</p>
            <p>Weather: {weatherDescription}</p>
            <p><img alt="weather icon" src={value.condition.icon}></img></p>
        </>)
    })
}