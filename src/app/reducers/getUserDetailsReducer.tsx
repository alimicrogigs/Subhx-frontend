import {
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAILURE,
  } from "../constants/depositeFundConstants";
  
  const initialState = {
    loading: false,
    userAllDetails:{},
    userError: null,
  };
  
  export const userData = (state = initialState, action: any) => {
    switch (action.type) {
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
          userAllDetails: action.payload,
          error: null,
        };
  
      case GET_USER_DETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          userAllDetails :{},
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };