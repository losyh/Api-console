import styled from 'styled-components';

export const HistoryTrack = styled.section`
height: 50px;
background: var(--Underpaper, #F6F6F6);
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
border-top: 2px solid var(--borders-elements, rgba(0, 0, 0, 0.20));
border-bottom: 2px solid var(--borders-elements, rgba(0, 0, 0, 0.20));
`

export const HistoryTrackLeftSide = styled(HistoryTrack)`
justify-content: flex-start;
padding-left: 5px;
border-top: 2px solid var(--borders-elements, rgba(0, 0, 0, 0.20));
border-bottom: 2px solid var(--borders-elements, rgba(0, 0, 0, 0.20));
overflow: auto;
::-webkit-scrollbar {
    width: 0;
    height: 0;
}
`

export const HistoryTrackRightSide = styled(HistoryTrackLeftSide)`
justify-content: flex-start;
overflow: visible;
border-left: 2px solid var(--borders-elements, rgba(0, 0, 0, 0.20)) ;
position: sticky;
right: 0;

`

export const ServerItem = styled.div`
display: flex;
padding: 5px 10px;
align-items: center;
gap: 5px;
border-radius: 5px;
box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.10);
margin-left: 10px;
`

export const StatusImg = styled.img`
margin: 0;
`

export const PointsItem = styled(StatusImg)`
cursor: pointer;
`

export const StatusName = styled.span`
color: var(--Text-Black, #0D0D0D);
font-family: SF Pro Text;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin: 0 5px;
display: inline-flex;
`

export const Cross = styled.img`
margin: 0 14px;
cursor: pointer;
`