  const initialState = {
    userData: null  ,
  };
  
  const storeUserDataReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'STORE_USER_DATA':
        console.log('Reducer - Storing User Data:', action.payload);
        return {
          ...state,
          userData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default storeUserDataReducer;
