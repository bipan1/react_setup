export const createDefaultReducerCases = (actionName, action, state) => {
    switch (action.type) {
        case actionName + "_PROGRESS": {
            return {
                ...state,
                status: 100
            };
        }

        case actionName + "_SUCCESS": {
            if(action.payload){
                if(action.payload.bills){
                    action.payload.data = action.payload.bills;
                }
                if(action.payload.gateway_id){
                    action.payload.data.gateway_id = action.payload.gateway_id
                }
                if(action.payload.log_id){
                    action.payload.data.log_id = action.payload.log_id
                }
            }
            return {
                ...state,
                showMessage: true,
                message: action.payload.message,
                data: action.payload.data,
                status: action.payload.status ? 1 : 0
            };
        }

        case actionName + "_FAILURE": {
            return {
                ...state,
                showMessage: true,
                data: action.payload.data,
                message: action.payload.message,
                status: action.payload.status ? 1 : 0
            };
        }

        case actionName + "_HIDE_MESSAGE": {
            return {
                ...state,
                showMessage: false
            };
        }

        case actionName + "_CLEAR_STATE" : {
            return {
                ...state,
                status: null,
                data: null,
                message: null,
                showMessage: false
            }
        }

        default: {
            return state;
        }
    }
};
