import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from './Header/Header.jsx';
import HistoryTrack from './HistoryTrack/HistoryTrack.jsx';

function MainPage() {
  return (
    <>
      <Header />
      <HistoryTrack />
    </>
  );
}

export default withRouter(MainPage);
