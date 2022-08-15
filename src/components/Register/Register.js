import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';
import Footer from '../Home/Footer/Footer';
import Car from '../../images/h1-img1.png'
import './Register.css';


const Register = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
}
const handleLoginSubmit = e => {
    if (loginData.password !== loginData.password2) {
        alert('Your password did not match');
        return
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
}


const notify = () => toast.success('SingUp Successful!!!',{duration: 4000,});
    
    return (
        <div style={{marginTop:'150px'}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-6'>
                    <div className="d-flex justify-content-center">
            <div className="card register-card">
                <div className="card-body">
                <div className="d-flex justify-content-center">
                <h5 class="card-title login-text">Register</h5>
                </div>
                <form onSubmit={handleLoginSubmit}>
                <div class="form-group">
                    <label class="form-label login-text">Name</label>
                    <input type="text" class="form-control" onBlur={handleOnBlur}  name="name"  placeholder="Enter Name"/>
                </div>
                <br/>
                <div class="form-group">
                    <label class="form-label login-text">Email</label>
                    <input type="email" class="form-control" onBlur={handleOnBlur} name="email"  placeholder="Enter email"/>
                </div>
                <br />
                <div class="form-group">
                    <label class="form-label login-text">Password</label>
                    <input type="password" class="form-control"  onBlur={handleOnBlur}  name="password" placeholder="Password"/>
                </div>
                <br />
                <div class="form-group">
                    <label class="form-label login-text">Confirm Password</label>
                    <input type="password" class="form-control"  onBlur={handleOnBlur}  name="password2" placeholder="Re Type Your Password"/>
                </div>
                <br />
                <div className="d-grid">
                <button type="submit" onClick={notify} class="btn" style={{backgroundColor:'#34495e', color:'#ffffff'}}>Register</button>
                </div>
             </form>
             <Toaster
            position="top-center"
            reverseOrder={false}
            />
          </div>
        </div>
        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-6'>
                    <img src={Car} className='img-fluid' style={{marginTop:'100px'}} ></img>
                    </div>
                </div>
            </div>
        <Outlet/>
        <Footer/>
        </div>
    );
};

export default Register;