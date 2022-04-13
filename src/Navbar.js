import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [mostrar, handleMostrar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 50) {
        handleMostrar(true);
      } else handleMostrar(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${mostrar && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netlix Logo"
      />
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netlix Logo"
      />
    </div>
  );
}

export default Navbar;
