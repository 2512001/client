import React, { useState } from "react";
import "../style/Account.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import userImage from "../assets/image/user.jpg";
import axios from "axios";
import { setUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";


const AccountSettings = () => {
    const user = useSelector((state) => state.userDetails.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [name, setName] = useState(user.name);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name.trim() === user.name) return; 
        if(!name) return;
        try {
          const res = await axios.patch(`http://localhost:3000/api/user/${user.id}`, { name } , {withCredentials :  true});          
          dispatch(setUser(res.data.user));
          setSuccess(true);
          setTimeout(() => setSuccess(false), 2000);
        } catch (error) {
          console.error("Update failed:", error);
        }
    };

    return (
        <div className="account-settings-container">
            <div style={{ display: "flex" , gap : "1rem" ,  alignItems : "center" }}>
                <FaArrowLeftLong onClick={()=> navigate(-1)} cursor={'pointer'}/>
                <span className="account-settings-title">Account Settings</span>
            </div>
            <br />
            {success && (
                <p style={{ color: "green", marginTop: "10px", fontWeight: 500 }}>
                    Username updated!
                </p>
            )}

            <div className="user-info-section">
                <img src={userImage} alt="Profile" className="profile-picture" />
                <div className="user-inputs">
                    <span>
                        <label>User name</label>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="user-input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="User Name"
                            />
                        </form>

                    </span>
                    <span>
                        <label>Email</label>
                        <input
                            type="email"
                            className="user-input"
                            value={user.email}
                            readOnly
                        />
                    </span>
                </div>
            </div>

            <div className="subscription-section">
                <p className="subscription-message">
                    Oops! You don't have any active plans. <span>Upgrade now!</span>
                </p>
                <button className="upgrade-button">Upgrade</button>
            </div>
        </div>
    );
};

export default AccountSettings;
