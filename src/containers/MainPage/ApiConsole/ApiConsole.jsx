import React, {useRef, useEffect} from 'react';
import * as Styled from './styled.js';

const ApiConsole = () => {
  const inputRef = useRef(null);
  const dotsRef = useRef(null);

  const handleClickFormatingTextArea = () => {
    const className = inputRef.current;
    className.value = JSON.stringify(JSON.parse(className.value), null, 2);
  };

  // useEffect(() => {
  //   const div = dotsRef.current;
  //   console.log(dotsRef);
  //   const listener = (e) => {
  //     e.preventDefault();
  //     scroll.offsetLeft += e.pageX - 50 + 'px';
  //   };
  //   div.addEventListener('mousedown', (e) => {
  //     document.addEventListener('mousemove', listener);
  //   });

  //   return div.addEventListener('mouseup', (e) => {
  //     document.removeEventListener('mousemove', listener);
  //   });
  // }, []);

  return (
    <>
      <Styled.ApiContainer>
        <Styled.TextArea role="textbox" ref={inputRef} />
        <Styled.Dots src="/icons/dots.svg" ref={dotsRef} draggable="true" />
        <Styled.TextArea role="textbox" />
      </Styled.ApiContainer>
      <Styled.Btn onClick={handleClickFormatingTextArea}> Нажми </Styled.Btn>
    </>
  );
};

export default ApiConsole;
