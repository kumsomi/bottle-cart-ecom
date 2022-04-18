import { useToast } from "../context/toast-context";
const Toast = () => {
  const { toastState, toastDispatch } = useToast();
  if (!toastState.showToast) return null;
  return (
    <div id="snackbar">
        <div class="toast-head">
            <h3 class="h-3 toast-heading ">RETRY</h3>
            <button id="toast-close" 
            onClick={() => toastDispatch({ type: "HIDE", payload: "" })}>
                <i class="fas fa-times" aria-hidden="true"></i>
            </button>
        </div>
        <p class="para-3">
            This is the body of a toast
            {toastState.payload}
        </p>
    </div>
  );
};
export { Toast };



