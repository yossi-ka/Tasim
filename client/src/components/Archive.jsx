import React, { useEffect, useState } from "react";
import SingleRent from "./rents-comp/SingleRent";
import { useNavigate } from "react-router-dom";
import classes from "../css/archive.module.css";

function Archive() {
  const navigate = useNavigate();
  const [archive, setArchive] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/rentals/archive")
      .then((res) => res.json())
      .then((data) => setArchive(data.message));
  }, []);
  return (
    <div className={classes.archiveContainer}>
    <button className={classes.addButton} onClick={() => navigate("/archive/new")}>
      הוסף
    </button>
    <div className={classes.archiveList}>
      {archive.map((rent) => (
        <div key={rent.id} className={classes.archiveItem}>
          <SingleRent rent={rent} />
        </div>
      ))}
    </div>
    {archive.length === 0 && <span className={classes.noData}>לא קיימים נתונים בארכיון</span>}
  </div>
  
  );
}

export default Archive;
