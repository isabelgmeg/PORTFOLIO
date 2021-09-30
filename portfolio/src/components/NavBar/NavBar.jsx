import { Link } from "react-router-dom";

import "./NavBar.scss";

const links = ["Home", "About", "Other", "Contact"];

export default function NavBar() {
  return (
    <nav className="navBar">
      <ul className="navBar__links">
        {links.map((e) => (
          <li key={e}>
            <Link to={`/${e}`}>{e.toLowerCase()}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
