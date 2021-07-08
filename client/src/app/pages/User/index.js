import React from "react";
import { useHistory } from "react-router-dom";

import { delete_user_profile_data, post_activity } from "../../helpers/api_request";

import { globalContext } from "../../contexts/global_context";
import { ComponentContext } from "../../contexts/component_context";

import "../../css/user_profile_page.css";

import female_avatar from "../../images/female_avatar.png";
import male_avatar from "../../images/male_avatar.png";

const UserProfilePage = () => {
 const { profile_data } = React.useContext(globalContext);
 const { set_loader_state, set_modal_state } = React.useContext(
  ComponentContext
 );
 const history = useHistory();

 React.useEffect(() => {
  const auth_data = JSON.parse(sessionStorage.getItem("profile"));
  if (!auth_data) {
   history.push("/login");
  } else {
   history.push(`/${auth_data.role}/profile`);
  }

  setTimeout(() => set_loader_state({ visibility: false }), 1000);
 }, []);

 return (
  <div className="userprofile_page container-fluid p-0 m-0 row">
   <div className="col-md-8 mx-auto pt-5">
    <div className="col-md-12 m-auto row">
     <div className="col-sm-4 col-md-3">
      <div className="avatar_img_wrapper col-sm-7 col-md-8 m-auto mb-4">
       <img
        alt="avatar"
        src={(
         (profile_data.gender === "male" && male_avatar) ||
         (profile_data.gender === "female" && female_avatar)
        ).toString()}
        className="col-12 avatar_img"
       />
      </div>
     </div>
     <div className="col-sm-8 col-md-9">
      <h2 className="name_heading">{`${profile_data.surname} ${profile_data.other_names}`}</h2>
      <h6>User</h6>
      <span>
       Joined since{" "}
       {profile_data.date_joined &&
        profile_data.date_joined.split(" ").slice(0, 4).join(" ")}
      </span>
      <div>
       <span className="about_heading px-3 mt-4 d-block">About</span>
      </div>
      <table>
       <tbody>
        <tr>
         <td>User ID</td>
         <td>{profile_data._id}</td>
        </tr>
        <tr>
         <td>Gender</td>
         <td>{profile_data.gender}</td>
        </tr>
        <tr>
         <td>Marital Status</td>
         <td>{profile_data.marital_status}</td>
        </tr>
        <tr>
         <td>Email</td>
         <td>{profile_data.email}</td>
        </tr>
       </tbody>
      </table>
      <div>
       <button
        className="logout_btn btn"
        onClick={() =>
         set_modal_state({
          visibility: true,
          content: (
           <div>
            <p>"Are you sure you want to LOGOUT ?"</p>
            <button
             className="btn fwr424re6"
             onClick={() => {
              set_modal_state({
               visibility: false,
               content: "",
              });
              sessionStorage.clear();
              history.push("/login");
             }}
            >
             YES
            </button>
           </div>
          ),
         })
        }
       >
        LOGOUT
       </button>

       <button
        className="deleteaccount_btn btn m-3"
        onClick={() =>
         set_modal_state({
          visibility: true,
          content: (
           <div>
            <p>"Are you sure you want to delete your account ?"</p>
            <button
             className="btn fwr424re6"
             onClick={() => {
              set_modal_state({
               visibility: false,
               content: "",
              });
              delete_user_profile_data(profile_data._id).then((data) =>
               console.log(data)
              );
              post_activity({
               name: "user account deletd",
               duration: Date.now(),
               severity: "5",
              });
              sessionStorage.clear();
              history.push("/login");
             }}
            >
             YES
            </button>
           </div>
          ),
         })
        }
       >
        Delete My Account
       </button>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default UserProfilePage;
