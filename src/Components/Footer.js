import React from "react";
import "./Footer.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube"; // on les appelle svg sur scss

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-socials">
          <a href="/" className="footer-social">
            <FacebookIcon />
          </a>
          <a href="/" className="footer-social">
            <InstagramIcon />
          </a>
          <a href="/" className="footer-social">
            <TwitterIcon />
          </a>
          <a href="/" className="footer-social">
            <YouTubeIcon />
          </a>
        </div>
        <ul className="footer-links">
          <li className="footer-link">
            <a href="/">Lien footer</a>
          </li>
          <li className="footer-link">
            <a href="/">Lien footer</a>
          </li>
          <li className="footer-link">
            <a href="/">Lien footer</a>
          </li>
          <li className="footer-link">
            <a href="/">Lien footer</a>
          </li>
          <li className="footer-link">
            <a href="/">Lien footer</a>
          </li>
          <li className="footer-link">
            <a href="/">Lien footer</a>
          </li>
          <li className="footer-link">
            <a href="/">Lien footer</a>
          </li>
          <li className="footer-link">
            <a href="/">Lien footer</a>
          </li>
        </ul>
        <div className="footer-copy">Netflix clone - tout droits réservés</div>
      </div>
    </footer>
  );
}

export default Footer;
