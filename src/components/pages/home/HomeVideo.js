import React, { useState, useRef } from 'react';
import videoSrc from "../../img/video.mp4"; // Ensure this path is correct

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

    <div className='my-container'style={{ position: 'relative', width: '100%', height: '620px' }}>
      <video
        ref={videoRef}
        width="100%"
        height="100%" // Adjusted to take full height of the container
        autoPlay
        loop
        muted
        playsInline
        src={videoSrc}
        style={{ objectFit: 'cover' }} // This makes the video cover the full container
        frameBorder="0"
        allowFullScreen
        title="Background Video"
      >
        Your browser does not support the video tag.
      </video>
      <button
        onClick={togglePlay}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '10px', 
          width: '40px',
          padding: '8px',
          borderRadius: '30px',
          backgroundColor:'grey'
        }}
      >
        {isPlaying ? '❚❚' : '▶'} {/* Pause and Play symbols */}
      </button>
    </div>
  );
}

export default VideoBackground;
