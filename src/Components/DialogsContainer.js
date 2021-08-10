import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs/Dialogs";
import {createNewMessage, updateMessageTextAC} from "../redux/state";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text)  => {
            dispatch(updateMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(createNewMessage())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;



