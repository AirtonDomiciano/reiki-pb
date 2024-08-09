import React, { useEffect, useRef } from "react";
import ListItem from "./ListItem";
import ThumbnailItem from "./ThumbnailItem";

const Carousel = (props) => {
  const { items } = props.resumeData;

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
    const timeDom = timeRef.current;
    // const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

    let timeRunning = 3000;
    let timeAutoNext = 7000;

    const nextDom = nextButtonRef.current;
    const prevDom = prevButtonRef.current;

    const showSlider = (type) => {
      const SliderItemsDom = SliderDom.querySelectorAll(".item");
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }

      // setTimeout(() => {
      //   carouselDom.classList.remove("next");
      //   carouselDom.classList.remove("prev");
      // }, timeRunning);

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
        {items.map((item, index) => (
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
