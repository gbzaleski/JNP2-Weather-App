import { LOCATION_INPUT, FETCH_TIPS, LOCATION_CHOSEN } from './constants';

export const inputLocation = (location) => ({
    type: LOCATION_INPUT,
    location: location
});

export const chooseTip = (location) => ({
    type: LOCATION_CHOSEN,
    location: location
});

export const fetchLocationTips = (tips) => ({
    type: FETCH_TIPS,
    tips: tips
});
