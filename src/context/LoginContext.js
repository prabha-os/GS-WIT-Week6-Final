const { createContext, useContext, useState } = require("react");
const { useNavigate } = require("react-router-dom");

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [login,setLogin] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            const res = await fetch("/logout", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
            const json = await res.json();
            setLogin(false);
            navigate('/signin')
            window.alert("User Logged out Successfully");
            console.log(json);
        } catch (err) {
            window.alert("Oops! Some error occured");
        }
    };

    const handleLogin = async (loginDetails) => {
        //here we are conecting this with backend
        const {email, password} = loginDetails;
        /*we send the page name and also the method and other changes we 
        have made in postman */

        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" ,
            },
            body: JSON.stringify({ email, password }),
            //we are converting it to string as in postman we are sending raw json obj
        });

        const json = res.json();
        console.log("res",res);

        if(res.status===200) {
            setLogin(true);
            window.alert("Login Successful");
            navigate('/learn');
        }else{
            window.alert("Invalid Credentials");
        }
    };

    return (
        <LoginContext.Provider  value={{ login, handleLogout, handleLogin }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => {
    return useContext(LoginContext);
};