import React, { useState, useEffect } from "react";
import styles from "../../css/contact.module.css";

function Contact() {
  useEffect(() => {
    document.title = "צור קשר";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setError("אנא מלא את כל השדות");
      return;
    }

    // כאן אפשר להוסיף שליחה לשרת או למייל
    setSubmitted(true);
    setError("");
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>צור קשר</h1>
      <p className={styles.subtitle}>נשמח לשמוע ממך על כל שאלה או בקשה</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          שם מלא:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="הכנס את שמך"
          />
        </label>

        <label>
          אימייל:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@example.com"
          />
        </label>

        <label>
          נושא:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="כותרת ההודעה"
          />
        </label>

        <label>
          הודעה:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="כתוב את ההודעה שלך כאן..."
            rows="5"
          ></textarea>
        </label>

        {error && <p className={styles.error}>{error}</p>}
        {submitted && <p className={styles.success}>ההודעה נשלחה בהצלחה!</p>}

        <button className={styles.sendButton} type="submit">
          שלח
        </button>
      </form>
    </div>
  );
}

export default Contact;
