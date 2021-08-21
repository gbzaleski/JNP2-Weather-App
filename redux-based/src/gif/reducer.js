import { fromJS } from 'immutable';
import { FETCH_GIFS, INCREMENT } from './constants';

export const GIF_REDUCER_NAME = "GifReducer";

// State contains position counter and list of gif urls.
const initialState = fromJS({
    counter: 0,
    gifUrls: []
}); 

export const gifReducer = (state = initialState, action) => {
    switch (action.type) 
    {
        case FETCH_GIFS: 
            return state.set('counter', 0).set('gifUrls', fromJS(action.gifArray))

        case INCREMENT:
            return state.update('counter', counter => counter + 1)

        default:
            return state;
    }
};
