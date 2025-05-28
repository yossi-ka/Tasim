import React, { useEffect, useRef, useState } from "react";
import classes from "../css/newRentForm.module.css";
import { useNavigate } from "react-router-dom";
import { addRent } from "./Servides-fetch/RentActions";
import Select from "react-select";

function NewRentForm() {
  const [paymentStatus, setPaymentStatus] = useState("");
  const [countries, setCountries] = useState("");

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

  async function fetchCountries() {
    const d = await fetch(
      "https://data.gov.il/api/3/action/datastore_search?resource_id=b1fdc757-07e3-4875-a023-99e59ac44f24"
    );
    const data = await d.json();
    const c = await data.result.records;
    const addIL = [
      ...c,
      {
        _id: 122,
        שם_מדינה_רשמי: "ישראל",
        שם_מדינה_רשמי_אנגלי: "Israel",
        שם_מדינה_במאגר: "ישראל",
        שם_מדינה_אנגלי_במאגר: "Israel",
        יבשת: "אסיה",
        סטטוס_יחסים: "הודעה משותפת",
        שם_עיר_בירה: "ירושלים",
        שם_עיר_בירה_אנגלי: "Jerusalem",
        תאריך_כינון_יחסים: "1993-05-02T00:00:00",
        סוג_ייצוג_מדינה: "",
        נציגות_מאומנת: "",
        נציגות_מאומנת_לעניינים_קונסולריים: "",
        נציגות_מטפלת: "",
        מדינה_קשת_שרות: "ל",
      },
    ];
    setCountries(addIL);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

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
    addRent(newRent);
    navigate(-1);
  };

  return (
    <div className={classes.formContainer}>
      <form onSubmit={handleClick}>
        <label htmlFor="name">שם הלקוח:</label>
        <input required ref={nameRef} type="text" />
        <label htmlFor="country">מדינה:</label>
        <Select
          placeholder={"בחר מדינה מתוך הרשימה"}
          options={
            countries.length > 0 &&
            countries?.map((country) => ({
              value: country.שם_מדינה_במאגר,
              label: country.שם_מדינה_במאגר,
            }))
          }
        />
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
              min={2}
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
