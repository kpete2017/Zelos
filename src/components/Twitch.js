import React, { useState } from "react";
import "./Twitch.css";

export default function twitch() {
  const [embedVid, setEmbedVid] = useState(true);

  if (embedVid === true) {
    return (
      <>
        <p id="exit" onClick={setEmbedVid(!embedVid)}>
          X
        </p>
        <iframe
          title="twitch"
          id="twitch-viewer"
          src="https://player.twitch.tv/?channel=zeloscompete&parent=zelos-a9142.web.app"
          frameborder="0"
          allowfullscreen="true"
          scrolling="no"
          height="400"
          width="500"
          autoplay="true"
        ></iframe>
      </>
    );
  }
}
