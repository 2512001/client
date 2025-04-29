import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import ProjectCreationFlow from "./pages/ProjectCreationFlow";
import Editpage from "./pages/Editpage";
import Account from "./pages/AccountSetting";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import UploadPage from "./pages/Uploadpage";

function App() {
  const islogin = useSelector((state) => state.userDetails.login);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!islogin ? <Login /> : <Navigate to="/" replace />} />
        <Route path="/" element={islogin ? <ProjectCreationFlow /> : <Navigate to="/login" replace />} />
        <Route path="/project" element={islogin ? <ProjectCreationFlow /> : <Navigate to="/login" replace />} />
        {/* <Route path="/project/:id" element={islogin ? <UploadPage /> : <Navigate to="/login" replace />} /> */}
        <Route path="/file/:id/Edit" element={islogin ? <Editpage /> : <Navigate to="/login" replace />} />
        <Route path="/account" element={islogin ? <Account /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to={islogin ? "/" : "/login"} replace />} />
      </Routes>

        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="dark"
        />
    </Router>
  );
}

export default App;
