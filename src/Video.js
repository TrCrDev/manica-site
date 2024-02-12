import React, { useEffect, useRef } from 'react';
import './Video.css';

const VideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {

      videoRef.current.onloadeddata = null;
      videoRef.current.onerror = null;

      videoRef.current.onloadeddata = () => {
        videoRef.current.play().catch(err => console.error('Error playing video:', err));
      };

      videoRef.current.onerror = () => {
        console.error('Error loading video');
      };
    }
  }, [videoRef]); 

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        className="background-video"
      >
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
