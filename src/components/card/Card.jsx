import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
  return (
    <Link className={'link-card ' + props.className} to={`/${props.type}/${props.id}`}>
      <div class="card card-vertical shadow p-3bg-body">
        <img src={props.img} class="card-img-top card-img mt-3" alt="img" />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.content}</p>
          {props.disableLikes === undefined ? <div className="d-flex justify-content-end align-items-center">
            <FontAwesomeIcon icon="thumbs-up" color="gray" className="me-3" /> {props.thumbsUp}
            <FontAwesomeIcon icon="thumbs-down" color="gray" className="ms-3 me-3" /> {props.thumbsDown}
          </div> : null}
        </div>

      </div>

    </Link>
  );
}
export default Card;