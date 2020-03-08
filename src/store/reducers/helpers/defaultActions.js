import {createDispatchTypes} from "./createDispatchTypes";
import {defaultResponseHandler, customResponseHandler} from "./defaultResponseHandler";
import {makeApiRequest} from "../../../services/apiRequest";
import {encodeJWT} from "../../../utils/jwtEncryptDecrypt";
import {v1encryption} from "../../../utils/v1encryption";

const encryptData = (actionName,reqData) => {
    let encodedData, finalReqData;
    switch (actionName) {
        case 'LOAN_ACCOUNT_LIST':
        case 'MERCHANT_SHOP_TYPES':
        case 'MERCHANT_SHOP_LIST':
        case 'CONFIRM_SHOP_PAYMENT':
        case 'VALIDATE_CASHLESS_PAYMENT':
        case 'GET_CASHLESS_MERCHANT_TRANSACTION_LIST':
        case 'ADD_MERCHANT_PRODUCTS':
            encodedData = v1encryption(reqData);
            finalReqData = {"data": encodedData};
            break;
        case 'UPDATE_PROFILE':
            console.log('user profile', reqData)
            finalReqData = reqData;
            break;
        default:
            encodedData = encodeJWT(reqData);
            finalReqData = {"request": encodedData};
    }
    return finalReqData;
};

export const createDefaultAction = (apiDetails, dispatch, requestData, requestMethod) => {
    let dispatchTypes = createDispatchTypes(apiDetails.actionName);
    if(apiDetails.actionName === "GET_INTERNET_DETAIL" || apiDetails.actionName === "TVPAYMENT"){
        dispatch({type: dispatchTypes.progressDispatch, payload: {apiData:null, type:requestData.service}});
    }else if(apiDetails.actionName === "CHEQUE"){
        dispatch({type: dispatchTypes.progressDispatch, payload: {apiData:null, type:requestData.type}});
    }else {
        dispatch({type: dispatchTypes.progressDispatch, payload: null});
    }

    let handleApiResponse;

    let reqData = encryptData(apiDetails.actionName,requestData);

    if(apiDetails.actionName === "GET_INTERNET_DETAIL" || apiDetails.actionName === "TVPAYMENT"){
        handleApiResponse = apiResponse => {
            return customResponseHandler(apiResponse, dispatch, dispatchTypes,requestData.service);
        };
    }else if(apiDetails.actionName === "CHEQUE"){
        handleApiResponse = apiResponse => {
            return customResponseHandler(apiResponse, dispatch, dispatchTypes,requestData.type);
        };
    }else {
        handleApiResponse = apiResponse => {
            return defaultResponseHandler(apiResponse, dispatch, dispatchTypes);
        };
    }
    return makeApiRequest(apiDetails, reqData, handleApiResponse, requestMethod);
};
