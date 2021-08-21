import { FormButton, LocationButton, StyledFieldset, TitleBanner } from './styled_elements';
import { CURRENT_WEATHER, HOURLY_FORECAST, DAILY_FORECAST, LOCATING_STATUS } from './constants';
import { geoFindMe } from './localisation.js' 
import Autocompleteinput from './AutocompleteInput'

// React element where user puts their request.
export default function UserInputContent({cityName, setCity, requestType, setRequestType, fetchWeather})
{
    const getLocation = () => {
        geoFindMe(setCity)
    }

    const getLocationButton = <LocationButton onClick={getLocation}> Get your location</LocationButton>
   
    return (<>
        <TitleBanner>Weather Application</TitleBanner>
        <StyledFieldset>
          <legend>City</legend>
          <label htmlFor="city">
            {getLocationButton}
            <Autocompleteinput
              cityName={cityName}
              setCity={setCity}
            >
            </Autocompleteinput>
          </label>
        </StyledFieldset>
        <StyledFieldset>
          <legend>Timespan</legend>
          <label>
            <input
              type="radio"
              name="length"
              checked={requestType === CURRENT_WEATHER}
              onChange={(e) => setRequestType(CURRENT_WEATHER)}
            />
            Realtime weather
          </label>
          <label>
            <input
              type="radio"
              name="length"
              checked={requestType === HOURLY_FORECAST}
              onChange={(e) => setRequestType(HOURLY_FORECAST)}
            />
            Hourly forecast
          </label>
          <label>
            <input
              type="radio"
              name="length"
              checked={requestType === DAILY_FORECAST}
              onChange={(e) => setRequestType(DAILY_FORECAST)}
            />
            Daily forecast
          </label>
        </StyledFieldset>
        <FormButton type="submit" onClick={fetchWeather} disabled={cityName === '' || cityName === LOCATING_STATUS}>
            Send weather request
        </FormButton>
    </>)
}
