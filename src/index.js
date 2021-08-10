import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/reduxStore'
import StoreContext, {Provider} from "./storeContext";

let reRenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
          <Provider store={store}>
              <App />
          </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

reRenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    reRenderEntireTree(state)
})
