import React from 'react';
import { useSelector } from 'react-redux';
import { weatherSelector } from '../weather/selectors';
import { NICE_THRESHOLD, PASSABLE_THRESHOLD } from '../constants';
import { HorizontalLine } from '../styledElements';

// React element for display weather request for daily forecast.
export default function DailyWeatherBoard()
{
    const weather = useSelector(weatherSelector)

    const header = <>
        <h2>Location: {weather.location}</h2>
        <h2>Nicometer: {weather.nicometer >= NICE_THRESHOLD ? "Nice" :
        weather.nicometer >= PASSABLE_THRESHOLD ? "Passable" : "Not nice"
        }</h2>
    </>

    return weather.data.map((value, i) => {
        const weatherDescription = value.day.condition.text
        return(<>
        {i === 0 ? header : ""}
        <HorizontalLine/>
        <p>{value.date}</p>
        <p>Temperature: {value.day.mintemp_c} - {value.day.maxtemp_c}°C</p>
        <p>Weather: {weatherDescription}</p>
        <p><img alt="Weather icon" src={value.day.condition.icon}></img></p>
        </>)
    })
}