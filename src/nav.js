import React from "react";
import globe from "./img/globe-americas.svg";

function Nav() {
  return (
    <nav>
      <img src={globe} className="globe" alt="globe" />
      <p>my travel journal.</p>
    </nav>
  );
}

export default Nav;
