import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onSendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onChangeMessageText: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
)


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
