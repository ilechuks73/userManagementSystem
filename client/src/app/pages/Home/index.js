import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "../css/home_page.css";
import { ComponentContext } from "../contexts/component_context";
import { useLoader } from "../helpers/custom_hooks";
import io from "socketio-client"

const HomePage = () => {
 const history = useHistory();
 const hideLoader = useLoader(false);
 const showLoader = useLoader(true);
 React.useEffect(() => {
  hideLoader();

  return () => {
   showLoader();
  };
 }, []);

 return (
  <div className="home_page container-fluid p-0 m-0 row">
   <div className="col-md-8 m-auto d-flex flex-column align-items-center">
    <h1 className="pb-5">User Management System</h1>

    <div className="pb-5 col-md-7 d-flex justify-content-around">
     <button className="px-3 py-2" onClick={() => history.push("/login")}>
      Go To Login
     </button>

     <button className="px-3 py-2" onClick={() => history.push("/register")}>
      Register User
     </button>

     <button
      className="px-3 py-2"
      onClick={() => history.push("/admin/profile")}
     >
      ADMIN
     </button>
    </div>
   </div>
  </div>
 );
};

export default HomePage;
