import { useNavigate } from "react-router-dom";
import classes from "../css/home.module.css";
import React from "react";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <img
          onClick={() => navigate("/")}
          src="/images/logo.png"
          alt="logo-tasim"
        />
        <nav>
          <ul className={classes.menu}>
            <li onClick={() => navigate("/")}>עמוד הבית</li>
            <li onClick={() => navigate("/rentals/new")}>הוספת השכרה</li>
            <li>מספרי גישה</li>
            <button className={classes.logout}>התנתק</button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
