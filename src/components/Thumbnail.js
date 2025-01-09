import React from "react";

const Thumbnail = ({ img, title, topicCard }) => {
  return (
    <div id={title + " - thumbnail"} className="item">
      <img src={img} alt={title} />
      <div className="content">
        <div className="title">{title}</div>
        {/* <div className="description">{topicCard}</div> */}
      </div>
    </div>
  );
};

export default Thumbnail;
