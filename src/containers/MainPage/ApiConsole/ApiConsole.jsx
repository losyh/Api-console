import React, {useRef} from 'react';
import * as Styled from './styled.js';

const ApiConsole = () => {
    const inputRef = useRef(null)

    const handleClickFormatingTextArea = () => {
        const className = inputRef.current
        className.value =  JSON.stringify(JSON.parse(className.value), null, 2);
    }

  return (
    <>
      <Styled.TextArea role='textbox' ref={inputRef}/>
      <Styled.Btn onClick={handleClickFormatingTextArea}> Нажми </Styled.Btn>
    </>
  );
};

export default ApiConsole;
