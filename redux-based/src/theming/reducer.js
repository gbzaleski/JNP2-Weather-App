import { fromJS } from 'immutable';
import { TOGGLE_THEME, REGULAR_THEME, DARK_THEME } from './constants';

export const THEME_REDUCER_NAME = "ThemingReducer";

const initialState = fromJS({
    theme: REGULAR_THEME,
});

const toggleTheme = (theme) => {
   return theme === REGULAR_THEME ? DARK_THEME : REGULAR_THEME
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) 
    {
        case TOGGLE_THEME:
            return state.update('theme', toggleTheme)

        default:
            return state;
    }
};