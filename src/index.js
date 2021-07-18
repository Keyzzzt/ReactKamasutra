import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {state} from './redux/state'

ReactDOM.render(
  <React.StrictMode>
    <App posts={state.posts} dialogs={state.dialogsData} messages={state.messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);
