import React from 'react';
import './Video.css';

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoComponent;
