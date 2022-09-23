import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useToast } from "../../../context";
import { setTitle } from "../../../utils/set-title";
import axios from "axios";
const Signup = () => {
  
  const title = "BottleCart | Signup";
  setTitle(title);

  const initialFormData = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	};

  const [formData, setFormData] = useState(initialFormData);
  const [isOngoingNetworkCall, setIsOngoingNetworkCall] = useState(false);

  const navigate = useNavigate();
	const { state } = useLocation();

	const { showToast } = useToast();
	const {
		setAuthState,
		authState: { isAuth },
	} = useAuth();

  const { firstName, lastName, email, password } = formData;
  

  // useEffect(() => {
	// 	if (isAuth) {
	// 		navigate(state?.from ? state.from : "/");
	// 	}
	// }, []);

  
  const handleFormDataChange = (event) => {
		const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};
  
  const handleFormSubmit = async (event) => {
		event.preventDefault();
		setIsOngoingNetworkCall(true);
		try {
			const { data } = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });
			showToast("Sign up successful!", "success");

			const {
				encodedToken,
				createdUser: { wishlist, cart, ...otherUserDetails },
			} = data;
			setAuthState({
				isAuth: true,
				token: encodedToken,
				user: { ...otherUserDetails },
			});

			setFormData(initialFormData);
			setIsOngoingNetworkCall(false);
			navigate("/");
		} catch (error) {
			if (error.message.includes("422"))
				showToast("Email already exists!", "error");
			else showToast("Sign up failed. Try again later.", "error");

			setIsOngoingNetworkCall(false);
		}

  return (
    <div class="login">
      <h3>Signup page</h3>
      <div>
      <form className="form" 
      onSubmit={handleFormSubmit}
      >
        <div class="form-div">
        <label >First Name</label>
        <input 
          type="text" 
          className="login-input primary-color"
          name="firstName"
					onChange={handleFormDataChange}
					value={firstName}
					required
        />
        </div>
        <div class="form-div">
        <label >Last Name</label>
        <input 
          type="text" 
          className="login-input primary-color"
          name="lastName"
					onChange={handleFormDataChange}
					value={lastName}
					required
        />
        </div>
        <div class="form-div">
        <label >Email address</label>
        <input 
          type="email" 
          className="login-input primary-color"
          name="email"
					onChange={handleFormDataChange}
					value={email}
					required
        />
        </div>
        <div class="form-div">
        <label >Password
        </label>
        <input 
          type="password" 
          className="login-input primary-color"
          name="password"
					onChange={handleFormDataChange}
					value={password}
					required
        />
        </div>
        {/* <div class="form-div">
        <label>
          <input type="checkbox" name="remember"/> Remember me
        </label>
        <div class="psw" >Forgot password?</div>
        </div> */}
        <input type="submit" className="btn primary-btn login-btn"> Signup</input>
        <Link to="/login">
          <span >Already have an account</span>
        </Link>
      </form>
      </div>
    </div>
  );
};
}
export { Signup };

