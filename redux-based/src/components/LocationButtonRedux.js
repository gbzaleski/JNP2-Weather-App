import { LocationButton } from '../styledElements';
import { LOCATING_STATUS } from '../constants';
import { useDispatch } from 'react-redux';
import { chooseTip } from '../locationTips/actions';

// Element for obtaing and setting user location to their current geographical position.
export default function LocationButtonRedux()
{
    const dispatch = useDispatch()

    // Javascript function for obtaining user's location.
    const setRealPosition = () =>
    {
        const success = (position) => {
            const latitude  = position.coords.latitude
            const longitude = position.coords.longitude
            dispatch(chooseTip((`${latitude}, ${longitude}`)))
        }

        const error = () => {
            alert('Unable to retrieve your location')
            dispatch(chooseTip(("")))
        }

        if (!navigator.geolocation) 
        {
            alert('Geolocation is not supported by your browser')
        } 
        else 
        {
            dispatch(chooseTip(LOCATING_STATUS))
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }

    return (
        <LocationButton onClick={setRealPosition}> 
            Get your location
        </LocationButton>)
}


