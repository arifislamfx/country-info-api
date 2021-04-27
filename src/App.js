import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/info/:countryId">
            <CountryInfo></CountryInfo>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
