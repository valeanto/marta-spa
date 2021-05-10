import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import quizOneBackground from "../visuals/quiz/q1_background.mov";
import title from "../visuals/quiz/q3/title.png";
import retreatLogo from "../images/quiz/q2/retreat.png";

export default function QuestionThree() {
  return (
    <div className="questionContainer">
      <img src={retreatLogo} alt={title} className="retreatLogo" />
      <ReactPlayer
        className="react-player quiz-video"
        url={quizOneBackground}
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={true}
      />
      <div className="questionThree_container">
        <img src={title} className="q3_title" alt="" />
        <div className="q3_content">
          <div className="row">
            <h1>inhale</h1>
            <h1>slow</h1>
            <h1>exhale</h1>
          </div>
          <div className="row">
            <h1> heart</h1>
            <h1>Me</h1>
          </div>
          <div className="row">
            <h1>playa</h1>
            <h1>escape</h1>
            <h1>fun</h1>
          </div>
        </div>
      </div>
      <Link to="/question-four">Room four </Link>
    </div>
  );
}
