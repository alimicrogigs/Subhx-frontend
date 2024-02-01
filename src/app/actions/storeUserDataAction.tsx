export const storeUserData = (userData:any) => {
    console.log('Action Creator - Storing User Data:', userData);
    return {
      type: 'STORE_USER_DATA',
      payload: userData,
    };
};

