import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { regularTheme, darkTheme, GlobalStyle, ThemeChangeButton, FormWrapper, RequestForm, InfoWrapper } from './styled_elements';
import { CURRENT_WEATHER, HOURLY_FORECAST} from './constants';
import UserInputContent from './UserInputContent';
import { handleWeatherRequstCurrent, handleWeatherRequstHour, handleWeatherRequstDaily } from './weather_connections';
import LoaderObject from './loader';

// Main React element.
export default function App() 
{
  const [themeValue, setTheme] = useState(regularTheme)
  const toggleTheme = () => setTheme(themeValue === regularTheme ? darkTheme : regularTheme)
  const toggleButton = <ThemeChangeButton onClick={toggleTheme}>Change theme</ThemeChangeButton>

  const [infoContent, setInfoContent] = useState()
  const [cityName, setCity] = useState("")
  const [requestType, setRequestType] = useState(CURRENT_WEATHER)

  const [gifCache, setGifCache] = useState({})
  const [weatherCacheCurrent, setWeatherCacheCurrent] = useState({})
  const [weatherCacheHour, setWeatherCacheHour] = useState({})
  const [weatherCacheDaily, setWeatherCacheDaily] = useState({})

  const weatherRequst = (e) => {
    e.preventDefault()
    setInfoContent(<LoaderObject/>)

    if (requestType === CURRENT_WEATHER)
    {
      handleWeatherRequstCurrent(cityName, setInfoContent, setCity, weatherCacheCurrent, 
        setWeatherCacheCurrent, gifCache, setGifCache)
    }
    else if (requestType === HOURLY_FORECAST)
    {
      handleWeatherRequstHour(cityName, setInfoContent, setCity, weatherCacheHour, 
        setWeatherCacheHour, gifCache, setGifCache)
    }
    else
    {
      handleWeatherRequstDaily(cityName, setInfoContent, setCity, weatherCacheDaily, 
        setWeatherCacheDaily, gifCache, setGifCache)
    }
  }

  return (
    <ThemeProvider theme={themeValue}>
      <GlobalStyle />
        <FormWrapper>
          <RequestForm onSubmit={(e) => e.preventDefault()}>
            <UserInputContent
              cityName={cityName}
              setCity={setCity}
              requestType={requestType}
              setRequestType={setRequestType}
              fetchWeather={weatherRequst}
              setInfoContent={setInfoContent}
            >
            </UserInputContent>
            <InfoWrapper>
              {infoContent}
            </InfoWrapper>
            {toggleButton}
          </RequestForm>
        </FormWrapper>
    </ThemeProvider>
  )
}

