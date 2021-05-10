import "./style/App.css";
import Landing from "./pages/Landing";
import Instructions from "./pages/Instructions";
import Quiz from "./pages/Quiz";
import RoomOne from "./pages/rooms/RoomOne";
import RoomTwo from "./pages/rooms/RoomTwo";
import RoomThree from "./pages/rooms/RoomThree";
import QuestionOne from "./pages/QuestionOne";
import QuestionTwo from "./pages/QuestionTwo";
import QuestionThree from "./pages/QuestionThree";
import QuestionFour from "./pages/QuestionFour";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/instructions" exact component={Instructions} />
        <Route path="/quiz" exact component={Quiz} />
        {/* ROOMS */}
        <Route path="/room-one" exact component={RoomOne} />
        <Route path="/room-two" exact component={RoomTwo} />
        <Route path="/room-three" exact component={RoomThree} />
        <Route path="/question-one" exact component={QuestionOne} />
        <Route path="/question-two" exact component={QuestionTwo} />
        <Route path="/question-three" exact component={QuestionThree} />
        <Route path="/question-four" exact component={QuestionFour} />
      </Switch>
    </Router>
  );
}

export default App;
