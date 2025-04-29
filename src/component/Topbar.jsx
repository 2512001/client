import React from 'react';
import '../style/Topbar.css'; 
import bellIcon from '../assets/image/bell.png';
import homeIcon from '../assets/image/home.png';
import logout from '../assets/image/logout.png'
import { setlogout } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Topbar = () => {

  const dispatch = useDispatch();

  const handlelogout = () => {
    try {
      console.log('triggered');
      dispatch(setlogout())

    } catch (error) {
      console.log(error.message);

    }
  }
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="breadcrumb">
          <img src={homeIcon} />  <Link to='/' style={{ fontFamily : 'Roboto' , textDecoration : 'none' , color : '#6B7280' , fontWeight : '600'}}> Home Page </Link>  /   <Link to='/' style={{ fontFamily : 'Roboto' , textDecoration : 'none' , color : '#6B7280' , fontWeight : '600'}}>Sample Project </Link> / <span className="highlight">Add your podcast</span>
        </span>
      </div>
      <div className="topbar-right">
        <button className="icon-btn">
          <img src={bellIcon} />
        </button>
        <button onClick={handlelogout} className="icon-btn">
          <img src={logout} />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
