import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store/store";
import Carrousel from "./page/Carrousel";

const App = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route  
        exact
        path={"/carrousel"}
        render={(props) => <Carrousel {...props} />}
      />
    </Switch>
  </ConnectedRouter>
);

export default App;
