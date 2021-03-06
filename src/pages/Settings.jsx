import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Settings() {
  const [auth, { handleSignout }] = useContext(AuthContext);

  return (
    <div>
      Settings
      <div>
        <button onClick={handleSignout}>SIGN OUT</button>
      </div>
      <div>
        <Link to="/dashboard/settings/userdetails">User Details</Link>
      </div>
    </div>
  );
}

export default Settings;
