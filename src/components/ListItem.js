import React from "react";
import { useNavigate } from "react-router-dom";

const ListItem = ({ url, img, author, title, topic, description }) => {
  const navigate = useNavigate();

  const seeMore = (url) => {
    navigate(`/${url}`, { replace: true });
    console.log(url);
  };

  const contact = () => {};

  return (
    <div id={title + " - carousel"} className="item">
      <img src={img} alt={title} />
      <div className="content">
        <div className="author">{author}</div>
        <div className="title">{title}</div>
        <div className="topic">{topic}</div>
        <div className="des">{description}</div>
        <div className="buttons">
          <button className="btn-see-more" onClick={() => seeMore(url)}>
            Saiba mais
          </button>
          <button onClick={contact}>Contato</button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
