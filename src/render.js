import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost} from './redux/state'


export let reRenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App posts={state.posts} dialogs={state.dialogsData} messages={state.messages} addPost={addPost}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }