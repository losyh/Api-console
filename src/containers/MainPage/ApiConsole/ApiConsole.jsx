import React, {useEffect, useState, useRef} from 'react';
import * as Styled from './styled.js';
import beautify from 'json-beautify';

const ApiConsole = () => {
    const [input, setInput] = useState('')
    const inputRef = useRef(null)
    const changeInput = (e) => {
        setInput(e.target.value)
    }
    useEffect(() => {
        console.log(input);
    }, [input])
    const handleClickFormatingTextArea = () => {
        const className = inputRef.current
        className.value = beautify(className.value)
        console.log(beautify(className.value));
    }
  return (
    <>
      <Styled.Input role='textbox' onChange={(e) => changeInput(e)} ref={inputRef}/>
      <Styled.Btn onClick={handleClickFormatingTextArea}> Нажми </Styled.Btn>
    </>
  );
};

export default ApiConsole;
