import React, { useEffect, useState } from 'react';
import '../style/UploadPage.css';
import Sidebar from '../component/Sidebar';
import Topbar from '../component/Topbar';
import PodcastCards from '../component/PodcastCards';
import UploadModal from '../component/UploadModal';
import UploadArea from '../component/UploadArea';
import YourFiles from '../component/YourFiles';
import { getFiles } from '../api/api';
import { useParams } from 'react-router-dom';



const UploadPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
   const {id} = useParams()

  useEffect(()=> {
    const fetchFiles = async () => {  
      try {
        const response = await  getFiles(id);
        setUploadedFiles(response); 
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };
    if (id) {
      fetchFiles();
    };
  }, [id]);   
  

  return (
    <div className="upload-page">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="upload-options">
          <PodcastCards  setShowModal={setShowModal}/>
        </div>

        {uploadedFiles.length > 0 ? (
          <YourFiles setUploadedFiles={setUploadedFiles} files={uploadedFiles}/>
        ) : (
          <UploadArea  files={uploadedFiles} onOpen={() => setShowModal(true)}/>
        )}
      </div>

      {showModal && <UploadModal onClose={() => setShowModal(false)} projectId={id}  setUploadedFiles={setUploadedFiles} />}


    </div>
  );
};

export default UploadPage;
