import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth.js";
import Footer from '../Home/Footer/Footer';
import Car from '../../images/h1-img1.png'
import Google from '../../images/googlelogo_color_272x92dp.png';
import './Login.css';


const Login = () => {
    // DynamicTitle('Fresh valey || Login');
  
  const [loginData, setLoginData] = useState({});
  const {  loginUser, signInWithGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
      loginUser(loginData.email, loginData.password, location, navigate);
      e.preventDefault();
  }

  const handleGoogleSignIn = () => {
      signInWithGoogle(location, navigate)
  }
  const notify = () => toast.success('Login Successful!!!',{duration: 4000,});


    return (
      <div style={{marginTop:'200px'}}>
     <div className="container" style={{marginBottom:'215px'}}>
    <div className='row'>
<div className='col-lg-6 col-md-6 col-6'>
<div className="card">
          <div className="card-body">
          <div className="d-flex justify-content-center">
          <h5 class="card-title login-text">Login</h5>
          </div>
          <form onSubmit={handleLoginSubmit}>
          <div class="form-group">
              <label class="form-label login-text">Email</label>
              <input type="email" class="form-control" name="email"  onChange={handleOnChange}   placeholder="Enter email"/>
          </div>
          <br />
          <div class="form-group">
              <label class="form-label login-text">Password</label>
              <input type="password" class="form-control" name="password" onChange={handleOnChange}  placeholder="Password"/>
          </div>
          <br />
         <div className="d-grid">
         <button type="submit" onClick={notify} class="btn" style={{backgroundColor:'#34495e', color:'#ffffff'}}>Login</button>
         </div>
         <br/>
         <div className="d-grid">
         <button type="submit" onClick={handleGoogleSignIn} style={{backgroundColor:'#fff', color:'#000', border:'1px solid black'}}>Login With Google  <img src={Google} style={{height:'20px', width:'40px'}} /> </button>
         </div>
         <Link to="/register">
         New User? <span style={{color:'#34495e'}}>Please Register</span>
         </Link>
          </form>
          <Toaster
         position="top-center"
         reverseOrder={false}
        />
          </div>
      </div>
</div>
<div className='col-lg-6 col-md-6 col-6'>
<img src={Car} className='img-fluid' ></img>
</div>
    </div>
     </div>
     <Outlet/>
     <Footer/>
    </div>
    );
};

export default Login;