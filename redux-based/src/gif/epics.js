import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap, takeUntil, filter } from 'rxjs/operators';
import { EMPTY, interval } from 'rxjs';
import { FETCH_WEATHER, WEATHER_REQUEST } from '../weather/constants';
import { CURRENT_WEATHER } from '../timespan/constants';
import { timespanSelector } from '../timespan/selectors';
import { LINK_GIFS, FETCH_GIFS, GIF_SWITCH_TIME_MS } from './constants';
import { fetchGifs, setIncrement } from './actions';
import { LOCATION_INPUT } from '../locationTips/constants';
import { GIF_API_KEY } from '../confidential';

const getLink = (description) => `${LINK_GIFS}?q=${description.replaceAll(' ', '-')}-weather&key=${GIF_API_KEY}`

const castGifs = (result) => {
    return result.results.map((value) => value.media[0].gif.url)
}

export const fetchGifsEpic = (action$, store$) => {
    return action$.pipe(
        ofType(FETCH_WEATHER),
        filter(() =>
            timespanSelector(store$.value) === CURRENT_WEATHER
        ),
        mergeMap(action =>
            ajax.getJSON(getLink(action.description))
                .pipe(
                    catchError(() => EMPTY),
                    map(castGifs),
                    map(fetchGifs),
                    takeUntil(
                        action$.pipe(
                            ofType(LOCATION_INPUT),
                        )
                    )
                )
        )
    )
}

export const nextGifEpic = (action$) =>
    action$.pipe(
        ofType(FETCH_GIFS),
        mergeMap(() =>
            interval(GIF_SWITCH_TIME_MS).pipe(
                map(setIncrement),
                takeUntil(
                    action$.pipe(
                        ofType(WEATHER_REQUEST),
                ))
            )
        )
    )
