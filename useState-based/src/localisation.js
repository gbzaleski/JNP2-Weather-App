import { LOCATING_STATUS } from './constants'

// Javascript function for obtaining user's location.
export function geoFindMe(setCity) 
{
    const success = (position) => {
      const latitude  = position.coords.latitude
      const longitude = position.coords.longitude
      setCity(`${latitude}, ${longitude}`)
    }
  
    const error = () => {
       alert('Unable to retrieve your location')
    }
  
    if (!navigator.geolocation) 
    {
      alert('Geolocation is not supported by your browser')
    } 
    else 
    {
      setCity(LOCATING_STATUS)
      navigator.geolocation.getCurrentPosition(success, error)
    }
  }
  