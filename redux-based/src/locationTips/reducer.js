import { fromJS } from 'immutable';
import { LOCATION_INPUT, FETCH_TIPS, LOCATION_CHOSEN } from './constants';

export const LOCATION_TIPS_REDUCER_NAME = "LocationTipsReducer";

// The name of location which player put and name tips (auto-complete).
const initialState = fromJS({
    location: "",
    tips: [],
}); 

export const locationTipsReducer = (state = initialState, action) => {
    switch (action.type) 
    {
        case LOCATION_CHOSEN:
            return state.set('location', action.location).set('tips', fromJS([]));

        case LOCATION_INPUT:
            return state.set('location', action.location);

        case FETCH_TIPS:
            return state.set('tips', fromJS(action.tips));

        default:
            return state;
    }
};