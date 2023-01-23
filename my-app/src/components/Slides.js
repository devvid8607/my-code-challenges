import React, { useState } from "react";

function Slides({ slides }) {
  const [currSlide, setCurrSlide] = useState(0);
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={() => setCurrSlide(0)}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={currSlide === 0}
          onClick={() => {
            setCurrSlide(currSlide - 1);
          }}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={currSlide === slides.length - 1}
          onClick={() => setCurrSlide(currSlide + 1)}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currSlide].title}</h1>
        <p data-testid="text">{slides[currSlide].text}</p>
      </div>
    </div>
  );
}

export default Slides;
