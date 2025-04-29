import React, { useState } from "react";
import "../style/Login.css";
import quesAi from '../assets/logo/Queslogo.png'
import backgroundImg from '../assets/logo/Mask group.png'
import layer2 from '../assets/logo/layer2.png';
import google from '../assets/logo/google.png';
import { loginUser } from "../api/api";
import { setUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    try {
      let response = await loginUser({email , password});
      if(response.data.success){
         dispatch(setUser(response.data.data));
         toast.success(response.data.message)
         navigate('/');
      }
      
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  return (
    <div className="container">
      {/* Left Side */}
      <div className="left">
        <div className="left-content">
          <div className="logo">
            <img src={quesAi} alt="Logo" />
          </div>
          <span className="headline">
            Your podcast <br /> will no longer <br /> be just a hobby.
          </span>
          <br />
          <p className="subtext">
            Supercharge Your Distribution <br /> using our AI assistant!
          </p>
        </div>
        <div className="wave-effect">
          <img
            src={backgroundImg}
            alt="Wave Effect"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="right">
        <form className="loginform" onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="logo-section">
              <div className="icon"><img src={layer2} alt="layer image" /></div>
              <span className="logo-headline" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="title">welcome to</div>
                <span className="highlight">Ques.AI</span>
              </span>
            </div>
            <input type="email" value={email} autocomplete="current-email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="input" />
            <input type="password" value={password} autocomplete="current-password" onChange={(e) => setpassword(e.target.value)} placeholder="Password" className="input" />
            <div className="options">
              <label><input type="checkbox" /> Remember me</label>
              <a href="#">Forgot password?</a>
            </div>
            <button className="login-button">Login</button>
            <div className="divider">----------------  or  ----------------</div>
            <button className="google-button">
              <img
                src={google}
                alt="Google"
                className="google-icon"
              />
              Continue with Google
            </button>
            <p className="signup">Don’t have an account? <a href="#">Create Account</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
