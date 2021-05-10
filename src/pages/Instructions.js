import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import instructionsVideo from "../visuals/homepage/trimmed.mp4";

export default function Instructions() {
  return (
    <div className='instructions-landing'> 
      <ReactPlayer
        className="react-player fixed-bottom"
        url={instructionsVideo}
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={true}
      />
      <Link to ='/quiz' className='to-button-quiz float'>Lets begin</Link>
    </div>
  );
}
