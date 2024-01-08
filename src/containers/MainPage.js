import React, {useEffect, useState, useCallback} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import { Wrapper } from './LoginPage';

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
cursor: pointer;
`

const FullScreenStyled = styled.img`
margin-right: 15px;
cursor: pointer;
`

const HeaderDiv = styled.div`
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
cursor: pointer;
`

const Colon = styled(SubTitle)`
color: var(--borders-elements, rgba(0, 0, 0, 0.20));
display: inline-flex;
`

const HistoryTrack = styled(Header)`
justify-content: space-between;
`

const Rectangle = styled.div`
height: 1px;
border-radius: 5px;
border: 1px solid var(--borders-elements, rgba(0, 0, 0, 0.20));
background: #FFF;
`
const DivItem = styled.div`
display: flex;
padding: 5px 10px;
align-items: center;
gap: 5px;
border-radius: 5px;
box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.10);
margin-left: 10px;
`

const StatusImg = styled.img`
margin: 0;
`

const DotsItem = styled(StatusImg)`
cursor: pointer;
`

const StatusName = styled(SubTitle)`
margin: 0 5px;
`

const RectangleHeight = styled(Rectangle)`
width: 1px;
height: 50px;
`

const HistoryTrackItem = styled(Header)`
justify-content: flex-start;
`

const HistoryTrackShadow = styled.div`
width: 15px;
height: 49px;
flex-shrink: 0;
background: linear-gradient(270deg, #F6F6F6 0.06%, rgba(246, 246, 246, 0.00) 99.93%);
`

const Cross = styled.img`
margin: 0 13px;
`


function MainPage() {
    let server = [
        {status: false, name: 'track.get'},
        {status: true, name: 'issue.send'},
        {status: false, name: 'track.get'},
        {status: true, name: 'issue.send'},
        {status: false, name: 'track.get'},
        {status: true, name: 'issue.send'},
        {status: false, name: 'track.get'},
        {status: true, name: 'issue.send'},
        {status: false, name: 'track.get'},
        {status: true, name: 'issue.send'},
        {status: false, name: 'track.get'}
        ]; 

    const getServerItems = useCallback(() => {
        console.log('Запрос');
        return server
    }, [])


    return (
        <>
            <Header>
                <HeaderDiv>
                    <LogoStyled src="/icons/logo.svg" alt="logo"/>
                    <Title>API-консолька</Title>
                </HeaderDiv>
                <HeaderDiv>
                    <MailDiv>
                        <SubTitle>some@email.com</SubTitle>
                        <Colon>:</Colon>
                        <SubTitle>sublogin</SubTitle>
                    </MailDiv>
                    <ExitTitle>Выйти</ExitTitle>
                    <LogOutStyled src='/icons/log-out.svg'/>
                    <FullScreenStyled src='/icons/full-screen.svg'/>
                </HeaderDiv>
            </Header>
            <Rectangle/>
            <HistoryTrack>
                <HistoryTrackItem>
                    <ServerItems getServerItems={getServerItems}/>
                </HistoryTrackItem>
                <HistoryTrackItem>
                    <HistoryTrackShadow/>
                    <RectangleHeight/>
                    <Cross src="/icons/cross.svg"/>
                </HistoryTrackItem>
                
            </HistoryTrack>
            <Rectangle/>
        </>




    )
}

const ServerItems = ({getServerItems}) => {
    const [serverItems, setServerItems] = useState([]);


    useEffect(() => {
        setServerItems(getServerItems())
    }, [getServerItems])
    
    return (
        <>
        {serverItems.map((item, i) => {
            console.log('Yes daddy');
            return (<DivItem key={i}>
                {item.status ? <StatusImg src='/icons/status-good.svg'/> : <StatusImg src='/icons/status-false.svg'/>}
                <StatusName>{item.name}</StatusName>
                <DotsItem src='/icons/dots.svg'/>
            </DivItem>)
        })}
        </>
    )
}



export default withRouter(MainPage);