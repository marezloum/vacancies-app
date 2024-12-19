import React from "react";
import "./index.scss";
import siteName from "../../img/sitename.svg";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="img">
          <img src={siteName} alt="name" />
        </div>
        <a href="/"></a>
        <a href="/"></a>
      </div>
    </header>
  );
}
export default Header;
