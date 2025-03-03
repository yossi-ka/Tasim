import classes from "../css/home.module.css";
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function ProtectedPages() {
  return (
    <div className={classes.homeContainer}>
      <Header />
      <Outlet />
      <footer>
        &copy; {new Date().getFullYear()} טסים - כל הזכויות שמורות
      </footer>
    </div>
  );
}

export default ProtectedPages;
