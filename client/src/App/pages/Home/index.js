import React from "react";
import { useHistory } from "react-router-dom";
import "../../css/home_page.css";
import { useLoader } from "../../helpers/customHooks";

const Home = () => {
 const history = useHistory();
 const {hideLoader, showLoader} = useLoader();
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
     <button className="px-3 py-2" onClick={() => history.push("/signin")}>
      Go To Login
     </button>

     <button className="px-3 py-2" onClick={() => history.push("/signup")}>
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

export default Home;
