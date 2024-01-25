import React from 'react';
import * as Styled from './styled.js';

const Header = () => {
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
        <Styled.FullScreenStyled src="/icons/full-screen.svg" />
      </Styled.HeaderSection>
    </Styled.Header>
  );
};

export default Header;
