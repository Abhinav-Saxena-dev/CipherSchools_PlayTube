import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data } = await axios.get('http://localhost:5000/api/videos');
      setVideos(data);
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-list">
      <h2>Video List</h2>
      {videos.map(video => (
        <div key={video._id} className="video">
          <Link to={`/video/${video._id}`}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <small>{video.createdAt}</small>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
