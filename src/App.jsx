import React from "react";
import { Route, Switch } from "react-router-dom";
import { Admin, Main, Apply, Draw, End } from "@pages";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/2024396E1D3F21454498A3D02FDEAC63E9A60EF74DE9EF80EE4336E33F756352"
        component={Admin}
      />
      <Route exact path="/" component={Main} />
      <Route exact path="/apply" component={Apply} />
      <Route exact path="/draw" component={Draw} />
      <Route exact path="/applycorrect" component={End} />
      <Route exact path="/drawcorrect" component={End} />
    </Switch>
  );
}

export default App;
