import React from "react";

function card(props) {
  return (
    <div className="card-container">
      {props.title}
      <div className="image-container">
        <img src={props.imageUrl} width="360px" height="260px" alt="" />
      </div>
      {props.body}
    </div>
  );
}

export default card;
