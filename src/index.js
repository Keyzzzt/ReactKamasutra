import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let posts = [
  { post: 'How are You?' },
  { post: 'Hi, my name is Bond, James Bond!' },
  { post: 'Hi, my name is Bond, James Bond!' },
  { post: 'Hi, my name is Bond, James Bond!' },
  { post: 'Hi, my name is Bond, James Bond!' },
  { post: 'Hi, my name is Bond, James Bond!' },
]
let dialogsData = [
  { id: 1, name: 'James' },
  { id: 2, name: 'Bond' },
  { id: 1, name: 'James Bond' },
]
let messages = [
  { id: 1, message: 'Hello from James' },
  { id: 2, message: 'Hello from Bond' },
  { id: 3, message: 'Hello from James Bond' }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogsData} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);
