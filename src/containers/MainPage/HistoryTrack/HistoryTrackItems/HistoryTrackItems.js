import React, {useEffect, useState} from 'react';
import HistoryTrackItem from './HistoryTrackItem/HistoryTrackItem.js';


const HistoryTrackItems = () => {
    const [requestItems, setRequestItems] = useState([]);

    const generateMocks = (count) => {
        let res = []
        for(let i = 0; i <= count; i++) {
            res.push({status: Math.random() > 0.5 ? false : true, name: 'track.get'})
        }
        return res
      };

    useEffect(() => {
        setRequestItems(generateMocks(20))
    }, [])


    return (
        requestItems.map((item, i) => {
            return(<HistoryTrackItem name={item.name} key={i} status={item.status}/>)
        }))
}




export default HistoryTrackItems