import "./App.css";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardNavbar } from "./components/DashboardNavbar";
import { DashboardMain } from "./components/DashboardMain";
import { DashboardFooter } from "./components/DashboardFooter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <DashboardHeader />
        <DashboardNavbar />
        <DashboardMain />
        <DashboardFooter />
      </div>
    </Router>
  );
}

export default App;
