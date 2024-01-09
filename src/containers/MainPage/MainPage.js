import React, {useEffect, useState, useCallback} from 'react';
import {withRouter} from 'react-router-dom';
import * as Styled from './styled.js'

let server = [
    {status: false, name: 'track.get'},
    {status: true, name: 'issue.send'},
    {status: false, name: 'track.get'},
    {status: true, name: 'issue.send'},
    {status: false, name: 'track.get'},
    {status: true, name: 'issue.send'},
    {status: false, name: 'track.get'}
    ]; 

function MainPage() {

    const getServerItems = useCallback(() => {
        console.log('Запрос');
        return server
    }, [])


    return (
        <>
            <Styled.Header>
                <Styled.HeaderSection>
                    <Styled.LogoStyled src="/icons/logo.svg" alt="logo"/>
                    <Styled.Title>API-консолька</Styled.Title>
                </Styled.HeaderSection>
                <Styled.HeaderSection>
                    <Styled.MailSection>
                        <Styled.SubTitle>some@email.com</Styled.SubTitle>
                        <Styled.Colon>:</Styled.Colon>
                        <Styled.SubTitle>sublogin</Styled.SubTitle>
                    </Styled.MailSection>
                    <Styled.ExitTitle>Выйти</Styled.ExitTitle>
                    <Styled.LogOutStyled src='/icons/log-out.svg'/>
                    <Styled.FullScreenStyled src='/icons/full-screen.svg'/>
                </Styled.HeaderSection>
            </Styled.Header>

            <Styled.HistoryTrack>
                <Styled.HistoryTrackLeftSide>
                    <ServerItems getServerItems={getServerItems}/>
                </Styled.HistoryTrackLeftSide>
                <Styled.HistoryTrackRightSide>
                    <Styled.Cross src="/icons/cross.svg"/>
                </Styled.HistoryTrackRightSide>
                
            </Styled.HistoryTrack>

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
            return (<Styled.ServerItem key={i}>
                {item.status ? <Styled.StatusImg src='/icons/status-good.svg'/> : <Styled.StatusImg src='/icons/status-false.svg'/>}
                <Styled.StatusName>{item.name}</Styled.StatusName>
                <Styled.PointsItem src='/icons/dots.svg'/>
            </Styled.ServerItem>)
        })}
        </>
    )
}



export default withRouter(MainPage);