import React from 'react';
import '../style/YourFiles.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { deletefile } from '../api/api';

const YourFiles = ({ files, setUploadedFiles }) => {
  const handleDelete = (id) => {
    deletefile(id);
    setUploadedFiles((prev) => prev.filter((file) => file._id !== id));
  };

  const formatDateTime = (dateString) => {
    return moment(dateString).format('DD MMM YYYY | hh:mm A');
  };

  return (
    <div className="your-files-wrapper">
      <h2 className="your-files-title">Your Files</h2>
      <div className="your-files-table">
        <div className="your-files-header">
          <div className="col-no">No.</div>
          <div className="col-name">Name</div>
          <div className="col-date">Upload Date & Time</div>
          <div className="col-action">Action</div>
        </div>
        {files.map((file, index) => (
          <div className="your-files-row" key={file._id}>
            <div className="col-no">{index + 1}</div>
            <div className="col-name">{file.name}</div>
            <div className="col-date">{formatDateTime(file.updatedAt)}</div>
            <div className="col-action">
              <Link to={`/file/${file._id}/Edit`} style={{textDecoration : 'none'}} className="btn view-btn">
                View
              </Link>
              <button className="btn delete-btn" onClick={() => handleDelete(file._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourFiles;
