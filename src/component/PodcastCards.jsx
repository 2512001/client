import React from 'react';
import '../style/PodcastCards.css';
import image1 from '../assets/image/image 1.png';
import image2 from '../assets/image/youtube.png';
import image3 from '../assets/image/ic_round-upload.png';

const PodcastCards = ({ setShowModal }) => {
   
  return (
    <div className="podcast-cards">
      <span className="title">Add Podcast</span>
        <br />
      <div className="cards-container">
        <div className="card" onClick={()=> setShowModal(true)}>
          <div className="card-content">
            <h2>RSS Feed</h2>
            <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
          </div>
          <div className="icon-wrapper">
             <img src={image1} />
          </div>
        </div>

        <div className="card" onClick={()=> setShowModal(true)}>
          <div className="card-content">
            <h2>Youtube Video</h2>
            <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
          </div>
          <div className="icon-wrapper">
          <img src={image2} />
          </div>
        </div>

        <div className="card" onClick={()=> setShowModal(true)}>
          <div className="card-content">
            <h2>Upload Files</h2>
            <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
          </div>
          <div className="icon-wrapper">
          <img src={image3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCards;
