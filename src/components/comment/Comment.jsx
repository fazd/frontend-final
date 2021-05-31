import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Comment = (props) => {

  const [heartIconColor, setHeartIconColor] = useState({ color: 'gray', isSelected: false, selectedColor: 'red', quantity: 0 });
  const [thumbsUpIconColor, setThumbsUpIconColor] = useState({ color: 'gray', isSelected: false, selectedColor: 'green', quantity: 0 });
  const [thumbsDownIconColor, setThumbsDownIconColor] = useState({ color: 'gray', isSelected: false, selectedColor: 'red', quantity: 0 });



  return (
    <div>
      <div className="card my-1 bg-semi-transparent">
        <div className="card-body">
          <div className="d-flex flex-row justify-content-between">
            <h5 className="card-title">{props.name} dice</h5>
            <h5 className="fs-6 ">{props.created}</h5>
          </div>
          <p className="card-text">{props.content}</p>
        </div>
        <div className="container d-flex flex-row">
          <div className="icon-grp mx-2 mb-2">
            <FontAwesomeIcon
              icon="heart"
              color={heartIconColor.isSelected ? heartIconColor.selectedColor : heartIconColor.color}
              className="me-1"
              onMouseEnter={() => setHeartIconColor({ ...heartIconColor, color: 'red' })}
              onMouseLeave={() => setHeartIconColor({ ...heartIconColor, color: 'gray' })}
              onClick={() => setHeartIconColor({ ...heartIconColor, isSelected: !heartIconColor.isSelected })}
            /> {heartIconColor.quantity}
          </div>
          <div className="icon-grp ms-3">
            <FontAwesomeIcon
              icon="thumbs-up"
              color={thumbsUpIconColor.isSelected ? thumbsUpIconColor.selectedColor : thumbsUpIconColor.color}
              className="me-1"
              onMouseEnter={() => setThumbsUpIconColor({ ...thumbsUpIconColor, color: 'green' })}
              onMouseLeave={() => setThumbsUpIconColor({ ...thumbsUpIconColor, color: 'gray' })}
              onClick={() => setThumbsUpIconColor({ ...thumbsUpIconColor, isSelected: !thumbsUpIconColor.isSelected })}

            /> {thumbsUpIconColor.quantity}
          </div>
          <div className="icon-grp ms-3">
            <FontAwesomeIcon
              icon="thumbs-down"
              color={thumbsDownIconColor.isSelected ? thumbsDownIconColor.selectedColor : thumbsDownIconColor.color}
              className="me-1"
              onMouseEnter={() => setThumbsDownIconColor({ ...thumbsDownIconColor, color: 'red' })}
              onMouseLeave={() => setThumbsDownIconColor({ ...thumbsDownIconColor, color: 'gray' })}
              onClick={() => setThumbsDownIconColor({ ...thumbsDownIconColor, isSelected: !thumbsDownIconColor.isSelected })}

            /> {thumbsDownIconColor.quantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;