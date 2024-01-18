import React, {useEffect} from 'react';
import HistoryTrackItem from './HistoryTrackItem/HistoryTrackItem.js';


const HistoryTrackItems = (props) => {

    const generateMocks = (count) => {
        let res = []
        for(let i = 0; i <= count; i++) {
            res.push({status: Math.random() > 0.5 ? false : true, name: 'track.get'})
        }
        return res
      };

    useEffect(() => {
        props.onChangeRequestItems(generateMocks(15))
    }, [])

    const onDeleteItem = (key) => {
        props.onChangeRequestItems(props.requestItems.filter((item, index) => index !== key))
    }


    return (
        props.requestItems.map((item, index) => {
            return(<HistoryTrackItem name={item.name} key={index} status={item.status} onDeleteItem={() => onDeleteItem(index)}/>)
        }))
}




export default HistoryTrackItems