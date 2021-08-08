import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/reduxStore'

let reRenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

reRenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    reRenderEntireTree(state)
})
