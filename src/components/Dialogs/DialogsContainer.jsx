import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text))
    }

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    return <Dialogs dialogsData={state.dialogsPage.dialogsData}
                    messagesData={state.dialogsPage.messagesData}
                    newMessageText={state.dialogsPage.newMessageText}
                    onSendMessage={sendMessage}
                    onChangeMessageText={updateNewMessageText}/>
}

export default DialogsContainer;
