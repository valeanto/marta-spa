import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      retreat
      <Link to="/instructions">
        <button>retreat</button>
      </Link>
    </div>
  );
}
