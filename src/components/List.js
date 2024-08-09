import React from "react";
import ListItem from "./ListItem";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

const List = () => {
  const items = [
    {
      img: img1,
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      img: img2,
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      img: img3,
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      img: img4,
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description: "Lorem ipsum dolor sit amet...",
    },
  ];

  return (
    <div className="list">
      {items.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </div>
  );
};

export default List;
