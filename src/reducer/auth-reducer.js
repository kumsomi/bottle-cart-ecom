export const authReducer = (state, { type, payload }) => {
    switch (type) {
      case "SIGNUP":
        return {
          ...state,
          isSignedUp: true,
          encodedToken: payload.data.data.encodedToken,
        };
      case "LOGIN":
        return {
          ...state,
          isLoggedIn: true,
          encodedToken: payload.data.data.encodedToken,
          user: payload.data.data.foundUser,
        };
      case "LOGOUT":
        return {
          ...state,
          isLoggedIn: false,
          isLoggedOut: true,
          encodedToken: payload,
          user: null,
        };
      default:
        return state;
    }
  };