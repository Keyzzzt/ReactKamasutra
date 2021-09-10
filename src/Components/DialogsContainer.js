import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs/Dialogs";
import {createNewMessageAC, updateMessageTextAC} from "../redux/reducers/dialogsReducer";
import {withAuthRedirect} from "../HOC/WithAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
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

// Добавляем обертку при помощи HOC, наделяя ее Redirect`ом
const DialogsWithRedirect = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithRedirect)

export default DialogsContainer;



