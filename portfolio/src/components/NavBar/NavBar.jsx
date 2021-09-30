import { Link } from "react-router-dom";

import "./NavBar.scss";

const links = ["home", "about", "other"];

const ButtonMailto = ({ mailto, label, className }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default function NavBar() {
  return (
    <nav className="navBar">
      <ul className="navBar__links">
        {links.map((e) => (
          <li key={e}>
            <Link to={`/${e}`}>{e.toLocaleUpperCase()}</Link>
          </li>
        ))}
        <li>
          <ButtonMailto
            mailto="mailto:isabelgmegino@gmail.com"
            label="Contact"
          ></ButtonMailto>
        </li>
      </ul>
    </nav>
  );
}
