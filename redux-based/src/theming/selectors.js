import { createSelector } from 'reselect';
import { prop } from 'ramda';
import { THEME_REDUCER_NAME } from './reducer';

const getTimespanReducerState = prop(THEME_REDUCER_NAME)

export const themeSelector = createSelector(
    getTimespanReducerState,
    (state) => state.get('theme')
)
