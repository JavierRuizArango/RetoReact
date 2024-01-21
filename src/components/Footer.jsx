import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer--container">
      <div className="footer--items">
        <a target="_blank" href="https://www.instagram.com/spillwayallay"  rel="noreferrer">
          <FaInstagram className="footer--icon" />
        </a>
        <a target="_blank" href="https://github.com/JavierRuizArango" rel="noreferrer"  >
          <FaGithub className="footer--icon" />
        </a>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100078461207514&mibextid=ZbWKwL" rel="noreferrer" >
          <FaFacebook className="footer--icon" />
        </a>
      </div>
    </div>
  );
}
