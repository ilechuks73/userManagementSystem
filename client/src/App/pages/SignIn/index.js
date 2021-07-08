import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../css/login_page.css";
import { globalContext } from "../../contexts/globalContext";

import { login_validation } from "../../helpers/apiRequests";
import { useLoader } from "../../helpers/customHooks";
const SignIn = () => {
 const history = useHistory();

 const { hideLoader, showLoader } = useLoader();
 useEffect(() => {
  hideLoader();

  return () => {
   showLoader();
  };
 }, []);

 const { set_auth } = useContext(globalContext);

 const [pass_visibility, set_pass_visibility] = useState(false);
 const [login_data, set_login_data] = useState({});

 return (
  <div className="login_page container-fluid p-0 m-0 row">
   <div className="login_form col-sm-10 col-md-8 col-lg-7 col-xl-4 m-auto row p-0">
    <div className=" col-md-8 py-4 d-flex flex-column">
     <h1 className="login_header">LOGIN</h1>

     <div className="col-12">
      <p className="mb-0">Enter Email</p>

      <input
       type="text"
       placeholder="Email"
       className="login-form-input col-12 email_input mb-3"
       onChange={(e) => set_login_data({ ...login_data, id: e.target.value })}
      />
     </div>

     <div className="col-12">
      <p className="mb-0">Enter Password</p>

      <input
       type={pass_visibility ? "text" : "password"}
       placeholder="Password"
       className="login_form_input col-8 pass_input mb-3"
       onChange={(e) =>
        set_login_data({ ...login_data, password: e.target.value })
       }
      />

      <button
       onClick={() => {
        set_pass_visibility(!pass_visibility);
       }}
       className="pass_visibility_toggle col-4 px-3"
      >
       {pass_visibility ? "HIDE" : "SHOW"}
      </button>
     </div>

     <button
      className="btn signin_btn"
      onClick={() => {
       if (!login_data.id || !login_data.password) {
        alert("please fill all fields");
       } else {
        // LOG IN
        login_validation(login_data)
         .then((data) => {
          set_auth({
           type: "onlogin",
           data: { ...data, auth_state: true },
          });
          sessionStorage.setItem(
           "profile",
           JSON.stringify({ ...data, auth_state: true })
          );
          history.push(`/${data.role}/profile`);
         })
         .catch((err) => alert(err));
       }
      }}
     >
      SIGN IN
     </button>
    </div>
    <div className="side_bar col-md-4 py-4">
     <p>You don't have an account? Click the button below to register</p>
     <button
      className="signup_btn btn"
      onClick={() => {
       history.push("/signup");
      }}
     >
      SIGN UP
     </button>
    </div>
   </div>
  </div>
 );
};

export default SignIn;
