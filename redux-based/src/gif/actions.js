import { FETCH_GIFS, INCREMENT } from "./constants";

export const fetchGifs = (gifUrls) => ({
    type: FETCH_GIFS,
    gifArray: gifUrls
});

// Move pointer to the next gif.
export const setIncrement = () => ({
    type: INCREMENT
});
