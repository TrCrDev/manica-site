import React, { useEffect, useRef } from 'react';
import './Video.css';

const VideoComponent = () => {
  const videoRef = useRef();

  useEffect(() => {
    const attemptPlay = async () => {
      try {
        await videoRef.current.play();
      } catch (err) {
        console.error('Failed to play the video automatically:', err);
      }
    };

    if (videoRef.current) {
      attemptPlay();
    }
  }, []); 
  return (
    <div className="video-container">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        className="background-video"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
      >
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoComponent;
