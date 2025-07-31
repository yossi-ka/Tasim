import React, { useState } from "react";
import styles from "../../css/orderForm.module.css";

const QuantityInput = ({ label, value, onChange }) => {
  return (
    <div className={styles.quantityRow}>
      <label>{label}:</label>
      <div className={styles.quantityControl}>
        <button type="button" onClick={() => onChange(Math.min(20, value + 1))}>
          +
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            const newVal = Number(e.target.value);
            if (newVal >= 0 && newVal <= 20) onChange(newVal);
          }}
          min={0}
          max={20}
          inputMode="numeric"
        />{" "}
        <button type="button" onClick={() => onChange(Math.max(0, value - 1))}>
          -
        </button>
      </div>
    </div>
  );
};

export default function OrderForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    city: "",
    phone: "",
    email: "",
    destination: "",
    fromDate: "",
    toDate: "",
    phoneAndSim: 0,
    simOnly: 0,
    kosherWaze: 0,
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>פרטים אישיים</h3>
          <input
            type="text"
            placeholder="שם פרטי"
            value={form.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
          <input
            type="text"
            placeholder="שם משפחה"
            value={form.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
          <input
            type="text"
            placeholder="עיר מגורים"
            value={form.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
          <input
            type="tel"
            placeholder="טלפון נייד"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          <input
            type="email"
            placeholder="אימייל"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div className={styles.divider}></div>

        <div className={styles.column}>
          <h3>פרטי הנסיעה</h3>
          <input
            placeholder="יעד (אם יש כמה, רשום אותם)"
            value={form.destination}
            onChange={(e) => handleChange("destination", e.target.value)}
          />
          <div className={styles.dateRow}>
            <label className={styles.inlineLabel}>
              <span>מתאריך:</span>
              <input
                type="date"
                value={form.fromDate}
                onChange={(e) => handleChange("fromDate", e.target.value)}
              />
            </label>
          </div>

          <div className={styles.dateRow}>
            <label className={styles.inlineLabel}>
              <span>עד תאריך:</span>
              <input
                type="date"
                value={form.toDate}
                onChange={(e) => handleChange("toDate", e.target.value)}
              />
            </label>
          </div>

          <QuantityInput
            label="מכשיר טלפון + סים"
            value={form.phoneAndSim}
            onChange={(val) => handleChange("phoneAndSim", val)}
          />
          <QuantityInput
            label="סים ללא מכשיר"
            value={form.simOnly}
            onChange={(val) => handleChange("simOnly", val)}
          />
          <QuantityInput
            label="וויז כשר (אירופה בלבד)"
            value={form.kosherWaze}
            onChange={(val) => handleChange("kosherWaze", val)}
          />
        </div>
      </div>

      <div className={styles.buttonRow}>
        <button>חישוב מחיר</button>
        <button type="submit">אישור הזמנה</button>
      </div>
    </form>
  );
}
