import styled from 'styled-components';

export const Header = styled.header`
  height: 50px;
  background: var(--Underpaper, #f6f6f6);
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.img`
  margin-left: 15px;
  display: inline-flex;
`;

export const FullScreenStyled = styled.img`
  padding: 0 10px;
  margin-right: 5px;
  cursor: pointer;
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.h1`
  color: var(--Text-Black, #0d0d0d);
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  margin-left: 20px;
  display: inline-flex;
`;
export const MailSection = styled.div`
  height: 30px;
  display: flex;
  padding: 5px 15px;
  align-items: flex-start;
  gap: 5px;
  border-radius: 5px;
  border: 1px solid var(--borders-elements, rgba(0, 0, 0, 0.2));
  display: inline-flex;
  margin-right: 25px;
`;

export const SubTitle = styled.span`
color: var(--Text-Black, #0D0D0D);
font-family: SF Pro Text;
font-size: 16px;
font-weight: 400;
line-height: 20px;
margin 0;
display: inline-flex;
`;

export const ExitContainer = styled(HeaderSection)`
  cursor: pointer;
  padding: 0 5px;
`;

export const ExitTitle = styled(SubTitle)`
  margin-right: 8px;
`;

export const LogOut = styled.img`
  margin-right: 15px;
`;

export const Colon = styled(SubTitle)`
  color: var(--borders-elements, rgba(0, 0, 0, 0.2));
`;
