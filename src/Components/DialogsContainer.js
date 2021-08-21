import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs/Dialogs";
import {createNewMessageAC, updateMessageTextAC} from "../redux/reducers/dialogsReducer";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text)  => {
            dispatch(updateMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(createNewMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;



