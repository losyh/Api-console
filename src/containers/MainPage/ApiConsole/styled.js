import styled, {keyframes} from 'styled-components';

export const ApiContainer = styled.section`
  display: flex;
  padding: 0 15px;
  gap: 3px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 515px;
  resize: horizontal;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--borders-elements, rgba(0, 0, 0, 0.2));
  background: #fff;
  font-family: 'Fira Code';
  font-size: 14px;
  line-height: 18px;
`;

export const Btn = styled.button`
  weight: 50px;
  height: 40px;
`;

export const Dots = styled.img`
  cursor: pointer;
`;
