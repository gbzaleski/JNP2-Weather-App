
import { LINK_AUTOCOMPLETE } from './constants';
import { API_KEY } from './confidential';

// Function for getting autocompletion tips (from cashe or API).
export function showNameTips(cityName, setItemList, tipsCache, setTipsCache)
{
   if (cityName === '')
      return

    const connection = `${LINK_AUTOCOMPLETE}.json?key=${API_KEY}&q=${cityName}`

    if (tipsCache[connection])
    {
      setItemList(tipsCache[connection]) 
      return
    }

    fetch(connection)
      .then(res => res.json())  
      .then(result => {
        
        if (result.error || result.length === 0)
            return

        const parsedResult = result.map((value) => ({id: value.name, label: value.name}))
        setTipsCache({...tipsCache, [connection]: parsedResult})
        setItemList(parsedResult)
      })
}


