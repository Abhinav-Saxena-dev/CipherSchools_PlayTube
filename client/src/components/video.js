import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentForm from './CommentForm';


const Video = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  console.log(id)

  let fetchVideo = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/${id}`);
      setVideo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, [id]);

  return (
    <div>
      {video ? (
        <>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <iframe
            width="560"
            height="315"
            src={video.url}
            title={video.title}
            allowFullScreen
          />
          <CommentForm videoId={video._id} fetchVideo = {fetchVideo}/>
          {video.comments.map(comment => (
            <div key={comment._id}>
              <div><b>{comment.name}</b><br/></div>
              <p>{comment.text}</p>
            </div>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Video;
