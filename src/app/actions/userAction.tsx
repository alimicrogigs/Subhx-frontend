"use client";
import {

    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAILURE,
  } from "../constants/depositeFundConstants";


  export const getUserDataRequest = () => ({
    type: GET_USER_DETAILS_REQUEST,
  })
  export const getUserDataSuccess = (userData: any) => ({
    type: GET_USER_DETAILS_SUCCESS,
    payload: userData,
  })
  
  export const getUserDataFailure = (error:any) => ({
    type: GET_USER_DETAILS_FAILURE,
    payload: error,
  })