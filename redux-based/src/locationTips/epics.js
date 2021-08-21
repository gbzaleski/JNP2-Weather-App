import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap, takeUntil } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { LOCATION_INPUT, LINK_AUTOCOMPLETE } from './constants';
import { fetchLocationTips } from './actions';
import { WEATHER_API_KEY } from '../confidential';

const getLink = (location) => `${LINK_AUTOCOMPLETE}.json?key=${WEATHER_API_KEY}&q=${location}`

const castTips = (tips) => {
    return tips.map(ele => {
        return {id: ele.id, name: ele.name}
    });
}

export const fetchLocationTipsEpic = (action$) => 
    action$.pipe(
        ofType(LOCATION_INPUT),
        mergeMap(action =>
            ajax.getJSON(getLink(action.location))
            .pipe(
                map(fetchLocationTips),
                catchError(() => EMPTY),
                map(ele => {
                    return {
                        type: ele.type, 
                        tips: castTips(ele.tips)
                    }
                }),
                takeUntil(
                    action$.pipe(
                        ofType(LOCATION_INPUT)
                    )
                )
            )
        )
    )

    