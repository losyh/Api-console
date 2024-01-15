import styled from 'styled-components';

export const HistoryItem = styled.div`
display: flex;
padding: 5px 10px;
align-items: center;
gap: 5px;
border-radius: 5px;
box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.10);
margin-left: 10px;
cursor: pointer;
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


export const DropDown = styled.div`
display: inline-flex;
padding: 5px 0px;
flex-direction: column;
align-items: flex-start;
border-radius: 3px;
background: var(--Paperwhite, #FFF);
box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
position: absolute;
top: 100px;
left: 15px;
`

export const DropDownItem = styled.div`
display: flex;
padding: 10px 15px;
align-items: center;
gap: 10px;
cursor: pointer;
`