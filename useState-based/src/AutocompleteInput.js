import React, { useState } from "react";
import Autocomplete from "react-autocomplete";
import { showNameTips } from './autocomplete_connection';
import { StyledInput, DivTip, DivTipHighlight } from './styled_elements';

// Input element with autocompletion function.
export default function Autocompleteinput ({cityName, setCity})
{
    const [itemList, setItemList] = useState([]);
    const [tipsCache, setTipsCache] = useState({})

    const renderItem = (item, highlighted) =>
        highlighted ? 
            <DivTipHighlight
                key={item.id}
            >
                {item.label}
            </DivTipHighlight>
            :
            <DivTip
                key={item.id}
            >
                {item.label}
            </DivTip>

    const checkRender = (item, value) => item.label.toLowerCase().indexOf(value.toLowerCase())

    return (
        <Autocomplete
          name="city" 
          items={itemList}
          shouldItemRender={checkRender}
          getItemValue={item => item.label}
          renderItem={renderItem}
          value={cityName}
          onChange={(e) => {
            setCity(e.target.value)
            showNameTips(cityName, setItemList, tipsCache, setTipsCache)
          }}
          onSelect={value => setCity(value)}

          renderInput={ 
            (props) => {
              return <StyledInput 
                    type="text"
                    name="city"
                    value={cityName}
                    placeholder="London" 
                    {...props} 
                />
            }}
        />
    )
}