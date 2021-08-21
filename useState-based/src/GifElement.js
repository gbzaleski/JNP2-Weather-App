
import React, { useState, useEffect } from "react";
import { GifField } from './styled_elements';
import { getGifs } from './gif_connection';
import { LOADING_GIF_URL, GIF_SWITCH_TIME_MS } from './constants';

// React element for showing gifs.
export default function GifElement({gifDescription, gifCache, setGifCache})
{
    const [gifUrl, setGifUrl] = useState(LOADING_GIF_URL)

    useEffect(() => {
        let gifs_urls
        let counter = 0 // Counter will work up to 2^53 usages which enough for such application.

        const getGifUrls = () => {
            
            if (gifCache[gifDescription])
            {
                gifs_urls = gifCache[gifDescription]
                setGifUrl(gifs_urls[counter++ % gifs_urls.length])
                return
            }

            getGifs(gifDescription)
            .then(gifs_urls_request => {
                gifs_urls = gifs_urls_request
                setGifCache({...gifCache, [gifDescription]: gifs_urls})
                setGifUrl(gifs_urls[counter++ % gifs_urls.length])
            })
        }
        
        getGifUrls()

        setInterval(() => {
            setGifUrl(gifs_urls[counter++ % gifs_urls.length])
        }, GIF_SWITCH_TIME_MS)
    }, [gifDescription, gifCache, setGifCache])

    return <GifField src={gifUrl} alt="Loading…"/>
}
