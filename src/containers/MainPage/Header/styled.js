import styled from 'styled-components';

export const Header = styled.header`
height: 50px;
background: var(--Underpaper, #F6F6F6);
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
`
export const LogoStyled = styled.img`
margin-left: 15px;
display: inline-flex;
`;

export const LogOutStyled = styled.img`
margin-right: 30px;
cursor: pointer;
`

export const FullScreenStyled = styled.img`
margin-right: 15px;
cursor: pointer;
`

export const HeaderSection = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
`

export const Title = styled.h1`
color: var(--Text-Black, #0D0D0D);
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 30px;
margin-left: 20px;
display: inline-flex;
`
export const MailSection = styled.div`
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

export const SubTitle = styled.p`
color: var(--Text-Black, #0D0D0D);
font-family: SF Pro Text;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin 0;
display: inline-flex;
`
export const ExitTitle = styled(SubTitle)`
margin-right: 8px; 
cursor: pointer;
`

export const Colon = styled(SubTitle)`
color: var(--borders-elements, rgba(0, 0, 0, 0.20));
`