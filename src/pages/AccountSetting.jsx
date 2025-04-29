import React, { useState } from 'react';
import '../style/UploadPage.css';
import Sidebar from '../component/Sidebar';
import Topbar from '../component/Topbar';
import AccountSettings from '../component/Account';

const Account = () => {
    return (
        <div className="upload-page">
            <Sidebar />
            <div className="main-content">
                <Topbar />
                <AccountSettings />
            </div>

        </div>
    );
};

export default Account;
