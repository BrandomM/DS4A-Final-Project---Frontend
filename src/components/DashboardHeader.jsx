import minticLogo from "../assets/mintic.png";
import correlationLogo from "../assets/correlation_one_logo.png";
import { Switch, Route } from "react-router-dom";

export function DashboardHeader() {
  return (
    <header className="header">
      <div className="logos">
        <a href="https://www.mintic.gov.co/portal/inicio/">
          <img src={minticLogo} alt="Mintic" />
        </a>
        <a href="https://www.correlation-one.com/">
          <img src={correlationLogo} alt="Correlation One" />
        </a>
      </div>
      <h1>
        <Switch>
          <Route path="/charts">COUNTERFACTUAL CHARTS</Route>
          <Route path="/about">ABOUT US</Route>
          <Route path="/maps">MORTALITY MAPS</Route>
          <Route path="/">METHODOLOGY</Route>
        </Switch>
      </h1>
    </header>
  );
}
