export const FETCH_DIALOGS = 'FETCH_DIALOGS'
export const ADD_DIALOG = 'ADD_DIALOG'
export const SORT_DIALOGS = 'SORT_DIALOGS'
export const UPDATE_DIALOG = 'UPDATE_DIALOG'
export const UPDATE_DIALOG_UNREAD = 'UPDATE_DIALOG_UNREAD'
export const DELETE_DIALOG = 'DELETE_DIALOG'
export const CLEAR_DIALOG = 'CLEAR_DIALOG';

export const fetchDialogs = dialogs => ({ type: FETCH_DIALOGS, dialogs: dialogs })
export const updateDialog = dialog => ({ type: UPDATE_DIALOG, dialog })
export const updateDialogUnread = dialog => async (dispatch) =>  {dispatch({type: UPDATE_DIALOG_UNREAD, dialog: dialog})}
export const addNewDialog = dialog => ({ type: ADD_DIALOG, dialog: dialog })
export const sortDialogs = (message, count) => ({ type: SORT_DIALOGS, message: message, count: count })
export const deleteDialog = dialogId => ({ type: DELETE_DIALOG, dialogId })
export const clearDialog = () => ({ type: CLEAR_DIALOG})

