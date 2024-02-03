export const storeUserData = (userData:any) => {
    return {
      type: 'STORE_USER_DATA',
      payload: userData,
    };
};

