import React from 'react';
import { useSelector } from 'react-redux';
import { weatherSelector } from '../weather/selectors';
import GifElement from './GifElement';

// React element displaying weather request for current weather.
export default function CurrentWeatherBoard()
{
  const weather = useSelector(weatherSelector)

  return(<>
    <p>Location: {weather.location}</p>
    <p>Temperature: {weather.data.current.temp_c}°C</p>
    <p>Weather: {weather.description}</p>
    <GifElement 
      gifDescription={weather.description} 
    >
    </GifElement>
  </>)
}