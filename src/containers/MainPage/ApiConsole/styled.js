import styled, {keyframes} from 'styled-components';

export const ApiContainer = styled.section`
  display: flex;
  padding: 0 15px 15px 15px;
  padding-top: 10px;
  gap: 3px;
  flex-direction: row;
`;

export const TextAreaContainer = styled.div`
display: flex;
align-items: left;
justify-content: center;
flex-direction: column;
width: 100%;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 700px;
  resize: none;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--borders-elements, rgba(0, 0, 0, 0.2));
  background: #fff;
  font-family: 'Fira Code';
  font-size: 14px;
  line-height: 18px;

`;

export const Btn = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 5px;
  background: linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  color: #FFF;
  font-family: "SF Pro Text";
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const Img = styled.img`
  margin-left: 3px;
`;

export const Label = styled.label`
color: var(--Text-gray, #999);

font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 20px;
display: block;
`

export const Futter = styled(TextAreaContainer)`
border-top: 1px solid var(--borders-elements, rgba(0, 0, 0, 0.2));
align-items: center;
flex-direction: row;
justify-content: space-between;
padding: 15px 15px 0 15px;
`

export const LinkGit = styled.a`
color: var(--Text-gray, #999);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
cursor: pointer;
text-decoration: none;
`

export const FormatContainer = styled.div`
display: inline-flex;
gap: 8px;
cursor: pointer;
`

export const FormatSpan = styled.span`
color: var(--Text-Black, #0D0D0D);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
`

export const ConTadsa = styled.div`
display: flex;

`