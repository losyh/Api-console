import React, { useState } from 'react';
import * as Styled from './styled.js';

const Header = () => {
  const [fullScreen, setFullScreen] = useState(false)

  const handelClickFullScreen = () => {
    if (document.fullscreenElement === null || document.fullscreenElement === undefined) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setFullScreen(!fullScreen)
  }

  return (
    <Styled.Header>
      <Styled.HeaderSection>
        <Styled.Logo src="/icons/logo.svg" alt="logo" />
        <Styled.Title>API-консолька</Styled.Title>
      </Styled.HeaderSection>
      <Styled.HeaderSection>
        <Styled.MailSection>
          <Styled.SubTitle>some@email.com</Styled.SubTitle>
          <Styled.Colon>:</Styled.Colon>
          <Styled.SubTitle>sublogin</Styled.SubTitle>
        </Styled.MailSection>
        <Styled.ExitContainer>
          <Styled.ExitTitle>Выйти</Styled.ExitTitle>
          <Styled.LogOut src="/icons/log-out.svg" />
        </Styled.ExitContainer>
        {fullScreen ?
        <Styled.FullScreenStyled onClick={handelClickFullScreen} src="/icons/Vector.svg" /> :
        <Styled.FullScreenStyled onClick={handelClickFullScreen} src="/icons/full-screen.svg" />}
      </Styled.HeaderSection>
    </Styled.Header>
  );
};

export default Header;
