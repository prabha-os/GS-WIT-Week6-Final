import { useState } from 'react';
import {Routes ,Route, Layout, Outlet, Link} from 'react-router-dom';


function SignUp() {

    const [user, setUser] =useState({
        name: "",
        email: "",
        phone: "",
        password: "",

    });
   //to see the components in inspect element we have to download react developer tools: chrome extension
    let fieldName, value;
    const handleInputChange = (e) =>{
        fieldName = e.target.name;
        value = e.target.value;
        setUser({...user, [fieldName]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //here we are conecting this with backend
        const {name, email, phone, password}=user;
        /*we send the page name and also the method and other changes we 
        have made in postman */

        const res = await fetch('/register',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phone, password }),
            //we are converting it to string as in postman we are sending raw json obj
        });

        const json = res.json();
        console.log("res",res)
        if(res.status===200) {
            window.alert("User created successfully")
        }else{
            window.alert("Oops! Some error occured")
        }

    };
 //json webtoken is used to check if the token in the db and sent one is same
  return (
    <div className="SignUp container-fluid p-5">
        <form>
                <h3>Sign Up</h3>

                <div className="form-group m-2">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Full name" 
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group m-2">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                       name="email" value={user.email}
                       onChange={handleInputChange}
                    />
                </div>

                <div className="form-group m-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                       name="password" value={user.password}
                       onChange={handleInputChange}
                    />
                </div>

                <div className="form-group m-2">
                    <label>Phone No</label>
                    <input type="text" className="form-control" placeholder="Enter PhoneNo" 
                       name="phone" value={user.phone}
                       onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block m-2" onClick={handleSubmit}>Sign Up</button>

                <p className="forgot-password text-right">
                    Already registered <Link to="/signin">SignIn?</Link>
                </p>
            </form>
    </div>
  );
}

export default SignUp;