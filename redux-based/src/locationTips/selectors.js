import { createSelector } from 'reselect';
import { prop } from 'ramda';
import { LOCATION_TIPS_REDUCER_NAME } from './reducer';

const getLocationTipsReducerState = prop(LOCATION_TIPS_REDUCER_NAME);

export const locationSelector = createSelector(
    getLocationTipsReducerState,
    (state) => state.get("location")
);

export const tipsSelector = createSelector(
    getLocationTipsReducerState,
    (state) => state.get("tips").toJS()
);
