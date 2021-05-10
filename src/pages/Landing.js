import React from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../visuals/homepage/background.mp4";
import retreatLogo from "../visuals/homepage/white-logo-glow.png";
import ReactPlayer from "react-player";

export default function Landing() {
  return (
    <div class="background-landing">
      <ReactPlayer
        className="react-player fixed-bottom"
        url={backgroundVideo}
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={true}
      />
      <Link to="/instructions" class="landing-link">
        <img src={retreatLogo} alt="" />
      </Link>
    </div>
  );
}
