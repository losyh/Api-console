import React, {useEffect, useState} from 'react';
import * as Styled from './styled.js'


const HistoryTrack = () => {

    return(
        <Styled.HistoryTrack>
            <Styled.HistoryTrackLeftSide>
                <RequestItems/>
            </Styled.HistoryTrackLeftSide>
            <Styled.HistoryTrackRightSide>
                <Styled.Cross src="/icons/cross.svg"/>
            </Styled.HistoryTrackRightSide>
        </Styled.HistoryTrack>
    )
}


const RequestItems = () => {
    const [requestItems, setRequestItems] = useState([]);

    const generateMocks = (count) => {
        let res = []
        for(let i = 0; i <= count; i++) {
            res.push({status: Math.random() > 0.5 ? false : true, name: 'track.get'})
        }
        return res
      };

    useEffect(() => {
        setRequestItems(generateMocks(12))
    }, [])

    return (
        requestItems.map((item, i) => {
            return(<Styled.ServerItem key={i}>
                {item.status ? <Styled.StatusImg src='/icons/status-good.svg'/> : <Styled.StatusImg src='/icons/status-false.svg'/>}
                <Styled.StatusName>{item.name}</Styled.StatusName>
                <Styled.PointsItem src='/icons/dots.svg'/>
            </Styled.ServerItem>)
        }))
}


export default HistoryTrack;