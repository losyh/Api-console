import React from 'react';
import * as Styled from './styled.js'
import HistoryTrackItems from './HistoryTrackItems/HistoryTrackItems.js';
import HorizontalScroll from 'react-scroll-horizontal'


const HistoryTrack = () => {

    return(
        <Styled.HistoryTrack>
            <HorizontalScroll>
                <Styled.HistoryTrackLeftSide>
                    <HistoryTrackItems/>
                </Styled.HistoryTrackLeftSide>
            </HorizontalScroll>
            <Styled.HistoryTrackRightSide>
                <Styled.Cross src="/icons/cross.svg"/>
            </Styled.HistoryTrackRightSide>
        </Styled.HistoryTrack>
    )
}




export default HistoryTrack;