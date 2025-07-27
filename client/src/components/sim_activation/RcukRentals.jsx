import  { useEffect, useState } from "react";
import { getRcukRentals } from "../Servides-fetch/RentActions";

function RcukRentals() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    getRcukRentals().then((rentals) => setRentals(rentals));
  }, []);

  return <div>RcukRentals</div>;
}

export default RcukRentals;
