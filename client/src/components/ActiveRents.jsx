import React, { useEffect, useState } from "react";
import SingleRent from "./rents-comp/SingleRent";

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
    </div>
  );
}

export default ActiveRents;
