import "./index.scss"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <Link to={"/"}>Home</Link>
      <Link to={"/components"}>Components Demo page</Link>
    </div>
  );
}

export default Footer;
