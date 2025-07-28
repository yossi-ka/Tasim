import { useNavigate } from "react-router-dom";
import classes from "../css/home.module.css";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <img
          onClick={() => navigate("/mng")}
          src="/images/logo.png"
          alt="logo-tasim"
        />
        <nav>
          <ul className={classes.menu}>
            <li onClick={() => navigate("/mng")}>עמוד הבית</li>
            <li onClick={() => navigate("/mng/rentals/new")}>הוספת השכרה</li>
            <li onClick={() => navigate("/mng/access-numbers")}>מספרי גישה</li>
            <button
              className={classes.logout}
              onClick={() => navigate("/home")}
            >
              התנתק
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
