"use client";
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
    DEPOSITFUND_DETAILS_REQUEST,
    DEPOSITFUND_DETAILS_SUCCESS,
    DEPOSITFUND_DETAILS_FAILURE,
  } from "../constants/depositeFundConstants";
 
  
  export const getUpiAddressRequest = () => ({
    type: GET_UPI_ADDRESS_REQUEST,
  })
  export const getUpiAddressSuccess = (upiAddress: any) => ({
    type: GET_UPI_ADDRESS_SUCCESS,
    payload: upiAddress,
  })
  export const getUpiAddressFailure = (error:any) => ({
    type: GET_UPI_ADDRESS_FAILURE,
    payload: error,
  })

  export const getManualAccountRequest = () => ({
    type: GET_MANUAL_ACCOUNT_REQUEST,
  })
  export const getManualAccountSuccess = (manualAccount: any) => ({
    type: GET_MANUAL_ACCOUNT_SUCCESS,
    payload: manualAccount,
  })
  
  export const getManualAccountFailure = (error:any) => ({
    type: GET_MANUAL_ACCOUNT_FAILURE,
    payload: error,
  })


  export const getUserVanRequest = () => ({
    type: GET_USE_VAN_REQUEST,
  })
  export const getUserVanSuccess = (vanAccount: any) => ({
    type: GET_USE_VAN_SUCCESS,
    payload: vanAccount,
  })
  
  export const getUserVanFailure = (error:any) => ({
    type: GET_USE_VAN_FAILURE,
    payload: error,
  })


  export const getUserDataRequest = () => ({
    type: GET_USER_DETAILS_REQUEST,
  })
  export const getUserDataSuccess = (vanAccount: any) => ({
    type: GET_USER_DETAILS_SUCCESS,
    payload: vanAccount,
  })
  
  export const getUserDataFailure = (error:any) => ({
    type: GET_USER_DETAILS_FAILURE,
    payload: error,
  })


export const depositeFundRequest = () => ({
  type: DEPOSITFUND_DETAILS_REQUEST,
});

export const depositeFundSuccess = (upiAddress: any) => ({
  type: DEPOSITFUND_DETAILS_SUCCESS,
  payload: upiAddress,
});

export const depositeFundFailure = (error:any) => ({
  type: DEPOSITFUND_DETAILS_FAILURE,
  payload: error,
});


