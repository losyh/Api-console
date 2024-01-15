import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom'
import * as Styled from './styled.js'



const HistoryTrackItem = (prop) => {
    const [isOpen, setOpen] = useState(false)
    const myRef = useRef(null)

    const handleClick = () => {
        setOpen(!isOpen);
}

    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (!myRef.current.contains(event.target)) {
                setOpen(false)
            }
        }

        document.addEventListener('click', handleDocumentClick)

        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }, []);
    
    return (
        <Styled.HistoryItem key={prop.key} onClick={() => handleClick()} ref={myRef}>
                {prop.status ? <Styled.StatusImg src='/icons/status-good.svg'/> : <Styled.StatusImg src='/icons/status-false.svg'/>}
                <Styled.StatusName>{prop.name}</Styled.StatusName>
                <Styled.PointsItem src='/icons/dots.svg'/>
                <Portal>
                    {isOpen && <DropDown left={myRef} onDelete={prop.onDelete} key={prop.key}/>}
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
        <Styled.DropDown style={{left: Number(`${props.left.current.offsetLeft}`)}}>
        <Styled.DropDownItem>Выполнить</Styled.DropDownItem>
        <Styled.DropDownItem>Скопировать</Styled.DropDownItem>
        <Styled.DropDownItem onClick={() => props.onDelete()}>Удалить</Styled.DropDownItem>
    </Styled.DropDown>
    )
}


export default HistoryTrackItem;