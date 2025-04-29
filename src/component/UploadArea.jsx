import React from 'react';
import '../style/UploadArea.css';
import { FaCloudUploadAlt } from 'react-icons/fa';
import image4 from '../assets/image/Frame 11.png'


const UploadArea = ({onOpen}) => {
  return (
    <div onClick={onOpen} className="upload-area">
      <div className="upload-box">
        <img src={image4} />
        {/* <div className="upload-icon">
          <FaCloudUploadAlt />
        </div>
        <p className="upload-text">
          Select a file or drag and drop here (Podcast Media or Transcription Text)
        </p>
        <p className="upload-subtext">
          MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
        </p>
        <button className="upload-button">Select File</button> */}
      </div>
    </div>
  );
};

export default UploadArea;
