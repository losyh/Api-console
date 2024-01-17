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
top: 93px;
left: 5px;
`

export const DropDownItem = styled.div`
width: 100%;
display: flex;
padding: 10px 15px;
align-items: center;
gap: 10px;
cursor: pointer;
&:hover {
    background: ${props => props.$background ?  `${props.$background}` : 'var(--Paperwhite, #FFF)'};
    color: ${props => props.$background ?  'var(--Paperwhite, #FFF)' : 'var(--Text-Black, #0D0D0D)'};
`

export const Gap = styled.div`
display: flex;
padding: 5px 0px;
flex-direction: column;
align-items: center;
gap: 10px;
`

export const Feature = styled.div`
width: 133px;
height: 1px;
border-radius: 5px;
border: 1px solid var(--borders-elements, rgba(0, 0, 0, 0.20));
background: #FFF;
`