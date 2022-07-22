import { Link } from "react-router-dom";
import { setTitle } from "../../../utils/set-title";

const Login = () => {  
  const title = "BottleCart | Login";
  setTitle(title);

  
  return (
    <div class="login">
      <h3>Login page</h3>
      <div>
      <form action="" className="form">
        <div class="form-div">
        <label htmlFor="">Email address</label>
        <input type="email" className="login-input primary-color"/>
        </div>
        <div class="form-div">
        <label htmlFor="">Password
        </label>
        <input type="password" className="login-input primary-color"/>
        </div>
        <div class="form-div">
        <label>
          <input type="checkbox" name="remember"/> Remember me
        </label>
        <div class="psw" >Forgot password?</div>
        </div>
        <button className="btn primary-btn login-btn">Login</button>

        <Link to="/signup">
          <span >Create new account</span>
        </Link>
      </form>
      </div>
    </div>
  );
};

export { Login };
