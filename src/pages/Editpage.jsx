import React, { useState } from 'react';
import '../style/UploadPage.css';
import Sidebar from '../component/Sidebar';
import Topbar from '../component/Topbar'; 
import PodcastCards from '../component/PodcastCards';
import UploadModal from '../component/UploadModal';
import UploadArea from '../component/UploadArea';
import EditTranscript from '../component/EditTranscript';

const Editpage = () => {
  const [showModal, setShowModal] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: 1,
      name: 'THE SIDEPOD S2 EPISODE 15',
      date: '25 Oct 23 | 09:04',
    },
    {
      id: 2,
      name: 'THE SIDEPOD S2 EPISODE 17',
      date: '27 Oct 23 | 11:08',
    },
    {
      id: 3,
      name: 'THE SIDEPOD S2 EPISODE 20',
      date: '31 Oct 23 | 20:28',
    },
  ]);

  return (
    <div className="upload-page">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <EditTranscript />
      </div>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Editpage;
