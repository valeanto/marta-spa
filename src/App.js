import logo from "./logo.svg";
import "./App.css";
import Landing from "./pages/Landing";
import Instructions from "./pages/Instructions";
import Quiz from "./pages/Quiz";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/instructions" exact component={Instructions} />
        <Route path="/quiz" exact component={Quiz} />
      </Switch>
    </Router>
  );
}

export default App;
