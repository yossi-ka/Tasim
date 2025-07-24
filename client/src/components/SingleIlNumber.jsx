import React from "react";
import styles from "../css/SingleIlNumber.module.css";

function SingleIlNumber({ cust }) {
  const [name, amount, nextPaymentDate, phone] = cust;

  // פונקציה להמרה מ-DD/MM/YYYY ל-YYYY-MM-DD
  const parseDate = (str) => {
    const [day, month, year] = str.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  const isOverdue = parseDate(nextPaymentDate) < new Date();

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <span>{name}</span>
        {isOverdue && <span className={styles.overdueWorning}>!</span>}
      </div>
      <div className={styles.phone}>טלפון: {phone}</div>
      <div className={styles.amount}>סכום לתשלום: {amount}</div>
      <div
        className={`${isOverdue ? styles.nextDateOverdue : styles.nextDate}`}
      >
        שולם עד: {nextPaymentDate}
      </div>
    </div>
  );
}

export default SingleIlNumber;
