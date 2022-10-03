import "./css/App.css";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  );
}

export default App;
