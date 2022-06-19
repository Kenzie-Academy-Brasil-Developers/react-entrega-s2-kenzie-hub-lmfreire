import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Login
          setAuthenticated={setAuthenticated}
          authenticated={authenticated}
        />
      </Route>
      <Route path="/login">
        <Login
          setAuthenticated={setAuthenticated}
          authenticated={authenticated}
        />
      </Route>
      <Route path="/signup">
        <Signup authenticated={authenticated} />
      </Route>
      <Route path="/home">
        <Home authenticated={authenticated} />
      </Route>
    </Switch>
  );
}

export default Routes;
