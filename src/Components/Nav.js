import React, { useState } from "react";
import "./Nav.scss";
import MenuIcon from "@material-ui/icons/Menu"; // to import Materiel UI / what we will use from MUI
import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Nav() {
  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false); //to active transistion when the
  }; //-------------------------------------------------------------- window is superior to 100vh
  useState(() => {
    document.addEventListener("scroll", transitionNav); // to get a black nav when we scroll down
  });
  console.log(navBlack);

  const handleClick = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true); //to put a toggler in Menu when
  }; //------------------------------------------------the width screen is inferior to 768px (Phonescreen)
  console.log(toggleMenu);

  return (
    <div
      className={`nav ${
        navBlack || toggleMenu ? "nav-black" : "nav-transparent"
      } ${toggleMenu && "show"}`}
    >
      <button onClick={handleClick} className="nav-burger">
        <MenuIcon />
      </button>
      <img
        className="nav-logo"
        src="./Images/Netflix-logo.png"
        width={150}
        alt=""
      />
      <nav className="nav-links">
        <a href="/" className="nav-link">
          Acceuil
        </a>
        <a href="/" className="nav-link">
          Séries
        </a>
        <a href="/" className="nav-link">
          Films
        </a>
      </nav>
      <div className="nav-actions">
        <a href="/" className="nav-action">
          <SearchIcon />
        </a>
        <a href="/" className="nav-action">
          Direct
        </a>
        <a href="/" className="nav-action">
          <CardGiftcardIcon />
        </a>
        <a href="/" className="nav-action">
          <NotificationsIcon />
        </a>
        <a href="/" className="nav-action">
          <img src="./Images/Netflix-avatar.jpg" width={50} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
