import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Angelina'},
    {id: 2, name: 'Anton'},
    {id: 3, name: 'Igor'},
    {id: 4, name: 'Sashka'}
]

let messagesData = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Hey'}
]

let postsData = [
    {id: 1, message: "My first post", likeCount: 12},
    {id: 2, message: "My second post", likeCount: 23},
    {id: 3, message: "Lorem ipsum dolor sit amet.", likeCount: 11},
    {id: 4, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", likeCount: 5},
    {id: 5, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta in similique?", likeCount: 7}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
