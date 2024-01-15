import React, {useEffect, useState} from 'react';
import * as Styled from './styled.js'
import HistoryTrackItems from './HistoryTrackItems/HistoryTrackItems.js';


const HistoryTrack = () => {

    return(
        <Styled.HistoryTrack>
            <Styled.HistoryTrackLeftSide>
                <HistoryTrackItems/>
            </Styled.HistoryTrackLeftSide>
            <Styled.HistoryTrackRightSide>
                <Styled.Cross src="/icons/cross.svg"/>
            </Styled.HistoryTrackRightSide>
        </Styled.HistoryTrack>
    )
}




export default HistoryTrack;