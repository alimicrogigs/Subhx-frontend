import {
  GET_UPI_ADDRESS_REQUEST,
  GET_UPI_ADDRESS_SUCCESS,
  GET_UPI_ADDRESS_FAILURE,
  GET_MANUAL_ACCOUNT_REQUEST,
  GET_MANUAL_ACCOUNT_SUCCESS,
  GET_MANUAL_ACCOUNT_FAILURE,
  GET_USE_VAN_REQUEST,
  GET_USE_VAN_SUCCESS,
  GET_USE_VAN_FAILURE,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILURE,
} from "../constants/depositeFundConstants";

const initialState = {
  loading: false,
  upiAddress: [],
  manualAccount :[],
  vanAccount:[],
  getUserAllDetails:[],
  error: null,
};

export const depositFundReducer = (state = initialState, action: any) => {
  switch (action.type) {

    //upi address
    case GET_UPI_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_UPI_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        upiAddress: action.payload,
        error: null,
      };

    case GET_UPI_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        upiAddress: [],
        error: action.payload,
      };
    


    //manual accout
    case GET_MANUAL_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_MANUAL_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        manualAccount: action.payload,
        error: null,
      };

    case GET_MANUAL_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
        manualAccount: [],
        error: action.payload,
      };


      //van account
      case GET_USE_VAN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_USE_VAN_SUCCESS:
      return {
        ...state,
        loading: false,
        vanAccount: action.payload,
        error: null,
      };

    case GET_USE_VAN_FAILURE:
      return {
        ...state,
        loading: false,
        vanAccount: [],
        error: action.payload,
      };

      //GET USER DETAILS 
    case GET_USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        getUserAllDetails: action.payload,
        error: null,
      };

    case GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        getUserAllDetails: [],
        error: action.payload,
      };


    default:
      return state;
  }
};