import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from './Header/Header.js';
import HistoryTrack from './HistoryTrack/HistoryTrack.js';


 

function MainPage() {
    return (
        <>
            <Header/>
            <HistoryTrack/>
        </>
    )
}





export default withRouter(MainPage);