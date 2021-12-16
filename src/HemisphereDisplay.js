import React from "react";
import NorthernHemisphere from "./images/NorthernHemisphere.jpg";
import SouthernHemisphere from "./images/SouthernHemisphere.jpg";
import "./Hemisphere.css";

const hemisphereConfig = {
  Northern: {
    text: "it is northern hemisphere",
    picture: NorthernHemisphere,
  },
  Southern: {
    test: "it is southern hemisphere",
    picture: SouthernHemisphere,
  },
};

const HemisphereDisplay = ({ latitude, longitude }) => {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";

  const { text, picture } = hemisphereConfig[hemisphere];

  console.log(latitude);
  console.log(longitude);
  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="hemisphere picture" />
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
