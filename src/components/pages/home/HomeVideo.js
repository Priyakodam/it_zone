import React, { useState, useRef } from 'react';
import videoSrc from "../../img/video.mp4";
import "./HomeVideo.css";

function VideoBackground() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-background-container">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        src={videoSrc}
        className="video-background"
      >
        Your browser does not support the video tag.
      </video>
      <div className='textcontainer'>
      <div className="videored-dash"></div>
      <div className="main-text">
        Repair Your Laptop & Desktop Computer
      </div>
      <div className="sub-text">
        We provide always our best services to our clients and always try to achieve our client's trust and satisfaction
      </div>
      </div>
      <button className="toggle-button" onClick={togglePlay}>
        {isPlaying ? '❚❚' : '▶'}
      </button>
    </div>
  );
}

export default VideoBackground;
