import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function UserDetails() {
  const [auth, { handleSignout }] = useContext(AuthContext);

  return (
    <div>
      <h2>Uder Details</h2>
      <h3>Jaswant Chaudhary</h3>
      <p>REC Sonbhadra</p>
      <div>
        <button onClick={handleSignout}>SIGN OUT</button>
      </div>
    </div>
  );
}

export default UserDetails;
