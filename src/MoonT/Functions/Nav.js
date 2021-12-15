import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="menuhere">
      <div class="all ">
        <nav class="banner">
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="./Menu">Menu </Link>
            </li>
            <li>
              <Link to="./About">About Us </Link>
            </li>
          </ul>
        </nav>
        <div id="phone2">
          <a href="tel:+17189753606" title="phone number">
            (718) 975-3606
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
