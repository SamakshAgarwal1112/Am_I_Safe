// import "./Dashboard.css";
import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../providers";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
// import { logOut } from "../../../firebase";
export default function Dashboard() {
  const user = useContext(UserContext);
  const [Redirect, setRedirect] = useState(null);
  const navigate = useNavigate();


  const logOut = () => {
    auth.signOut().then(()=> {
      console.log('logged out')
    }).catch((error) => {
      console.log(error.message)
    })
  }
  useEffect(() => {
    if (!user) {
      // setRedirect("/");
      navigate('/')
    }
  }, [user]);
  // if (redirect) {
  //   <redirect to={Redirect} />;
  // }
  return (
    <div className="dashboard">
      <h1 className="dashboard-text">Welcome Home</h1>
      <button className="logout-button" onClick={logOut}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
          alt="google icon"
        />
        <span> logout</span>
      </button>
    </div>
  );
}