import "./App.css";

import { members } from "./comoponents/Members";
import Home from "./comoponents/Members/Home";

import { Switch, Route } from "react-router-dom";
import Company from "./pages/company";
import Customer from "./pages/Customer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home membro={members} />
          </Route>
          <Route path="/customer/:id">
            <Customer />
          </Route>
          <Route path="/company/:id">
            <Company />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
