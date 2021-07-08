import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { globalContext } from "../../contexts/global_context";

import Overview from "./components/overview";
import Users from "./components/users";
import Messages from "./components/messages";
import AdminAccessControl from "./components/admin_access_control";
import Documentation from "./components/documentation";

import "../../css/admin_profile_page.css";

import male_avatar from "../../images/male_avatar.png";
import female_avatar from "../../images/female_avatar.png";

const AdminProfilePage = () => {
  const history = useHistory();

  const {profile_data, set_auth } = useContext(globalContext);

  useEffect(() => {
    const auth_data = JSON.parse(sessionStorage.getItem("profile"));
    if(!auth_data){
      history.push("/login")
    }else{
      history.push(`/${auth_data.role}/profile`)
    }
  }, []);

  return (
    <div className="adminprofile_page container-fluid p-0 m-0 row">
      <div className="profile_side_bar row m-0 p-0 col-md-2">
        <ul className="profile_sidebar_menu col-2 p-0 m-0 p-fixed h-100vh">
          <li className="col-12 ">
            <div className=" avatar_img_wrapper col-8 m-auto row">
              <img
                className="avatar_img col-12"
                src={(
                  (profile_data.gender === "male" && male_avatar) ||
                  (profile_data.gender === "female" && female_avatar)
                ).toString()}
                alt="avatar"
              />
            </div>
          </li>
          <li>{profile_data.username}</li>
          <li>{profile_data.role}</li>
          <a href="#overview" className="psm-item py-2 d-block">
            Overview
          </a>
          <a href="#users" className="psm-item py-2 d-block">
            Users
          </a>
          <a href="#messages" className="psm-item py-2 d-block">
            Messages
          </a>
          <a href="#admin_access_control" className="psm-item py-2 d-block">
            Admin Access Control
          </a>
          <a href="#documentation" className="psm-item py-2 d-block">
            Documentation
          </a>
          <a
            href="#logout"
            className="psm-item py-2 d-block"
            onClick={() => {
              history.push("/login");
              sessionStorage.clear();
              set_auth({
                type: "onlogout",
                data: {
                  auth_state: false,
                  auth_token: null,
                  role: null,
                },
              });
            }}
          >
            Logout
          </a>
        </ul>
      </div>
      <div className="profile_dashboard d-block m-0 row col-md-10">
        <Overview />
        <Users />
        <Messages />
        <AdminAccessControl />
        <Documentation />
      </div>
    </div>
  );
};

export default AdminProfilePage;
