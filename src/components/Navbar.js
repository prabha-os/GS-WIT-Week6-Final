import {Link, NavLink} from 'react-router-dom';

import {useLogin} from '../context/LoginContext';


function Navbar() {
    const {login,handleLogout} = useLogin();
    
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
               <NavLink className="navbar-brand nav-item" to='/'>Navbar</NavLink>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/signup">SignUp</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/learn">Learn</Link>
                        </li>
                        {login ? (
                           <li class="nav-item" onClick={handleLogout}>
                                <div className="nav-link">Logout</div>
                           </li>
                        ) : (
                            <li class="nav-item">
                                <Link class="nav-link" to="/signin">SignIn</Link>
                            </li>  
                        )}
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Navbar;




