import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useCart, useToast } from "../../../context";
import { loginHandler } from "../../../services";
import { setTitle } from "../../../utils/set-title";

const Login = () => {  
  const title = "BottleCart | Login";
  setTitle(title);
  
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  // const showPasswordHandler = () => {
  //   setShowPassword((prev) => !prev);
  // };
  const handleInput = (e, value) => {
    if (value === "password") {
      setPassword(e.target.value);
    }
    if (value === "email address") {
      setUserName(e.target.value);
    }
  };
  const guestLoginHandler = () => {
    const user = {
      email: "kumsomi@gmail.com",
      password: "kumsomi@12",
    };
    setUserName(user.email);
    setPassword(user.password);
    loginHandler(
      user.email,
      user.password,
      authDispatch,
      // toast,
      navigate,
      location
    );
  };
  const { showToast } = useToast();

  // const initialFormData = {
	// 	email: "",
	// 	password: "",
	// 	rememberMe: false,
	// };
	// const [formData, setFormData] = useState(initialFormData);
	// const [showPassword, setShowPassword] = useState(false);
	// const [isOngoingNetworkCall, setIsOngoingNetworkCall] = useState(false);

	// const navigate = useNavigate();
	// const location = useLocation();

	// const {
	// 	setAuthState,
	// 	authState: { isAuth },
	// } = useAuth();

  // // itemsInCart: [],
  // //   wishlistItems: [],
	// const { cartDispatch } = useCart();
	// // const { wishListDispatch } = useWishList();

	// const { showToast } = useToast();
	// // const { setDocumentTitle } = useDocumentTitle();

	// useEffect(() => {
	// 	if (isAuth) {
	// 		navigate(location?.state?.from ?? -1, { replace: true });
	// 	}
	// 	// setDocumentTitle("Bookery | Login");
	// }, []);

	// const handleFormDataChange = (event) => {
	// 	const { name, value, checked } = event.target;

	// 	setFormData((prevFormData) => ({
	// 		...prevFormData,
	// 		[name]: name === "rememberMe" ? checked : value,
	// 	}));
	// };


	// const handleFormSubmit = async (event) => {
	// 	event.preventDefault();

	// 	setIsOngoingNetworkCall(true);

	// 	try {
	// 		const { data } = await initiateLogin(formData);
	// 		showToast("Login Successful!", "success");
	// 		const {
	// 			encodedToken,
	// 			foundUser: { cart: cartItems, wishlist, ...otherUserDetails },
	// 		} = data;
	// 		setAuthState({
	// 			isAuth: true,
	// 			token: encodedToken,
	// 			user: { ...otherUserDetails },
	// 		});

  //     cartDispatch({type:"ADD_TO_CART", payload:})

	// 		// cartDispatch({ type: "INIT_CART_ITEMS", payload: { cartItems } });
	// 		// wishListDispatch({
	// 		// 	type: "INIT_WISHLIST_ITEMS",
	// 		// 	payload: {
	// 		// 		wishListItems: wishlist,
	// 		// 		error: null,
	// 		// 		loading: false,
	// 		// 	},
	// 		// });

	// 		if (rememberMe) {
	// 			localStorage.setItem("bottle-cart-token", encodedToken);
	// 			localStorage.setItem(
	// 				"bottle-cart-user",
	// 				JSON.stringify(otherUserDetails)
	// 			);
	// 		}
	// 		setFormData(initialFormData);
	// 		setIsOngoingNetworkCall(false);
	// 		navigate(location?.state?.from ?? -1, { replace: true });
	// 	} catch (error) {
	// 		showToast("Login Failed. Please try again later", "error");
	// 		setIsOngoingNetworkCall(false);
	// 	}
	// };

	// const { email, password, rememberMe } = formData;
	// // const handleChangePasswordVisibility = () =>
	// // 	setShowPassword((prevShowPassword) => !prevShowPassword);

	// const handleLoginWithTestCredentials = (event) => {
	// 	setFormData({
	// 		email: process.env.REACT_APP_GUEST_USER_EMAIL,
	// 		password: process.env.REACT_APP_GUEST_USER_PASSWORD,
	// 		rememberMe: true,
	// 	});
	// };


  return (
    <div class="login">
      <h3>Login page</h3>
      <div>
      <form action="" className="form">
        <div class="form-div">
        <label>Email address</label>
        <input type="email" className="login-input primary-color"
          onChange={handleInput}
          value={userName}
        />
        </div>
        <div class="form-div">
        <label htmlFor="">Password
        </label>
        <input type="password" className="login-input primary-color"
          onChange={handleInput}
          value={password}
        />
        </div>
        <div class="form-div">
        <label>
          <input type="checkbox" name="remember"/> Remember me
        </label>
        <div class="psw" >Forgot password?</div>
        </div>
        <button className="btn primary-btn login-btn" onClick={()=>{loginHandler(userName,
                  password,
                  authDispatch,
                  showToast,
                  navigate,
                  location
                  );
                }}>Login</button>
        <button className="btn primary-btn login-btn" onClick={guestLoginHandler}>Login with test credentials</button>

        <Link to="/signup">
          <span >Create new account</span>
        </Link>
      </form>
      </div>
    </div>
  );
};

export { Login };
