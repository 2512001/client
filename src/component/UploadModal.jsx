import React, { useState } from 'react';
import '../style/UploadModal.css';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';

const UploadModal = ({ onClose, projectId, setUploadedFiles }) => {
  const [name, setName] = useState('');
  const [transcript, setTranscript] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://backend-y2sr.onrender.com/api/file', {
        name,
        transcript,
        projectId,
      } , {withCredentials : true});
      setUploadedFiles((prev) => [...prev, response.data.file]);
      toast.success(response.data.message);
      onClose();
    } catch (error) {
      console.error('Upload failed:', error);
      toast.error('Upload failed');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div className="title">
            <img
              src="https://img.icons8.com/color/48/000000/youtube-play.png"
              alt="YouTube"
              className="youtube-icon"
            />
            Upload from Youtube
          </div>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Transcript</label>
            <textarea
              rows="4"
              value={transcript}
              placeholder="Write transcript or notes here..."
              onChange={(e) => setTranscript(e.target.value)}
            ></textarea>
          </div>

          <div className="button-container">
            <button className="submit-btn" onClick={handleSubmit}>
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
