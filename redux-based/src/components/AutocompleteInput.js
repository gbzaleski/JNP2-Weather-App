import React from 'react';
import Autocomplete from 'react-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { StyledInput, DivTip, DivTipHighlight } from '../styledElements';
import { inputLocation, chooseTip } from '../locationTips/actions';
import { locationSelector, tipsSelector } from '../locationTips/selectors';

// Input element with autocompletion function.
export default function Autocompleteinput()
{
    const dispatch = useDispatch();
    const location = useSelector(locationSelector);
    const tipsList = useSelector(tipsSelector);

    const renderItem = (item, highlighted) =>
        highlighted ? 
            <DivTipHighlight
                key={item.id}
            >
                {item.name}
            </DivTipHighlight>
            :
            <DivTip
                key={item.id}
            >
                {item.name}
            </DivTip>

    return (
        <Autocomplete
            name="location" 
            items={tipsList}
            getItemValue={(ele) => ele.name}
            renderItem={renderItem}
            value={location}
            onChange={(e) => {
                dispatch(inputLocation(e.target.value))
            }}
            onSelect={(value) => dispatch(chooseTip(value))}
            renderInput={ 
            (props) => {
                return <StyledInput 
                    type="text"
                    name="location"
                    value={location}
                    placeholder="London" 
                    {...props} 
                />
            }}
        />
    )
}