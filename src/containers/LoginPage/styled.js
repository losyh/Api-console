import styled from 'styled-components';



export const Wrapper = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const Form = styled.form`
width: 520px;
height: 425px;
left: calc(50% - 520px / 2);
top: 222px;
background: #ffffff;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
border-radius: 5px;
padding: 40px 30px;
`;

export const LogoStyled = styled.img`
  margin-bottom: 20px;
`;

export const Input = styled.input`
width: 460px;
height: 40px;
border-radius: 5px;
border: ${props => props.$inputBorderError ? '1px solid var(--Red, #CF2C00)' : "1px solid var(--borders-elements, rgba(0, 0, 0, 0.20))"};
box-shadow: ${props => props.$inputBoxShadowError ? '0px 0px 5px 0px rgba(207, 44, 0, 0.50)' : null};
background: #FFF;
margin: 0 0 20px;
color: var(--Text-Black, #0D0D0D);
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 30px;
padding-left: 5px;
`;


export const Title = styled.h1`
color: var(--Text-Black, #0D0D0D);
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 30px;
margin: 0 0 20px;
`

export const Label = styled.label`
color: ${props => props.$labelColorError ?  'var(--Red, #CF2C00)' : 'var(--Text-Black, #0D0D0D)'};
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin: 0 0 5px;
display: inline-flex;
`

export const Option = styled.span`
color: var(--Text-gray, #999);
text-align: right;
font-size: 12px;
display: inline-flex;
margin-left: 313px
`
export const Submit = styled.button`
width: 110px;
height: 40px;
border-radius: 5px;
background: linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
color: #FFF;
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 30px;
outline: none;
border: none;
cursor: pointer;
`

export const LinkToGit = styled.a`
color: var(--Text-gray, #999);
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin: 20px 0 0; 
cursor: pointer;
text-decoration: none;
`