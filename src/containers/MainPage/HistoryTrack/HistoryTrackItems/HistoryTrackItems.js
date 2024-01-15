import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom'
import * as Styled from './styled.js'


const HistoryTrackItems = () => {
    const [requestItems, setRequestItems] = useState([]);
    const [isOpen, setOpen] = useState(false)


    const handleClick = () => {
        setOpen(!isOpen)
    }
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
            return(<Styled.HistoryItem key={i} onClick={handleClick}>
                {item.status ? <Styled.StatusImg src='/icons/status-good.svg'/> : <Styled.StatusImg src='/icons/status-false.svg'/>}
                <Styled.StatusName>{item.name}</Styled.StatusName>
                <Styled.PointsItem src='/icons/dots.svg'/>
                <Portal>
                    {isOpen && <DropDown/>}
                </Portal>    
            </Styled.HistoryItem>)
        }))
}


const Portal = (props) => {
    const node = document.createElement('div')
    document.body.appendChild(node)

    return ReactDOM.createPortal(props.children, node)
}


const DropDown = () => {
    return(
        <Styled.DropDown>
        <Styled.DropDownItem>Выполнить</Styled.DropDownItem>
        <Styled.DropDownItem>Скопировать</Styled.DropDownItem>
        <Styled.DropDownItem>Удалить</Styled.DropDownItem>
    </Styled.DropDown>
    )
}

export default HistoryTrackItems