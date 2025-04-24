import React, { useRef, useState } from "react";
import classes from "../css/newRentForm.module.css";
import { formatDate } from "../services/formatDate";
import { useNavigate } from "react-router-dom";
import { addRent } from "./Servides-fetch/RentActions";

function NewRentForm() {
  const [paymentStatus, setPaymentStatus] = useState("");

  const nameRef = useRef();
  const countryRef = useRef();
  const deviceRef = useRef();
  const fromDateRef = useRef();
  const toDateRef = useRef();
  const priceRef = useRef();
  const returnRef = useRef();
  const agentRef = useRef();
  const partialAmountRef = useRef();
  const notesRef = useRef();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formatDate(fromDateRef.current.value));
    const newRent = {
      customer_name: nameRef.current.value,
      device_id: deviceRef.current.value,
      country: countryRef.current.value,
      from_date: fromDateRef.current.value,
      to_date: toDateRef.current.value,
      price: priceRef.current.value,
      status_payment:
        paymentStatus === "שילם"
          ? 1
          : paymentStatus === "לא שילם"
          ? 0
          : partialAmountRef.current.value,
      agent_id: agentRef.current.value,
      returned: returnRef.current.checked ? 1 : 0,
      notes: notesRef.current.value,
    };
    addRent(newRent);
    navigate(-1);
  };

  return (
    <div className={classes.formContainer}>
      <form onSubmit={handleClick}>
        <label htmlFor="name">שם הלקוח:</label>
        <input required ref={nameRef} type="text" />
        <label htmlFor="country">מדינה:</label>
        <input required ref={countryRef} type="text" />
        <label htmlFor="device">מס' מכשיר:</label>
        <input required ref={deviceRef} type="number" />
        <label htmlFor="name">מתאריך:</label>
        <input required ref={fromDateRef} type="date" />
        <label htmlFor="name">עד תאריך:</label>
        <input required ref={toDateRef} type="date" />
        <label htmlFor="name">מחיר:</label>
        <input required ref={priceRef} type="number" />
        <label>סטטוס תשלום:</label>
        <div className={classes.paymentStatus}>
          <input
            type="radio"
            id="paid"
            name="paymentStatus"
            value="שילם"
            onChange={(e) => setPaymentStatus(e.target.value)}
          />
          <label htmlFor="paid" style={{ marginLeft: "10px" }}>
            שילם
          </label>

          <input
            type="radio"
            id="unpaid"
            name="paymentStatus"
            value="לא שילם"
            onChange={(e) => setPaymentStatus(e.target.value)}
          />
          <label htmlFor="unpaid" style={{ marginLeft: "10px" }}>
            לא שילם
          </label>

          <input
            type="radio"
            id="partial"
            name="paymentStatus"
            value="חלקי"
            onChange={(e) => setPaymentStatus(e.target.value)}
          />
          <label htmlFor="partial">חלקי</label>

          {/* אם נבחר "חלקי", מוצג שדה להזנת סכום */}
          {paymentStatus === "חלקי" && (
            <input
              className={classes.partialAmount}
              ref={partialAmountRef}
              type="number"
              placeholder="סכום ששולם"
              required
            />
          )}
        </div>

        <label htmlFor="name">החזיר:</label>
        <input ref={returnRef} type="checkbox" />
        <label htmlFor="name">קוד סוכן (אופציונלי):</label>
        <input ref={agentRef} type="number" />
        <label htmlFor="name">הערות</label>
        <textarea ref={notesRef} type="text" />
        <button>הוסף</button>
      </form>
    </div>
  );
}

export default NewRentForm;
