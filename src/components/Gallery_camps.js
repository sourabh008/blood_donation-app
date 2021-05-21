import React from "react";
import logo3 from "./images/bloodimg.png";
import "../App.css";
function Gallery_camps() {
  return (
    <div>
      <div className="row">
        <div className="column">
          <img className="img" src={logo3} />
          <img className="img" src={logo3} />
        </div>
        <div className="column">
          <img className="img" src={logo3} />
          <img className="img" src={logo3} />
        </div>
        <div className="column">
          <img className="img" src={logo3} />
          <img className="img" src={logo3} />
        </div>
        <div className="column">
          <img className="img" src={logo3} />
          <img className="img" src={logo3} />
        </div>
      </div>{" "}
    </div>
  );
}

export default Gallery_camps;
