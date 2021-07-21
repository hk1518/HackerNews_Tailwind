import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Landing from "./Landing.jsx";
import Post from "./Post.jsx";
import Main from "./Main.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/landing' component={Landing} />
        <Route path='/blog/:ID' component={Main} />
      </Switch>
    </Router>
  );
}
export default App;
