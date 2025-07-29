import { useNavigate } from "react-router-dom";
import classes from "../css/manageHome.module.css";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <img
          onClick={() => navigate("/home")}
          src="/images/logo.png"
          alt="logo-tasim"
        />
        <nav>
          <ul className={classes.menu}>
            <li onClick={() => navigate("/home")}>עמוד הבית</li>
            <li onClick={() => navigate("/order-form")}>הזמנת טלפון</li>
            <li onClick={() => navigate("/mng/access-numbers")}>מספרי גישה</li>
            <li onClick={() => navigate("/contact")}>צור קשר</li>
            <button
              className={classes.login}
              onClick={() => navigate("/login")}
            >
              התחבר
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
