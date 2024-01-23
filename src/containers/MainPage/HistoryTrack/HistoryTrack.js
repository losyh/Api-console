import React, {useState, useEffect} from 'react';
import * as Styled from './styled.js';
import HistoryTrackItems from './HistoryTrackItems/HistoryTrackItems.js';

const generateMocks = (count) => {
  let res = [];
  for (let i = 0; i < count; i++) {
    res.push({status: Math.random() > 0.5 ? false : true, name: 'track.get'});
  }
  return res;
};

const defaultRequestItems = generateMocks(12);

const HistoryTrack = () => {
  const [requestItems, setRequestItems] = useState(defaultRequestItems);

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll');

    scrollContainer.addEventListener('wheel', (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
    return scrollContainer.removeEventListener('wheel', (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
  }, []);

  return (
    <Styled.HistoryTrack>
      <Styled.HistoryTrackLeftSide id="scroll">
        <HistoryTrackItems
          requestItems={requestItems}
          setRequestItems={setRequestItems}
        />
      </Styled.HistoryTrackLeftSide>
      <Styled.HistoryTrackRightSide>
        <Styled.Cross
          src="/icons/cross.svg"
          onClick={() => setRequestItems([])}
        />
      </Styled.HistoryTrackRightSide>
    </Styled.HistoryTrack>
  );
};

export default HistoryTrack;
