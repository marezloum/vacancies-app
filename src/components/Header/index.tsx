import React from "react";
import "./index.scss";
import siteName from "../../img/sitename.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="img">
          <img src={siteName} alt="name" />
        </div>
        <div className="links">
          <Link to="/">Поиск вакансий</Link>
          <Link to="/liked">Избранные вакансии</Link>
          <Link to="/add">Add вакансии</Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
