import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData.js";

import "../style/navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div id="menuhere2">
      <div class="all">
        <div class="navbar">
          <div id="fabar">
            <Link to="#" class="menu-bars">
              <FaBars onClick={showSidebar} />
            </Link>
          </div>
          <div id="phone">
            <a href="tel:+17189753606" title="phone number">
              (718) 975-3606
            </a>
          </div>
        </div>

        <nav class={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul class="nav-menu-items" onClick={showSidebar}>
            <li class="navbar-toggle">
              <Link to="#" class="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} class={item.cName}>
                  <Link to={item.path}>
                    <span> {item.title} </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
