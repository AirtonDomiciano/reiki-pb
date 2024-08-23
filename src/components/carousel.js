import React, { useEffect, useRef } from "react";
import ListItem from "./ListItem";
import ThumbnailItem from "./ThumbnailItem";

const Carousel = (props) => {
  const { items } = props.resumeData;

  const itemsThumbnail = [];

  itemsThumbnail.push(items[1]);
  itemsThumbnail.push(items[2]);
  itemsThumbnail.push(items[3]);
  itemsThumbnail.push(items[0]);

  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const timeRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  useEffect(() => {
    const carouselDom = carouselRef.current;
    const SliderDom = sliderRef.current;
    const thumbnailBorderDom = thumbnailRef.current;

    let timeRunning = 1000;
    let timeAutoNext = 7000;

    const nextDom = nextButtonRef.current;
    const prevDom = prevButtonRef.current;

    const showSlider = (type) => {
      const SliderItemsDom = SliderDom.querySelectorAll(".item");
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

      if (type === "next") {
        const firstItem = SliderItemsDom[0];
        const firstThumbnail = thumbnailItemsDom[0];

        SliderDom.appendChild(firstItem);
        thumbnailBorderDom.appendChild(firstThumbnail);

        carouselDom.classList.add("next");
      } else {
        const lastItem = SliderItemsDom[SliderItemsDom.length - 1];
        const lastThumbnail = thumbnailItemsDom[thumbnailItemsDom.length - 1];

        SliderDom.prepend(lastItem);
        thumbnailBorderDom.prepend(lastThumbnail, thumbnailItemsDom[0]);

        carouselDom.classList.add("prev");
      }

      setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      // setTimeout(() => {
      //   nextDom.click();
      // }, timeAutoNext);
    };

    const handleNextClick = () => {
      showSlider("next");
    };

    const handlePrevClick = () => {
      showSlider("prev");
    };

    nextDom.addEventListener("click", handleNextClick);
    prevDom.addEventListener("click", handlePrevClick);

    return () => {
      nextDom.removeEventListener("click", handleNextClick);
      prevDom.removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={sliderRef}>
        {items.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>

      <div className="thumbnail" ref={thumbnailRef}>
        {itemsThumbnail.map((item, index) => (
          <ThumbnailItem key={index} {...item} />
        ))}
      </div>

      <div className="arrows">
        <button ref={prevButtonRef} id="prev">
          &lt;
        </button>
        <button ref={nextButtonRef} id="next">
          &gt;
        </button>
      </div>
      <div className="time" ref={timeRef}></div>
    </div>
  );
};

export default Carousel;
