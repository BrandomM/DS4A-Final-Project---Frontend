import { Switch, Route } from "react-router-dom";
import { ChartsContainer } from "./ChartsContainer";
import { MapsContainer } from "./MapsContainer";
import { MemberCardContainer } from "./MemberCardContainer";
import { MetodologyContainer } from "./MetodologyContainer";

export function DashboardMain() {
  return (
    <main className="main">
      <Switch>
        <Route path="/charts">
          <ChartsContainer />
        </Route>
        <Route path="/maps">
          <MapsContainer />
        </Route>
        <Route path="/about">
          <MemberCardContainer />
        </Route>
        <Route path="/">
          <MetodologyContainer />
        </Route>
      </Switch>
    </main>
  );
}
