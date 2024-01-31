import { STORE_USER_DATA } from '../constants/storeUserDataConstant';
export const storeUserData = (userData: any) => ({
    type: STORE_USER_DATA,
    payload: userData,
});