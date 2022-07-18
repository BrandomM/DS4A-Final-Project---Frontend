import { Link } from "react-router-dom";

export function DashboardButton({ description, to }) {
  return (
    <Link
      to={to}
      className="btn btn-dashboard"
    >
      {description}
    </Link>
  );
}
