import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs/Dialogs";
import {createNewMessageAC} from "../redux/reducers/dialogsReducer";
import {withAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(createNewMessageAC(newMessageBody))
        }
    }
}
// // Без compose
// // Добавляем обертку при помощи HOC, наделяя ее Redirect`ом
// const DialogsWithRedirect = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithRedirect)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


