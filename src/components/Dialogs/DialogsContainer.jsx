import React from 'react';
import {addMessage, updateNewMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";
const mapStateToProps = (state) => (
    {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
)

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        addMessage,
        updateNewMessage
    })
)(Dialogs);
