import React from "react";
import { PhoneCall, Archive, Globe, Smartphone } from "lucide-react";
import classes from "../css/home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <main className={classes.mainContent}>
        <div className={classes.cardContainer}>
          <div onClick={() => navigate("/rentals")} className={classes.card}>
            <PhoneCall className={classes.cardIcon} color="green" />
            <h3 className={classes.cardTitle}>השכרות פעילות</h3>
            <p className={classes.cardDescription}>
              סקירה של כל ההשכרות הנוכחיות
            </p>
          </div>

          <div onClick={() => navigate("/archive")} className={classes.card}>
            <Archive className={classes.cardIcon} color="blue" />
            <h3 className={classes.cardTitle}>ארכיון השכרות</h3>
            <p className={classes.cardDescription}>היסטוריית השכרות קודמות</p>
          </div>

          <div
            onClick={() => navigate("/access-numbers")}
            className={classes.card}
          >
            <Globe className={classes.cardIcon} color="brown" />
            <h3 className={classes.cardTitle}>מספרי גישה</h3>
            <p className={classes.cardDescription}>
              מספרי טלפון בינלאומיים לחיוג לישראל
            </p>
          </div>

          <div className={classes.card}>
            <Smartphone className={classes.cardIcon} color="orange" />
            <h3 className={classes.cardTitle}>מספרים ישראליים</h3>
            <p className={classes.cardDescription}> עבור לקוחות חו"ל</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
