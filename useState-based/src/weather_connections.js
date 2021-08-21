import { API_KEY } from './confidential';
import { LINK_CURRENT, LINK_FORECAST, TIME_RANGE_S, TO_SECONDS,
   DATE_PREFIX, MAX_NICE_TEMPERATURE, MIN_NICE_TEMPERATURE, 
   MAX_NICE_AVG_TEMPERATURE, MIN_NICE_AVG_TEMPERATURE, NICE_THRESHOLD,
   PASSABLE_THRESHOLD, RAIN_NAME, DAYS_BUFFER_FOR_HOURLY, EVENTS_TO_SHOW_DAILY } from './constants';
import { HorizontalLine } from './styled_elements';
import GifElement from './GifElement';

// Module for funtions getting weather information (from cashe or API).

// For realtime weather.
export const handleWeatherRequstCurrent = (cityName, setInfoContent, setCity, weatherCache, 
  setWeatherCache, gifCache, setGifCache) => {

    const insertInfoContent = (result) => {
      setInfoContent(<>
        <p>Location: {result.location.name}</p>
        <p>Temperature: {result.current.temp_c}°C</p>
        <p>Weather: {result.current.condition.text}</p>
        <p><img alt="weather icon" src={result.current.condition.icon}></img></p>
        <GifElement 
          gifDescription={result.current.condition.text} 
          gifCache={gifCache}
          setGifCache={setGifCache}
        >
        </GifElement>
      </>)
    }

    const connection = `${LINK_CURRENT}.json?key=${API_KEY}&q=${cityName}&aqi=no`

    if (weatherCache[connection])
    {
      const result = weatherCache[connection]
      insertInfoContent(result)
      setCity("")
      return
    }

    fetch(connection)
      .then(res => res.json())  
      .then(result => {
        
        if (result.error)
        {
          setInfoContent()
          alert("Error occured")
          return
        }

        insertInfoContent(result)
        setWeatherCache({...weatherCache, [connection]: result})
      })
}

// For the next hours.
export const handleWeatherRequstHour = (cityName, setInfoContent, setCity, 
  weatherCache, setWeatherCache, gifCache, setGifCache) => {

  const connection = `${LINK_FORECAST}.json?key=${API_KEY}&q=${cityName}&days=${DAYS_BUFFER_FOR_HOURLY}&aqi=no&alerts=no`

  if (weatherCache[connection])
  {
    setInfoContent(<>{weatherCache[connection]}</>)
    setCity("")
    return
  }

  fetch(connection)
    .then(res => res.json())  
    .then(result => {
      
      if (result.error)
      {
        setInfoContent()
        alert("Error occured")
        return
      }
      
      // Filter data only for the next constanst set number of hours.
      let datasetRaw = result.forecast.forecastday[0].hour;
      for (let i = 1; i < result.forecast.forecastday.length; ++i)
      {
        datasetRaw = datasetRaw.concat(result.forecast.forecastday[i].hour)
      }

      const time = new Date()
      const currentTime = time.getTime() / TO_SECONDS
      const maxTimeRange = currentTime + TIME_RANGE_S

      const weatherDatasetUtil = datasetRaw.filter((ele) => {
          return currentTime < ele.time_epoch && ele.time_epoch <= maxTimeRange
      })

      // Nice indicators.
      let isRain = false
      let averageTemperature = 0
      let maxTemperature = MAX_NICE_TEMPERATURE
      let minTemperature = MIN_NICE_TEMPERATURE

      weatherDatasetUtil.forEach((ele) => {
        isRain = isRain || ele.condition.text.toLowerCase().includes(RAIN_NAME)
        averageTemperature += ele.temp_c
        maxTemperature = Math.max(maxTemperature, ele.temp_c)
        minTemperature = Math.min(minTemperature, ele.temp_c)
      })
      averageTemperature /= weatherDatasetUtil.length

      const niceness = (isRain ? 0 : 1)
        + (MIN_NICE_AVG_TEMPERATURE <= averageTemperature && averageTemperature <= MAX_NICE_AVG_TEMPERATURE)
        + (MIN_NICE_TEMPERATURE <= minTemperature && maxTemperature <= MAX_NICE_TEMPERATURE)

      const header = <>
          <h2>Location: {result.location.name}</h2>
          <h2>Nicometer: {niceness >= NICE_THRESHOLD ? "Nice" :
            niceness >= PASSABLE_THRESHOLD ? "Passable" : "Not nice"
          }</h2>
        </>

      const show = weatherDatasetUtil.map((value, i) => {
        const weatherDescription = value.condition.text
        return(<>
          {i === 0 ? header : ""}
          <HorizontalLine/>
          <p>{value.time.slice(DATE_PREFIX)}</p>
          <p>Temperature: {value.temp_c}°C</p>
          <p>Weather: {weatherDescription}</p>
          <p><img alt="weather icon" src={value.condition.icon}></img></p>
          <GifElement 
            gifDescription={weatherDescription} 
            gifCache={gifCache}
            setGifCache={setGifCache}
          >
          </GifElement>
        </>)
      })

      setWeatherCache({...weatherCache, [connection]: show})
      setInfoContent(<>{show}</>)
      setCity("")
    })
}

// For the next days.
export const handleWeatherRequstDaily = (cityName, setInfoContent, setCity,
  weatherCache, setWeatherCache, gifCache, setGifCache) => {

  const connection = `${LINK_FORECAST}.json?key=${API_KEY}&q=${cityName}&days=${EVENTS_TO_SHOW_DAILY}&aqi=no&alerts=no`

  if (weatherCache[connection])
  {
    setInfoContent(<>{weatherCache[connection]}</>)
    setCity("")
    return
  }

  fetch(connection)
      .then(res => res.json())  
      .then(result => {
        
        if (result.error)
        {
          setInfoContent()
          alert("Error occured")
          return
        }

        const weatherDataset = result.forecast.forecastday

         // Nice indicators.
         let isRain = false
         let averageTemperature = 0
         let maxTemperature = MAX_NICE_TEMPERATURE
         let minTemperature = MIN_NICE_TEMPERATURE
 
         weatherDataset.forEach((ele) => {
           const day = ele.day
           isRain = isRain || day.condition.text.toLowerCase().includes(RAIN_NAME)
           averageTemperature += day.avgtemp_c
           maxTemperature = Math.max(maxTemperature, day.maxtemp_c)
           minTemperature = Math.min(minTemperature, day.mintemp_c)
         })
         averageTemperature /= weatherDataset.length
 
         const niceness = (isRain ? 0 : 1)
           + (MIN_NICE_AVG_TEMPERATURE <= averageTemperature && averageTemperature <= MAX_NICE_AVG_TEMPERATURE)
           + (MIN_NICE_TEMPERATURE <= minTemperature && maxTemperature <= MAX_NICE_TEMPERATURE)
 
         const header = <>
            <h2>Location: {result.location.name}</h2>
            <h2>Nicometer: {niceness >= NICE_THRESHOLD ? "Nice" :
              niceness >= PASSABLE_THRESHOLD ? "Passable" : "Not nice"
            }</h2>
           </>

        const show = weatherDataset.map((value, i) => {
          const weatherDescription = value.day.condition.text
          return(<>
            {i === 0 ? header : ""}
            <HorizontalLine/>
            <p>{value.date}</p>
            <p>Temperature: {value.day.mintemp_c} - {value.day.maxtemp_c}°C</p>
            <p>Weather: {weatherDescription}</p>
            <p><img alt="weather icon" src={value.day.condition.icon}></img></p>
            <GifElement 
              gifDescription={weatherDescription}
              gifCache={gifCache}
              setGifCache={setGifCache}
            >
            </GifElement>
          </>)
        })

      setWeatherCache({...weatherCache, [connection]: show})
      setInfoContent(<>{show}</>)
      setCity("")
      })
}