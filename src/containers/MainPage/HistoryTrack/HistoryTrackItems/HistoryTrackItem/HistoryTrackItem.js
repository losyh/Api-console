import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom'
import * as Styled from './styled.js'



const HistoryTrackItem = (prop) => {
    const [isOpen, setOpen] = useState(false)


    const handleClick = () => {
        setOpen(!isOpen)
    }

    return (
        <Styled.HistoryItem key={prop.key} onClick={handleClick}>
                {prop.status ? <Styled.StatusImg src='/icons/status-good.svg'/> : <Styled.StatusImg src='/icons/status-false.svg'/>}
                <Styled.StatusName>{prop.name}</Styled.StatusName>
                <Styled.PointsItem src='/icons/dots.svg'/>
                <Portal>
                    {isOpen && <DropDown left={prop.key}/>}
                </Portal>    
            </Styled.HistoryItem>
    )
}

const Portal = (props) => {
    const node = document.createElement('div')
    document.body.appendChild(node)

    return ReactDOM.createPortal(props.children, node)
}


const DropDown = (props) => {   

    return(
        <Styled.DropDown style={{left: Number(`${props.left}`)*125}}>
        <Styled.DropDownItem>Выполнить</Styled.DropDownItem>
        <Styled.DropDownItem>Скопировать</Styled.DropDownItem>
        <Styled.DropDownItem>Удалить</Styled.DropDownItem>
    </Styled.DropDown>
    )
}


export default HistoryTrackItem;