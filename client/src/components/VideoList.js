import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/api/videos');
        setVideos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Videos</h2>
      {videos.map(video => (
        <div key={video._id}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <iframe
            width="560"
            height="315"
            src={video.url}
            title={video.title}
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
};

export default VideoList;
