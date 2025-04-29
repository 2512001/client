import React from 'react';
import '../style/UploadArea.css';
import image4 from '../assets/image/Frame 11.png'


const UploadArea = ({onOpen}) => {
  return (
    <div onClick={onOpen} className="upload-area">
      <div className="upload-box">
        <img src={image4} />
      </div>
    </div>
  );
};

export default UploadArea;
