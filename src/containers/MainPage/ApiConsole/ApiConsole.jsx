import React, {useRef, useEffect, useState} from 'react';
import * as Styled from './styled.js';
import { Resizable } from 're-resizable';

const ApiConsole = () => {
  const inputRef = useRef(null);
  const [errorFormating, setErrorFormating] = useState(false)
  const [width, setWidth] = useState('934px')

  const handleClickFormatingTextArea = () => {
    const className = inputRef.current;
    try {
      className.value = JSON.stringify(JSON.parse(className.value), null, 2);
      setErrorFormating(false)
    } catch (error) {
      setErrorFormating(true)
    }
  };

  return (
    <>
      <Styled.ApiContainer>
          <Resizable
            enable={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
            minWidth={'100px'}
            size={{ width: width}}
            onResizeStop={(e, direction, ref, d) => {
              setWidth({
                width: width + d.width
              });
            }}>
              <Styled.ResizeConainer>
              <TextArea label={'Запрос:'} reff={inputRef} id={1} errorFormating={errorFormating}/>
            <Styled.Img src="/icons/dots.svg" draggable="true" />
              </Styled.ResizeConainer>
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
  const {label, reff, errorFormating} = props;
  return (
    <Styled.TextAreaContainer>
        <Styled.Label id={label} $error={errorFormating}>{label}</Styled.Label>
        <Styled.TextArea role="textbox" ref={reff} id={label} $error={errorFormating}/>
    </Styled.TextAreaContainer>
  )
}

export default ApiConsole;
