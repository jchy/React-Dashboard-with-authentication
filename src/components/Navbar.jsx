import { Link } from "react-router-dom";
import styles from "../routes/route.module.css";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        gap: 4,
        justifyContent: "center",
        marginBottom: "30px"
      }}
    >
      <div>
        <Link to="/" className={styles.link}>
          Home
        </Link>
      </div>
      <div>
        <Link to="/login" className={styles.link}>
          Login
        </Link>
      </div>
      <div>
        <Link to="/dashboard" className={styles.link}>
          Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
