import React, { useEffect, useState } from "react";
import classes from "../css/login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "התחברות";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // פה אתה יכול לקרוא ל־API או לפיירבייס
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className={classes.loginPage}>
      <form onSubmit={handleSubmit} className={classes.loginForm}>
        <img src="/images/logo.png" alt="logo-tasim" className={classes.logo} />
        <h2 className={classes.title}>התחברות</h2>

        <input
          type="email"
          placeholder="אימייל"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.input}
          required
        />

        <input
          type="password"
          placeholder="סיסמה"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={classes.input}
          required
        />

        <button type="submit" className={classes.button}>
          התחבר
        </button>
      </form>
    </div>
  );
}

export default Login;
