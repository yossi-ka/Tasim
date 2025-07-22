import React, { useState } from "react";
import { useEffect } from "react";
import SingleIlNumber from "./SingleIlNumber";
import classes from "../css/SingleIlNumber.module.css";

function ILnumbers() {
  const [ilNumbers, setIlNumbers] = useState([]);
  useEffect(() => {
    const fetchIlNumbers = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/il-numbers`
        );
        const data = await response.json();
        return { success: true, data: data || [] };
      } catch (error) {
        return { success: false, message: "Error fetching IL numbers" };
      }
    };
    fetchIlNumbers().then((data) => {
      setIlNumbers(data || {});
    });
  }, []);
  return (
    <div style={{ minWidth: "100vh" }}>
      <h1>מספרים ישראליים</h1>
      <div className={classes.topSpace}></div>
      <div className={classes.mainContainer}>
        {ilNumbers.data &&
          ilNumbers.data?.map(
            (ilNumber, index) =>
              index >= 2 && <SingleIlNumber key={index} cust={ilNumber} />
          )}
      </div>
    </div>
  );
}

export default ILnumbers;
