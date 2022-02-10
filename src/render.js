import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, onChangePostText} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} onChangePostText={onChangePostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}