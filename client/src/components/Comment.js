import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comment">
      <h3>{comment.author}</h3>
      <p>{comment.text}</p>
      <small>{comment.createdAt}</small>
    </div>
  );
}

export default Comment;
