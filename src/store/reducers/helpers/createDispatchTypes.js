export const createDispatchTypes = (actionName) => {
    return{
        progressDispatch: actionName + "_PROGRESS",
        successDispatch: actionName + "_SUCCESS",
        failureDispatch: actionName + "_FAILURE",
        hideMessage: actionName + '_HIDE_MESSAGE',
        clearState : actionName + '_CLEAR_STATE'
    }
}