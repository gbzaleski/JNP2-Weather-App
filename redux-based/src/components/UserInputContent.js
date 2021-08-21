import { FormButton, StyledFieldset, TitleBanner } from '../styledElements';
import { LOCATING_STATUS } from '../constants';
import LocationButtonRedux from './LocationButtonRedux.js';
import Autocompleteinput from './AutocompleteInput';
import { useDispatch, useSelector } from 'react-redux';
import { setRealtime, setHourly, setDaily } from '../timespan/actions';
import { timespanSelector } from '../timespan/selectors';
import { CURRENT_WEATHER, HOURLY_FORECAST, DAILY_FORECAST} from '../timespan/constants';
import { locationSelector } from '../locationTips/selectors';
import { requestWeather } from '../weather/actions';

// React element where user inserts their request.
export default function UserInputContent()
{
  const dispatch = useDispatch()
  const timespanStatus = useSelector(timespanSelector)
  const location = useSelector(locationSelector)
  const fetchWeather = () => dispatch(requestWeather(location, timespanStatus))
  
  return (<>
      <TitleBanner>Weather Application</TitleBanner>
      <StyledFieldset>
        <legend>City</legend>
        <label htmlFor="city">
          <LocationButtonRedux/>
          <Autocompleteinput/>
        </label>
      </StyledFieldset>
      <StyledFieldset>
        <legend>Timespan</legend>
        <label>
          <input
            type="radio"
            name="length"
            checked={timespanStatus === CURRENT_WEATHER}
            onChange={() => dispatch(setRealtime())}
          />
          Realtime weather
        </label>
        <label>
          <input
            type="radio"
            name="length"
            checked={timespanStatus === HOURLY_FORECAST}
            onChange={() => dispatch(setHourly())}
          />
          Hourly forecast
        </label>
        <label>
          <input
            type="radio"
            name="length"
            checked={timespanStatus === DAILY_FORECAST}
            onChange={() => dispatch(setDaily())}
          />
          Daily forecast
        </label>
      </StyledFieldset>
      <FormButton 
        type="submit" 
        disabled={location === "" || location === LOCATING_STATUS}
        onClick={fetchWeather} 
      >
        Send weather request
      </FormButton>
  </>)
}
