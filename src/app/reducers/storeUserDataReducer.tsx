const initialState = {
    apiData: null,
  };
  
  const reducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          apiData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;