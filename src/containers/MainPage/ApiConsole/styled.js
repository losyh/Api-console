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
  height: 76vh;
  resize: none;
  padding: 10px;
  border-radius: 5px;
  border: ${(props) => (props.$error ? '1px solid var(--Red, #CF2C00)' : '1px solid var(--borders-elements, rgba(0, 0, 0, 0.20))')};
  box-shadow: ${(props) => (props.$error ? '0px 0px 5px 0px rgba(207, 44, 0, 0.50)' : null)};
  background: #fff;
  font-family: 'Fira Code';
  font-size: 14px;
  line-height: 18px;
  :focus {
    outline: none;
  }
`;

export const Btn = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 5px;
  background: linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  color: #FFF;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const Img = styled.img`
  padding-left: 3px;
`;

export const Label = styled.label`
color: ${(props) => (props.$error ? 'var(--Red, #CF2C00)' : 'var(--Text-gray, #999)')};
font-size: 12px;
margin-bottom: 3px;
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
text-decoration: none;
`

export const FormatContainer = styled.div`
display: inline-flex;
gap: 8px;
cursor: pointer;
`

export const FormatSpan = styled.span`
`

export const ResizeConainer = styled.div`
display: flex;
`