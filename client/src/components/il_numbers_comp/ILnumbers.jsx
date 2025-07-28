import React, { useState } from "react";
import { useEffect } from "react";
import SingleIlNumber from "./SingleIlNumber";
import classes from "../../css/SingleIlNumber.module.css";
import { CircularProgress } from "@mui/material";
import { fetchIlNumbers } from "../Servides-fetch/IL_Numbers.js";

function ILnumbers() {
  const [ilNumbers, setIlNumbers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "מספרים ישראליים";
    setLoading(true);
    fetchIlNumbers().then((data) => {
      setIlNumbers(data || {});
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>מספרים ישראליים</h1>

      {loading && (
        <div className={classes.loadingContainer}>
          <CircularProgress />
        </div>
      )}

      <div className={classes.mainContainer}>
        {ilNumbers.data &&
          ilNumbers.data.map(
            (ilNumber, index) =>
              index >= 2 && <SingleIlNumber key={index} cust={ilNumber} />
          )}
      </div>
    </div>
  );
}

export default ILnumbers;
