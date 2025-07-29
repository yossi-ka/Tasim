import React, { useEffect } from "react";
import classes from "../../css/about.module.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "אודות";
  }, []);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>'טסים' זה אנחנו...</h1>
      <p className={classes.text}>
        טסים לחו"ל? לא משנה מה המטרה, חתונה, קברי צדיקים או סתם נופש מרענן.
        <br />
        חברתינו מתמחה במתן מגוון פתרונות תקשורת בחו"ל, כדי שתמשיכו להיות מחוברים
        גם כשאתם מנותקים..
        <br />
        הזמנתם אצלנו סים או טלפון? תהיו רגועים שאתם בידיים טובות, קליטה איכותית
        בכל מקום בעולם, טלפונים חדישים בעברית מלאה ושירות מכל הלב 😊 .
        <br />
        אה, איך שכחנו.. וכמובן, מספרי טלפון בינלאומיים לתמיכה, עבור כל שאלה או
        בעיה שתיווצר (שלא תיווצר).
        <br />
        <p className={classes.slogan}>
          טסים – השותפים שלך למסע, זה לא רק סלוגן...
        </p>
      </p>
      <button onClick={() => navigate("/pricing")} className={classes.button}>
        שאלת השאלות - המחירים שלנו
      </button>
    </div>
  );
}

export default About;
