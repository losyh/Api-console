import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

const Header = styled.header`
height: 50px;
background: var(--Underpaper, #F6F6F6);
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
`
const LogoStyled = styled.img`
  margin-left: 15px;
  display: inline-flex;
`;

const LogOutStyled = styled.img`
margin-right: 30px;
`

const FullScreenStyled = styled.img`
margin-right: 15px;
`

const Cont = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
`

const Title = styled.h1`
color: var(--Text-Black, #0D0D0D);
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 30px;
margin-left: 20px;
display: inline-flex;
`
const MailDiv = styled.div`
height: 30px;
display: flex;
padding: 5px 15px;
align-items: flex-start;
gap: 5px;
border-radius: 5px;
border: 1px solid var(--borders-elements, rgba(0, 0, 0, 0.20));
display: inline-flex;
margin-right: 30px;
`
const SubTitle = styled.p`
color: var(--Text-Black, #0D0D0D);
font-family: SF Pro Text;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin 0;
display: inline-flex;
`
const ExitTitle = styled(SubTitle)`
margin-right: 8px; 
`

const Colon = styled(SubTitle)`
color: var(--borders-elements, rgba(0, 0, 0, 0.20));
display: inline-flex;
`


function MainPage() {





    return (
        <Header>
            <Cont>
                <LogoStyled src="/icons/logo.svg" alt="logo"/>
                <Title>API-консолька</Title>
            </Cont>
            <Cont>
                <MailDiv>
                    <SubTitle>some@email.com</SubTitle>
                    <Colon>:</Colon>
                    <SubTitle>sublogin</SubTitle>
                </MailDiv>
                <ExitTitle>Выйти</ExitTitle>
                <LogOutStyled src='/icons/log-out.svg'/>
                <FullScreenStyled src='/icons/full-screen.svg'/>
            </Cont>
        </Header>
    )
}



export default withRouter(MainPage);