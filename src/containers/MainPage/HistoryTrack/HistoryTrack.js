import React , {useState} from 'react';
import * as Styled from './styled.js'
import HistoryTrackItems from './HistoryTrackItems/HistoryTrackItems.js';
import HorizontalScroll from 'react-scroll-horizontal'


const HistoryTrack = () => {

    const [requestItems, setRequestItems] = useState([]);

    const onChangeRequestItems = (items) => {
        setRequestItems(items)
    }

    const onDeleteAllItems = () => {
        setRequestItems([])
    }
    return(
        <Styled.HistoryTrack>
            <HorizontalScroll>
                <Styled.HistoryTrackLeftSide>
                    <HistoryTrackItems requestItems={requestItems} onChangeRequestItems={onChangeRequestItems}/>
                </Styled.HistoryTrackLeftSide>
            </HorizontalScroll>
            <Styled.HistoryTrackRightSide>
                <Styled.Cross src="/icons/cross.svg" onClick={onDeleteAllItems}/>
            </Styled.HistoryTrackRightSide>
        </Styled.HistoryTrack>
    )
}




export default HistoryTrack;