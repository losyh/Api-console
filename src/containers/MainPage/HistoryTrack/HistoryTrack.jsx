import React, {useState, useEffect, useRef} from 'react';
import * as Styled from './styled.js';
import HistoryTrackItems from './HistoryTrackItems/HistoryTrackItems.jsx';

const generateMocks = (count) => {
  let res = [];
  for (let i = 0; i < count; i++) {
    res.push({status: Math.random() > 0.5 ? false : true, name: 'track.get'});
  }
  return res;
};

const defaultRequestItems = generateMocks(20);

const HistoryTrack = () => {
  const [requestItems, setRequestItems] = useState(defaultRequestItems);
  const scroll = useRef(null);

  useEffect(() => {
    const horizontalScroll = (evt) => {
      evt.preventDefault();
      scroll.current.scrollLeft += evt.deltaY;
    };
    scroll.current.addEventListener('wheel', horizontalScroll);
    return () => {
      scroll.current.removeEventListener('wheel', horizontalScroll);
    };
  }, []);

  return (
    <Styled.HistoryTrack>
      <Styled.HistoryTrackLeftSide ref={scroll}>
        <HistoryTrackItems
          requestItems={requestItems}
          setRequestItems={setRequestItems}
        />
      </Styled.HistoryTrackLeftSide>
      <Styled.HistoryTrackRightSide>
        <Styled.Cross //исправить box-shadow
          src="/icons/cross.svg"
          onClick={() => setRequestItems([])}
        />
      </Styled.HistoryTrackRightSide>
    </Styled.HistoryTrack>
  );
};

export default HistoryTrack;
