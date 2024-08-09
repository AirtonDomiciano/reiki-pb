import React from "react";

const ThumbnailItem = ({ img, title, topic }) => {
  return (
    <div className="item">
      <img src={img} alt={title} />
      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{topic}</div>
      </div>
    </div>
  );
};

export default ThumbnailItem;
