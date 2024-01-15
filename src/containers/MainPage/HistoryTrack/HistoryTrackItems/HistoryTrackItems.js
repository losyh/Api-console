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

    const onDelete = (key) => {
        setRequestItems(requestItems.filter((item, index) => index !== key))
    }


    return (
        requestItems.map((item, index) => {
            return(<HistoryTrackItem name={item.name} key={index} status={item.status} onDelete={() => onDelete(index)}/>)
        }))
}




export default HistoryTrackItems