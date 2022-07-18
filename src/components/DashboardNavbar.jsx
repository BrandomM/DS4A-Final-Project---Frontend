import { DashboardButton } from "./DashboardButton";

export function DashboardNavbar() {
  return (
    <nav className="navbar">
      <h1>COVID-19 ANALYSIS</h1>
      <DashboardButton description="METHODOLOGY" to="/" />
      <DashboardButton description="CHARTS" to="/charts" />
      <DashboardButton description="MAPS" to="/maps" />
      <DashboardButton description="ABOUT US" to="/about" />
    </nav>
  );
}
