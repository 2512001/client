import React, { useState, useEffect, useRef } from 'react';
import '../style/EditTranscript.css';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { getsingleFile, saveEdit } from '../api/api';

const EditTranscript = () => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [transcriptText, setTranscriptText] = useState('');
  const [originalText, setOriginalText] = useState('');
  const transcriptRef = useRef(null);
  const navigate = useNavigate();

  // Fetch the transcript when component mounts
  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        const response = await getsingleFile(id);
        setTranscriptText(response.transcript);
        setOriginalText(response.transcript);
        if (transcriptRef.current) {
          transcriptRef.current.innerText = response.transcript;
        }
      } catch (error) {
        console.error('Error fetching transcript:', error);
      }
    };
    fetchTranscript();
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDiscard = () => {
    setTranscriptText(originalText); // reset state
    if (transcriptRef.current) {
      transcriptRef.current.innerText = originalText; // reset UI content
    }
    setIsEditing(false);
  };

  const handleSave = async () => {
    console.log('handle edit triggered');
    try {
      await saveEdit(id, transcriptText); // replace with your save logic
      setOriginalText(transcriptText);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving transcript:', error);
    }
  };

  const handleInput = () => {
    if (transcriptRef.current) {
      setTranscriptText(transcriptRef.current.innerText);
    }
  };

  const handleNavigate = () =>{
    navigate(-1)
  }

  return (
    <div className="edit-transcript-container">
      <div className="edit-transcript-header">
        <h1><FaArrowLeft cursor='pointer' onClick={handleNavigate}/> Edit Transcript</h1>
        {isEditing ? (
          <div className="edit-transcript-buttons">
            <button className="discard-btn" onClick={handleDiscard}>Discard</button>
            <button className="save-btn" onClick={handleSave}>Save</button>
          </div>
        ) : (
          <button className="edit-btn" onClick={handleEdit}>Edit</button>
        )}
      </div>

      <div className="edit-transcript-content">
        <div
          ref={transcriptRef}
          className="transcript-text"
          contentEditable={isEditing}
          suppressContentEditableWarning={true}
          onInput={handleInput}
        >
          {/* Start with empty innerText. We'll set real text manually */}
        </div>
      </div>
    </div>
  );
};

export default EditTranscript;
