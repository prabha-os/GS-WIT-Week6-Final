import Navbar from "./components/Navbar";
import {Routes ,Route, Layout, Outlet} from 'react-router-dom';
import {LoginProvider} from "./context/LoginContext";

function App() {
  
  return (
    <LoginProvider>
        <div className="App">
          <Navbar/>
          <Outlet />
        </div>
    </LoginProvider>
  );
}

export default App;
