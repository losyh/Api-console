import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import * as Styled from './styled.js';

const HistoryTrackItem = (props) => {
  const {name, status, onDeleteItem} = props;
  const [isOpen, setOpen] = useState(false);
  const [copy, setCopy] = useState(false);
  const historyItemRef = useRef(null);

  const handleClickDropDown = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!historyItemRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleClickCopy = () => {
    navigator.clipboard.writeText(name);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 500);
  };

  return (
    <Styled.HistoryItem
      onClick={() => handleClickDropDown()}
      ref={historyItemRef}
    >
      {copy ? <Styled.Copy>Скопировано</Styled.Copy> : null}
      {status ? (
        <Styled.StatusImg src="/icons/status-good.svg" />
      ) : (
        <Styled.StatusImg src="/icons/status-false.svg" />
      )}
      <Styled.StatusName>{name}</Styled.StatusName>
      <Styled.PointsItem src="/icons/dots.svg" />
      <Portal>
        {isOpen && (
          <DropDown
            left={historyItemRef}
            onDeleteItem={onDeleteItem}
            name={name}
            setCopy={setCopy}
            handleClickCopy={handleClickCopy}
          />
        )}
      </Portal>
    </Styled.HistoryItem>
  );
};

const Portal = (props) => {
  return ReactDOM.createPortal(props.children, document.body);
};

const DropDown = (props) => {
  const {left, onDeleteItem, handleClickCopy} = props;
  const leftSize = left.current.getBoundingClientRect();
  return (
    <Styled.DropDown style={{left: Number(`${leftSize.left}`)}}>
      <Styled.DropDownItem>Выполнить</Styled.DropDownItem>
      <Styled.DropDownItem $background={'#0055FB'} onClick={handleClickCopy}>
        Скопировать
      </Styled.DropDownItem>
      <Styled.Gap>
        <Styled.Feature />
      </Styled.Gap>
      <Styled.DropDownItem
        $background={'var(--Red, #CF2C00)'}
        onClick={onDeleteItem}
      >
        Удалить
      </Styled.DropDownItem>
    </Styled.DropDown>
  );
};

export default HistoryTrackItem;
