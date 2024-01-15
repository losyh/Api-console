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
position: relative;
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
box-shadow: -17px 0px 25px #F6F6F6;
`

export const Cross = styled.img`
margin: 0 14px;
cursor: pointer;
`