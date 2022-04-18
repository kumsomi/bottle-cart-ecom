import { createContext, useContext, useReducer } from "react";
import { toastReducer } from "../reducer/toast-reducer";

const ToastContext = createContext(false);

const ToastProvider = ({ children }) => {
  const [toastState, toastDispatch] = useReducer(toastReducer, {
    showToast: false,
  });
  return (
    <ToastContext.Provider value={{ toastState, toastDispatch }}>
      {children}
    </ToastContext.Provider>
  );
};
const useToast = () => useContext(ToastContext);

export { useToast, ToastProvider };