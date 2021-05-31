import React, { useState } from 'react';

const CommentBox = (props) => {

  const [comment, setComment] = useState('');

  const handleClick = () => {
    setComment('')
    props.newComment(comment);
  }

  return (
    <div className="d-flex flex-column">
      <label for="exampleFormControlTextarea1" className="form-label">Cuentanos tu experiencia</label>
      <textarea
        className="form-control rounded"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="dejanos tu opinión"
        onChange={(e) => setComment(e.target.value)}
      />
      <button 
        type="button"
        className="mt-3 btn btn-outline-primary"
        onClick={handleClick}
      >Publicar</button>
    </div>
  );
};

export default CommentBox;