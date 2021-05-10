import React from "react";
import { Link } from "react-router-dom";

export default function Quiz() {
  return (
    <div>
      <Link to="/question-one">Room one </Link>
      {/* <Link to="/room-two">Room two </Link>
      <Link to="/room-three">Room three </Link> */}
    </div>
  );
}
