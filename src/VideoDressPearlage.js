import React from 'react';
import './Video.css';

const VideoComponentDressPearlage = () => {
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
        <source src="pearlage.mp4" type="video/mp4" />
      </video>
    </div>
  );
};



export default VideoComponentDressPearlage;
