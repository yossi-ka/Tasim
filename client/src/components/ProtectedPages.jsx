import classes from "../css/manageHome.module.css";
import React from "react";
import ManageHeader from "./ManageHeader";
import { Outlet } from "react-router-dom";

function ProtectedPages() {
  return (
    <div className={classes.homeContainer}>
      <ManageHeader />
      <Outlet />
      <footer>
        &copy; {new Date().getFullYear()} טסים - כל הזכויות שמורות
      </footer>
    </div>
  );
}

export default ProtectedPages;
