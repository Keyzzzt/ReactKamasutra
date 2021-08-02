import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state'

let reRenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

reRenderEntireTree(store.getState())

store.subscriber(reRenderEntireTree)
