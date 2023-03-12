import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment';
import { useParams } from 'react-router-dom';

function Comments({ match }) {
  const [comments, setComments] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/${id}/comments`);
      setComments(data);
    };

    fetchComments();
  }, [id]);

  return (
    <div className="comments">
      <h2>Comments</h2>
      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}

export default Comments;
