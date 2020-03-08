import { combineReducers } from "redux";

const appReducer = combineReducers({

});

export const rootReducer = (state, action) => {
    if (action.type === "USER_LOG_OUT") {
        state = undefined;
        try {
            localStorage.setItem('state', undefined);
            sessionStorage.removeItem('user');
        } catch (err) {
            console.log("Reducer Error", err)
        }
    }

    return appReducer(state, action)
}