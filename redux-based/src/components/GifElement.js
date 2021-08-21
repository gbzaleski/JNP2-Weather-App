
import React from 'react';
import { useSelector } from 'react-redux';
import { GifField } from '../styledElements';
import { gifSelector } from '../gif/selectors';
import { LOADING_STATUS } from '../constants';

// React element for showing gifs.
export default function GifElement()
{
    const gifUrl = useSelector(gifSelector)
    
    return <GifField src={gifUrl} alt={LOADING_STATUS}/>
}
