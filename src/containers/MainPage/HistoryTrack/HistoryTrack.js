import React , {useState, useEffect} from 'react';
import * as Styled from './styled.js'
import HistoryTrackItems from './HistoryTrackItems/HistoryTrackItems.js';


const HistoryTrack = () => {

    const [requestItems, setRequestItems] = useState([]);

    const onChangeRequestItems = (items) => {
        setRequestItems(items)
    }

    const onDeleteAllItems = () => {
        setRequestItems([])
    }

    useEffect(() => {
        const scrollContainer = document.getElementById("scroll");

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });
    }, [])

    return(
        <Styled.HistoryTrack>
                <Styled.HistoryTrackLeftSide id='scroll'>
                    <HistoryTrackItems requestItems={requestItems} onChangeRequestItems={onChangeRequestItems}/>
                </Styled.HistoryTrackLeftSide>
            <Styled.HistoryTrackRightSide>
                <Styled.Cross src="/icons/cross.svg" onClick={onDeleteAllItems}/>
            </Styled.HistoryTrackRightSide>
        </Styled.HistoryTrack>
    )
}




export default HistoryTrack;