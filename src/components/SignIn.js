import {Routes ,Route, Layout, Outlet} from 'react-router-dom';
import { useState } from 'react';
import { useLogin } from '../context/LoginContext';

function SignIn() {

    const [loginDetails, setLoginDetails] =useState({
        email: "",
        password: "",

    });

    const { handleLogin } = useLogin();

   //to see the components in inspect element we have to download react developer tools: chrome extension
    let fieldName, value;
    const handleInputChange = (e) => {
        fieldName = e.target.name;
        value = e.target.value;
        setLoginDetails({...loginDetails, [fieldName]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleLogin(loginDetails);
    };

  return (
    <div className="SignIn container-fluid p-5 align-items-center">
      <form>
                <h3>Sign In</h3>

                <div className="form-group m-2">
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email" 
                           onChange={handleInputChange}
                    />
                </div>

                <div className="form-group m-2">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Enter password" 
                          onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
    </div>
  );
}

export default SignIn;