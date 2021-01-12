import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CoinSummary from "./components/pages/CoinSummary";
import "./App.css";
import CoinDetails from "./components/pages/CoinDetails";
import Footer from "./components/layout/Footer";

localStorage.setItem("currentCurrency", "USD");

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/details" component={CoinDetails} />
          <Route exact path="/" component={CoinSummary} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
