import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { GIF_REDUCER_NAME } from './reducer';

const getGifReducerState = prop(GIF_REDUCER_NAME);

// Return URL of the gif that should now be displayed.
export const gifSelector = createSelector(
    getGifReducerState,
    (state) => state.get('gifUrls').toJS()[state.get('counter') % state.get('gifUrls').size]
);

