import React from "react";
import { Link } from "react-router-dom";
import roomTwoBackground from "../../visuals/rooms/postcard.mp4";
import ReactPlayer from "react-player";
import doorIcon from "../../visuals/rooms/button-door-frame.png";
import doorIconColor from "../../visuals/rooms/next-room.png";

export default function RoomTwo() {
  return (
    <div className="room-landing">
      <ReactPlayer
        className="react-player fixed-bottom"
        url={roomTwoBackground}
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={true}
      />
      <Link to="/room-three" className="room right nav-button">
        <img src={doorIcon} alt="" className="doorIcon" />
        <img src={doorIconColor} alt="" className="doorIconColor" />
      </Link>
      <Link to="/room-one"className="room left nav-button">
        <img src={doorIcon} alt="" className="doorIcon" />
        <img src={doorIconColor} alt="" className="doorIconColor" />
      </Link>
    </div>
  );
}
