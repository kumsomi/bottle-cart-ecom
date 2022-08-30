export const filterReducer = (state, action) => {
    switch (action.type) {
      case "SORT":
        return { ...state, sortBy: action.payload };
      case "RATING":
        return { ...state, rating: action.payload };
      case "FILTER_BY_CATEGORY":
        return {
          ...state,
          [action.payload]: !state[action.payload],
        };
      case "CLEAR":
        return {
          ...state,
          sortBy: null,
          rating: 0,
          Aluminium: false,
          Steel: false,
          Glass: false,
          Copper:false,
          Plastic: false,
          Disposable: false,
          School:false,
          Baby:false,
          price: 1500,
          searchKeyword: "",
        };
      case "FILTER_BY_PRICE":
        return {
          ...state,
          price: action.payload,
        };
      case "FILTER_BY_SEARCH":
        return {
          ...state,
          searchKeyword: action.payload,
        };
      default:
        return state;
    }
  };