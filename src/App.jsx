import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import createStore from 'src/store';
import LoginPage from 'src/containers/LoginPage/LoginPage';
import MainPage from './containers/MainPage/MainPage';

const {store, persistor} = createStore();

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route path="/">
              {/* <LoginPage /> */}
              <MainPage />
            </Route>
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
