import React from 'react';

function YouTubeEmbed() {
  return (
    <iframe
      width="100%"
      height='500px'
      src="https://www.youtube.com/embed/VKuNHLgrQno?autoplay=1" // Add autoplay=1 to the src URL
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded YouTube Video"
    ></iframe>
  );
}

export default YouTubeEmbed;
