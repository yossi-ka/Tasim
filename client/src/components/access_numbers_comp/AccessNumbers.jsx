import { useEffect, useState } from "react";
import { getAccessNumbers } from "../Servides-fetch/AccessNumbers.js";
import SingleAccessNumber from "./SingleAccessNumber.jsx";

function AccessNumbers() {
  const [accessNumbers, setAccessNumbers] = useState([]);
  useEffect(() => {
    getAccessNumbers()
      .then((data) => {
        if (data.success) {
          setAccessNumbers(data.message);
        } else {
          console.error(
            "Failed to fetch access numbers (Server side): ",
            data.message
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching access numbers:", error);
      });
  }, []);
  return (
    <div>
      <h1>מספרי גישה בינלאומיים</h1>
      {accessNumbers.length &&
        accessNumbers?.map((number, index) => (
          <SingleAccessNumber key={index} accessNumber={number} />
        ))}
    </div>
  );
}

export default AccessNumbers;
