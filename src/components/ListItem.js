import React from "react";

const ListItem = ({ img, author, title, topic, description }) => {
  return (
    <div className="item">
      <img src={img} alt={title} />
      <div className="content">
        <div className="author">{author}</div>
        <div className="title">{title}</div>
        <div className="topic">{topic}</div>
        <div className="des">{description}</div>
        <div className="buttons">
          <button>SEE MORE</button>
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
