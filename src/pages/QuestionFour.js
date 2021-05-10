import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import quizOneBackground from "../visuals/quiz/q1_background.mov";
import candle from "../images/quiz/q4/candle.png";
import getaway from "../images/quiz/q4/getaway.png";
import mirror from "../images/quiz/q4/mirror.png";
import title from "../visuals/quiz/q2/pick an element.png";

export default function QuestionFour() {
  return (
    <div className="questionContainer">
      <ReactPlayer
        className="react-player quiz-video"
        url={quizOneBackground}
        width="100%"
        height="100%"
        controls={false}
        loop={true}
        playing={true}
      />
      <div className="contentFour questionThree_container">
        <img src={title} alt={title} className="question_title" />
        <div className="door-container ">
          <div className="door doorOne">
            <img src={getaway} alt="" />
          </div>
          <div className="door doorTwo">
            <img src={mirror} alt="" />
          </div>
          <div className="door doorThree">
            <Link to="/question-three">
              <img src={candle} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
