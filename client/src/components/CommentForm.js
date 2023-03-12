import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ videoId, fetchVideo, setReplyForm }) => {
  const [data, setData] = useState({
    name : "",
    comment : "",
  });

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/video/${videoId}/comments`,{
        name : data.name,
        text : data.comment
      });
      console.log(response.data);
      setData('');
      setReplyForm(false)
      fetchVideo();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target
    setData(prev => ({
      ...prev, [name] : value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name : </label>
        <input type="text" name = "name" value = {data.name} onChange={handleChange} required/><br/>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={data.text}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
