import axios from "axios";
// import { useToast } from "../context";

export const loginHandler = async (
  email,
  password,
  authDispatch,
//   showToast,
  navigate,
  location
) => {
    // const {showToast}=useToast();
  try {
    if (email !== "" && password !== "") {
      const data = await axios.post("/api/auth/login", { email, password });
      authDispatch({
        type: "LOGIN",
        payload: { email: email, pasword: password, data },
      });
      navigate(location.state?.from?.pathname || "/", {
        replace: true,
      });
      //showToast("User Logged in!", "success");
    //   data.errors && //showToast.error(data.errors[0]);
    // } else if (!email && !password) {
    //   //showToast("Please enter valid credentials.", "error");
    // } else if (!password) {
    //   //showToast("Please enter valid password.", "error");
    // } else if (!email) {
    //   //showToast("Please enter valid username.","error");
    // }
    }
  } catch (error) {
    // if (error.response.status === 401) {
    //   return //showToast("Invalid Credentials!", "error");
    // } else if (error.response.status === 404) {
    //   return //showToast("User Not Found! Please signup first!", error);
    // } else {
    //   return //showToast("Cannot login right now!", error);
    // }
  }
// }
};

export const signupHandler = async (
  email,
  password,
  user,
  authDispatch,
  toast,
  navigate,
  location
) => {
  try {
    if (email !== "" && password !== "") {
      const data = await axios.post("/api/auth/signup", {
        email,
        password,
        user,
      });
      authDispatch({
        type: "SIGNUP",
        payload: { email: email, pasword: password, data },
      });
      navigate(location.state?.from?.pathname || "/login", {
        replace: true,
      });

      toast.success("Signup Successful!");
      data.errors && toast.error(data.errors[0]);
    } else {
      toast.error("Please enter correct details.");
    }
  } catch (error) {
    if (error.response.status === 422) {
      return toast.error("User already Exist!");
    } else {
      toast.error("Cannot signup right now.");
    }
  }
};