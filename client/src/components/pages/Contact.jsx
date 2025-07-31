import React, { useState, useEffect } from "react";
import styles from "../../css/contact.module.css";
import SnackbarMUI from "../../services/SnackbarMUI";

function Contact() {
  const [error, setError] = useState("");
  const [subjectLength, setSubjectLength] = useState(0);
  const [messageLength, setMessageLength] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState({
    active: false,
    message: "",
    severity: "",
  });

  useEffect(() => {
    document.title = "צור קשר";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // פונקציה לניקוי הטופס לאחר השליחה
  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setSubjectLength(0);
    setMessageLength(0);
    setError("");
  };

  //  עבור ספירת תוים
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "subject") {
      setSubjectLength(value.length);
    }

    if (name === "message") {
      setMessageLength(value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setError("אנא מלא את כל השדות");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/contact/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, subject, message }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        setOpenSnackbar({
          active: true,
          message:
            data.message || "שגיאת שרת בשליחת הטופס, נסה שוב מאוחר יותר.",
          severity: "error",
        });
        return;
      }

      setError("");
      setOpenSnackbar({
        active: true,
        message: data.message || "הטופס נשלח בהצלחה!",
        severity: "success",
      });
      clearForm();
    } catch (err) {
      console.error("Client Submit Error:", err);
      setError("שגיאה כללית בשליחת הטופס");
      setOpenSnackbar({
        active: true,
        message: "שגיאת כללית בשליחת הטופס, נסה שוב מאוחר יותר.",
        severity: "error",
      });
    }
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
          <span className={styles.counter}>{subjectLength}/20</span>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="כותרת ההודעה"
            maxLength={20}
          />
        </label>

        <label>
          הודעה:
          <span className={styles.counter}>{messageLength}/150</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="כתוב את ההודעה שלך כאן..."
            rows="5"
            maxLength={150}
          />
        </label>

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.sendButton} type="submit">
          שלח
        </button>
      </form>
      <SnackbarMUI
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
      />
    </div>
  );
}

export default Contact;
