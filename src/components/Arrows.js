import React from "react";

const Arrows = () => {
  const onClickPrev = () => {};

  const onClickNext = () => {};

  return (
    <div className="arrows">
      <button onClick={onClickPrev} id="prev">
        &lt;
      </button>
      <button onClick={onClickNext} id="next">
        &gt;
      </button>
    </div>
  );
};

export default Arrows;
