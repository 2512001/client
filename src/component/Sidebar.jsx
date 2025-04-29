import React from 'react';
import '../style/Sidebar.css';
import layer2 from '../assets/logo/QuesLogo 1 (1).png'
import setting from '../assets/image/setting.png';
import diamond from '../assets/image/diamond.png';
import penIcon from '../assets/image/penIcon.png';
import podcastIcon from '../assets/image/podcastIcon.png';
import userImage from '../assets/image/user.jpg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const user = useSelector((state) => state.userDetails.user);

  return (
    <div class="sidebar">
      <div class="sidebar-top">
        <div class="logo">
          <img src={layer2} alt="Logo" />
        </div>
        <ul class="menu">
          <li class="menu-item active">
            <span class="plus">+</span> Add your Podcast(s)
          </li>
          <li class="menu-item">
            <span>
              <img src={penIcon} />
            </span>
            Create & Repurpose
          </li>
          <li class="menu-item">
            <span>
              <img src={podcastIcon} />
            </span>
            Podcast Widget
          </li>
          <li class="menu-item">
            <span>
              <img src={diamond} />
            </span>
            Upgrade
          </li>
        </ul>
        <hr />
      </div>

      <div class="sidebar-bottom">
        <div class="help"><img src={setting} />Help</div>
        <hr />
        <Link  to='/account' style={{textDecoration : 'none'}} class="user-profile">
          <img src={userImage} alt="User Image" />
          <div class="user-info">
            <div class="username">{user?.name}</div>
            <div class="email">{user?.email}</div>
          </div>
        </Link>
      </div>

      <button class="collapse-btn">≪</button>
    </div>


  );
};

export default Sidebar;
