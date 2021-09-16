import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/reduxStore'
import {Provider} from "react-redux";

setInterval(() => {
    store.dispatch({type: "FAKE"})
}, 1000)
    ReactDOM.render(
          <Provider store={store}>
              <App />
          </Provider>,
      document.getElementById('root')
    );




