import { createSelector } from 'reselect';
import { prop } from 'ramda';
import { TIMESPAN_REDUCER_NAME } from './reducer';

const getTimespanReducerState = prop(TIMESPAN_REDUCER_NAME)

export const timespanSelector = createSelector(
    getTimespanReducerState,
    (state) => state.get('timespan')
)
