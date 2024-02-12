import React, { useEffect, useRef } from 'react';
import './Video.css';

const VideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log("Error attempting to play video: ", error));
    }
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        loop
        autoPlay={true}
        playsInline
        muted
        preload="auto"
        title="Local Video"
        className="background-video"
      >
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoComponent;
