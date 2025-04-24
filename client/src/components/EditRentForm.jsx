import React, { useEffect, useRef, useState } from "react";
import classes from "../css/newRentForm.module.css";
import { useNavigate, useLocation } from "react-router-dom";

function EditRentForm() {
  const [paymentStatus, setPaymentStatus] = useState("");

  const location = useLocation();
  const rent = location.state?.rent;

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

  useEffect(() => {
    if (rent.status_payment > 1) setPaymentStatus("חלקי");
    else if (rent.status_payment === 1) setPaymentStatus("שילם");
    else setPaymentStatus("לא שילם");
  }, [rent]);

  const handleClick = (e) => {
    e.preventDefault();
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

    fetch(`http://localhost:3001/rentals/update/${rent.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRent),
    });
    navigate(-1);
  };

  return (
    <div className={classes.formContainer}>
      <form onSubmit={handleClick}>
        <label htmlFor="name">שם הלקוח:</label>
        <input
          required
          ref={nameRef}
          type="text"
          defaultValue={rent?.customer_name || ""}
        />
        <label htmlFor="country">מדינה:</label>
        <input
          required
          ref={countryRef}
          type="text"
          defaultValue={rent?.country || ""}
        />
        <label htmlFor="device">מס' מכשיר:</label>
        <input
          required
          ref={deviceRef}
          type="number"
          defaultValue={rent?.device_id || ""}
        />
        <label htmlFor="name">מתאריך:</label>
        <input
          required
          ref={fromDateRef}
          type="date"
          defaultValue={rent?.from_date || ""}
        />
        <label htmlFor="name">עד תאריך:</label>
        <input
          required
          ref={toDateRef}
          type="date"
          defaultValue={rent?.to_date || ""}
        />
        <label htmlFor="name">מחיר:</label>
        <input
          required
          ref={priceRef}
          type="number"
          defaultValue={rent?.price || ""}
        />
        <label>סטטוס תשלום:</label>
        <div className={classes.paymentStatus}>
          <input
            type="radio"
            id="paid"
            name="paymentStatus"
            value="שילם"
            onChange={(e) => setPaymentStatus(e.target.value)}
            defaultChecked={rent?.status_payment === 1}
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
            defaultChecked={rent?.status_payment === 0}
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
            defaultChecked={rent?.status_payment > 1}
          />
          <label htmlFor="partial">חלקי</label>

          {/* אם נבחר "חלקי", מוצג שדה להזנת סכום */}
          {paymentStatus==="חלקי" && (
            <input
              className={classes.partialAmount}
              ref={partialAmountRef}
              type="number"
              placeholder="סכום ששולם"
              defaultValue={Number(rent.status_payment)}
              required
            />
          )}
        </div>

        <label htmlFor="name">החזיר:</label>
        <input
          ref={returnRef}
          type="checkbox"
          defaultChecked={rent?.returned || false}
        />
        <label htmlFor="name">קוד סוכן (אופציונלי):</label>
        <input
          ref={agentRef}
          type="number"
          defaultValue={rent?.agent_id || null}
        />
        <label htmlFor="name">הערות</label>
        <textarea ref={notesRef} type="text" defaultValue={rent?.notes || ""} />
        <button>הוסף</button>
      </form>
    </div>
  );
}

export default EditRentForm;
