export const defaultResponseHandler = (apiResponse, dispatch, dispatchTypes) => {
    if (apiResponse.data) {
        let payloadData = apiResponse.data;
        dispatch({
            type: dispatchTypes.successDispatch,
            payload: payloadData
        });
        setTimeout(() => {
            dispatch({ type: dispatchTypes.hideMessage, payload: null });
        }, 8000);
        return apiResponse.data
    } else {
        let payloadData = apiResponse;
        dispatch({
            type: dispatchTypes.failureDispatch,
            payload: payloadData
        });
        setTimeout(() => {
            dispatch({ type: dispatchTypes.hideMessage, payload: null });
        }, 8000);
        return apiResponse
    }
};

export const customResponseHandler = (apiResponse, dispatch, dispatchTypes, type) => {
    if (apiResponse.data) {
        let payloadData = apiResponse.data;
        dispatch({
            type: dispatchTypes.successDispatch,
            payload: {apiData:payloadData, type:type}
        });
        setTimeout(() => {
            dispatch({ type: dispatchTypes.hideMessage, payload: {apiData:null, type:type} });
        }, 8000);
        return apiResponse.data
    } else {
        let payloadData = apiResponse;
        dispatch({
            type: dispatchTypes.failureDispatch,
            payload: {apiData:payloadData, type:type}
        });
        setTimeout(() => {
            dispatch({ type: dispatchTypes.hideMessage, payload: {apiData:null, type:type} });
        }, 8000);
        return apiResponse
    }
};

