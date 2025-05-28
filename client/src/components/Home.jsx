import React from "react";
// import { PhoneCall, Archive, Globe, Smartphone } from "lucide-react";
import classes from "../css/home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <main className={classes.mainContent}>
        <div className={classes.cardContainer}>
          <div onClick={() => navigate("/rentals")} className={classes.card}>
            <span
              style={{ color: "green" }}
              className={`${classes.cardIcon} material-symbols-outlined`}
            >
              phone_in_talk{" "}
            </span>
            <h3 className={classes.cardTitle}>השכרות פעילות</h3>
            <p className={classes.cardDescription}>
              סקירה של כל ההשכרות הנוכחיות
            </p>
          </div>

          <div onClick={() => navigate("/archive")} className={classes.card}>
            <span
              style={{ color: "orange" }}
              className={`${classes.cardIcon} material-symbols-outlined`}
            >
              inventory_2
            </span>
            <h3 className={classes.cardTitle}>ארכיון השכרות</h3>
            <p className={classes.cardDescription}>היסטוריית השכרות קודמות</p>
          </div>

          <div
            onClick={() => navigate("/access-numbers")}
            className={classes.card}
          >
            <span
              style={{ color: "brown" }}
              className={`${classes.cardIcon} material-symbols-outlined`}
            >
              language
            </span>
            <h3 className={classes.cardTitle}>מספרי גישה</h3>
            <p className={classes.cardDescription}>
              מספרי טלפון בינלאומיים לחיוג לישראל
            </p>
          </div>

          <div className={classes.card}>
            <span
              style={{ color: "grey" }}
              className={`${classes.cardIcon} material-symbols-outlined`}
            >
              dialpad
            </span>
            <h3 className={classes.cardTitle}>מספרים ישראליים</h3>
            <p className={classes.cardDescription}> עבור לקוחות חו"ל</p>
          </div>

          <div
            onClick={() => navigate("/sim-activation")}
            className={classes.card}
          >
            <span
              style={{ color: "blue" }}
              className={`${classes.cardIcon} material-symbols-outlined`}
            >
              sim_card
            </span>
            <h3 className={classes.cardTitle}>הפעלת סים</h3>
            <p className={classes.cardDescription}> הפעלת סימים בינלאומיים</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
