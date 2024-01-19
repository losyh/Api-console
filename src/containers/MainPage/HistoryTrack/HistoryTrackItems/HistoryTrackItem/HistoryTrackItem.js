import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom'
import * as Styled from './styled.js'



const HistoryTrackItem = (prop) => {
    const [isOpen, setOpen] = useState(false)
    const [copy, setCopy] = useState(false)
    const myRef = useRef(null)

    const handleClickDropDown = () => {
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

    const OnCopy = (item) => {
        setCopy(item)
    }

    return (
        <Styled.HistoryItem key={prop.key} onClick={() => handleClickDropDown()} ref={myRef}>
                {copy ? <Styled.Copy>Скопировано</Styled.Copy> : null}
                {prop.status ? <Styled.StatusImg src='/icons/status-good.svg'/> : <Styled.StatusImg src='/icons/status-false.svg'/>}
                <Styled.StatusName>{prop.name}</Styled.StatusName>
                <Styled.PointsItem src='/icons/dots.svg'/>
                <Portal>
                    {isOpen && <DropDown left={myRef} onDeleteItem={prop.onDeleteItem} key={prop.key} name={prop.name} OnCopy={OnCopy}/>}
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

    const handleClickCopy = () => {
        navigator.clipboard.writeText(props.name)
        props.OnCopy(true)
        setTimeout(() => {
            props.OnCopy(false)
        }, 500)
    }
    return(
        <Styled.DropDown style={{left: Number(`${props.left.current.offsetLeft}`)}}>
        <Styled.DropDownItem>Выполнить</Styled.DropDownItem>
        <Styled.DropDownItem $background={'#0055FB'} onClick={handleClickCopy}>Скопировать</Styled.DropDownItem>
        <Styled.Gap><Styled.Feature/></Styled.Gap>
        <Styled.DropDownItem $background={'var(--Red, #CF2C00)'}  onClick={() => props.onDeleteItem()}>Удалить</Styled.DropDownItem>
    </Styled.DropDown>
    )
}


export default HistoryTrackItem;