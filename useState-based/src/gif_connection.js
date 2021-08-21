
import { LINK_GIFS } from './constants';

// Function for getting gifs (from cashe or API).
// Returning empty array makes gifs not to show anything instead of crash website.
export function getGifs(gifDescription)
{
   if (gifDescription === '')
      return []

    const connection = `${LINK_GIFS}?q=${gifDescription.replaceAll(' ', '-')}-weather`

    return fetch(connection)
      .then(res => res.json())  
      .then(result => {
        
        if (result.error || result.length === 0)
            return []

        const parsedResult = result.results.map((value) => value.media[0].gif.url)
        return parsedResult
      })    
}


