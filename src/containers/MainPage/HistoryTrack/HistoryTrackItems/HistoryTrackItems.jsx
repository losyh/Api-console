import React from 'react';
import HistoryTrackItem from './HistoryTrackItem/HistoryTrackItem.jsx';

const HistoryTrackItems = (props) => {
  const {requestItems, setRequestItems} = props;
  const deleteItem = (key) => {
    setRequestItems(requestItems.filter((item, index) => index !== key));
  };

  return requestItems.map((item, index) => {
    return (
      <HistoryTrackItem
        name={item.name}
        key={index}
        status={item.status}
        onDeleteItem={() => deleteItem(index)}
      />
    );
  });
};

export default HistoryTrackItems;
