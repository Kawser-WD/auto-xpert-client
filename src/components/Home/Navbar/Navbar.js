import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../../images/LogoMakr-9aj3kJ.png'
import './Navbae.css';
import useAuth from '../../../hooks/useAuth.js';
const Navbar = () => {
  const { user, logout } = useAuth();
    return (
      <nav class="navbar navbar-expand-lg navbar-expand-sm fixed-top shadow " style={{backgroundColor:'#FFFFFF', height:'100px'}}>
      <div class="container-fluid">
      <img src={Logo} alt="" style={{width:'200px'}} class="d-inline-block align-text-top"/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <Link to='/'  class="nav-link"  style={{textDecoration:'none'}}><a class="nav-link" href=''  >Home</a></Link>
          </li>
          <li class="nav-item">
          <Link to='/dashboard'  class="nav-link"   style={{textDecoration:'none'}}><a class="nav-link" href=''>Dashboard</a></Link>
          </li>
            {
                   user?.email ?
                   <li class="nav-item">
                   <a class="nav-link" href='' style={{marginTop:'8px'}} onClick={logout}>Logout</a>
                   </li>
                   :
                   <li class="nav-item">
                   <Link  class="nav-link" to="/login"  style={{marginTop:'8px'}} >Login</Link>
                   </li>
               }
                
      </ul>
      </div>
  </div>
  </nav>
    );
};

export default Navbar;