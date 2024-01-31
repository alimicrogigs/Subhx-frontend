import {
  DEPOSITFUND_DETAILS_REQUEST,
  DEPOSITFUND_DETAILS_SUCCESS,
  DEPOSITFUND_DETAILS_FAILURE,
} from "../constants/depositeFundConstants";

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


