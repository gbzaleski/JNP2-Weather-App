import { combineEpics } from 'redux-observable';
import { fetchLocationTipsEpic } from './locationTips/epics';
import { fetchWeatherEpic } from './weather/epics';
import { fetchGifsEpic, nextGifEpic } from './gif/epics';

export const rootEpic = combineEpics(
    fetchLocationTipsEpic, 
    fetchWeatherEpic,
    fetchGifsEpic,
    nextGifEpic)