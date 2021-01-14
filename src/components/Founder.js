import React from "react";

export default function Founder({founder}) {
  return (
    <div className="people">
      <h2>
        {founder.title}
        <br />-<br />
        {founder.desc}
      </h2>
      {/* <img className="headshot" height="200" width="200"src={WeirdFace} alt="Zelos Esports"></img> */}
    </div>
  );
}
