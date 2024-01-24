import styled from 'styled-components/macro';

export const HistoryTrack = styled.section`
  height: 50px;
  background: var(--Underpaper, #f6f6f6);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid var(--borders-elements, rgba(0, 0, 0, 0.2));
  border-bottom: 2px solid var(--borders-elements, rgba(0, 0, 0, 0.2));
`;

export const HistoryTrackLeftSide = styled(HistoryTrack)`
  justify-content: flex-start;
  border-top: 2px solid var(--borders-elements, rgba(0, 0, 0, 0.2));
  border-bottom: 2px solid var(--borders-elements, rgba(0, 0, 0, 0.2));
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const HistoryTrackRightSide = styled(HistoryTrackLeftSide)`
  justify-content: flex-start;
  overflow: visible;
  border-left: 2px solid var(--borders-elements, rgba(0, 0, 0, 0.2));
  border-top: 2px solid var(--borders-elements, rgba(0, 0, 0, 0.2));
  position: sticky;
  right: 0;
  box-shadow: -17px 0px 25px #f6f6f6;
`;

export const Cross = styled.img`
  padding: 14px;
  cursor: pointer;
`;
