import React, {useRef, useEffect, useState} from 'react';
import * as Styled from './styled.js';
import { Resizable } from 're-resizable';

const ApiConsole = () => {
  const inputRef = useRef(null);
  const dotsRef = useRef(null);
  const [width, setWidth] = useState('934px')

  const handleClickFormatingTextArea = () => {
    const className = inputRef.current;
    className.value = JSON.stringify(JSON.parse(className.value), null, 2);
  };


  return (
    <>
      <Styled.ApiContainer>
          <Resizable
            enable={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
            minWidth={'100px'}
            maxHeight={'530px'}
            size={{ width: width}}
            onResizeStop={(e, direction, ref, d) => {
              setWidth({
                width: width + d.width
              });
            }}>
              <Styled.ConTadsa>
              <TextArea label={'Запрос:'} refff={inputRef} id={1}/>
            <Styled.Img src="/icons/dots.svg" ref={dotsRef} draggable="true" />
              </Styled.ConTadsa>
          </Resizable>
          
        <TextArea label={'Ответ:'} id={2}/>
      </Styled.ApiContainer>
      <Styled.Futter>
      <Styled.Btn>Отправить</Styled.Btn>
      <Styled.LinkGit href='https://github.com/losyh' target="_blank">@link-to-my-github</Styled.LinkGit>
      <Styled.FormatContainer onClick={handleClickFormatingTextArea}>
            <Styled.Img src="/icons/format.svg"/>
            <Styled.FormatSpan>Форматировать</Styled.FormatSpan>
      </Styled.FormatContainer>
      </Styled.Futter>
    </>
  );
};


const TextArea = (props) => {
  const {label, refff} = props;
  return (
    <Styled.TextAreaContainer>
        <Styled.Label id={label}>{label}</Styled.Label>
        <Styled.TextArea role="textbox" ref={refff} id={label}/>
    </Styled.TextAreaContainer>
  )
}

export default ApiConsole;
