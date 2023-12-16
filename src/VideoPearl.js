import React from 'react';
import './Video.css';

const VideoComponentPearl = () => {
  return (
    <div className="video-container">
      <video         
        loop
        autoPlay
        playsInline
        muted
        preload="auto"
        title="Local Video" 
        className="background-video">
        <source src="pearl.mp4" type="video/mp4" />
      </video>
    </div>
  );
};



export default VideoComponentPearl;
