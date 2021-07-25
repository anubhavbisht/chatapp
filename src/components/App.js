import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Chat from "./Chat";
import { AuthProvider } from "../contexts/AuthContext";
const App = () => {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" exact component={Chat} />
            <Route path="/" exact component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
