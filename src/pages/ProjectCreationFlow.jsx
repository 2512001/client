import React, { useState } from "react";
import "../style/ProjectCreationFlow.css";
import home2 from '../assets/image/home2.png'
import { FaCirclePlus } from "react-icons/fa6";
import setting2 from '../assets/image/setting2.png'
import notification from '../assets/image/notifications.png';
import QuesLogo from '../assets/logo/QuesLogo 1 (1).png';
import { useQuery } from '@tanstack/react-query'
import { createProject, getProject } from "../api/api";
import { useSelector } from "react-redux";
import sp from '../assets/image/SP.png';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";


const ProjectCreationFlow = () => {
  const userId = useSelector((state) => state.userDetails.user.id);
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");


  const { data: projects, isLoading, refetch } = useQuery({ queryKey: ['projects'], queryFn: () => getProject(userId) });


  const handleCreateClick = () => {
    setShowModal(true);
  };

  const handleCreateProject = async () => {
    try {
      if (!projectName.trim()) {
        setError("Project Name Can't be empty");
        return;
      }
      const response = await createProject({ title: projectName });
      refetch();
      toast.success('project created')
    }
    catch (error) {
      console.log(error.message)
    }
    finally {
      setProjectName("");
      setError("");
      setShowModal(false);
    }
  };

  const handleCancel = () => {
    setProjectName("");
    setError("");
    setShowModal(false);
  };

  return (
    <div className="project-flow">
      <header className="header">
        <div className="header-logo"><img src={QuesLogo} /></div>
        <div className="header-icons">
          <img className="icon" src={setting2} />
          <img className="icon" src={notification} />
        </div>
      </header>

      {!projects?.length ? (
        <div className="empty-state">
          <h1>Create a New Project</h1>
          <img src={home2} alt="Create Project" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button onClick={handleCreateClick} className="primary-btn">
            <FaCirclePlus style={{ fontSize: '20px' }} />
            Create New Project
          </button>
        </div>
      ) : (
        <div className="project-list">
          <h2 style={{ color: '#7E22CE' }}>Projects</h2>
          <button onClick={handleCreateClick} className="primary-btn top-btn">
            <FaCirclePlus style={{ fontSize: '20px' }} /> Create New Project
          </button>
          <div className="project-pcard">
            {projects?.map((project, index) => (
              <Link key={index} to={`/project/${project._id}`}
                style={{
                  color: 'inherit',            
                  textDecoration: 'none',      
                }}>
                <div  className="pcard">
                  <div className="icon-placeholder"><img src={sp} style={{ width: '50%' }} /></div>
                  <div>
                    <div className="project-name">{project.title}</div>
                    <div className="file-count">{project.fileCount  ? project.fileCount  : '0'} Files</div>
                    <div className="last-edited">Last edited just now</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Create Project</h2>
            <label>Enter Project Name:</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Type here"
            />
            {error && <div className="error">{error}</div>}
            <div className="modal-buttons">
              <button onClick={handleCancel} className="cancel-btn">
                Cancel
              </button>
              <button onClick={handleCreateProject} className="create-btn">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCreationFlow;
