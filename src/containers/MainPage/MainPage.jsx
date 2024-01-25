import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from './Header/Header.jsx';
import HistoryTrack from './HistoryTrack/HistoryTrack.jsx';
import ApiConsole from './ApiConsole/ApiConsole.jsx';

function MainPage() {
  return (
    <>
      <Header />
      <HistoryTrack />
      <ApiConsole />
    </>
  );
}

export default withRouter(MainPage);
