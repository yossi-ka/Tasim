import classes from "../css/activeRents.module.css";
import React, { useEffect, useState } from "react";
import SingleRent from "./SingleRent";

function ActiveRents() {
  const [activeRents, setActiveRents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/rentals")
      .then((res) => res.json())
      .then((data) => setActiveRents(data.message));
  }, []);

  return (
    <div>
      {activeRents.map((rent) => {
        return (
          <div key={rent.id}>
            <SingleRent rent={rent} />
          </div>
        );
      })}
      {activeRents.length === 0 && <span className={classes.noData}>לא קיימים נתונים</span>}
    </div>
  );
}

export default ActiveRents;
