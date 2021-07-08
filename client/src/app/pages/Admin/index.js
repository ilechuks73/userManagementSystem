import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { globalContext } from "../../contexts/global_context";
import { ComponentContext } from "../../contexts/component_context";

import Overview from "./components/overview";
import Users from "./components/users";
import Messages from "./components/messages";
import AdminAccessControl from "./components/admin_access_control";
import Documentation from "./components/documentation";

import "../../css/admin_profile_page.css";

import male_avatar from "../../images/male_avatar.png";
import female_avatar from "../../images/female_avatar.png";

import TopNav from "./components/top_nav";
import MiniDrawer from "./components/sidebar";

const AdminProfilePage = () => {
 const history = useHistory();
 const [page, set_page] = useState("overview");
 const [open, setOpen] = React.useState(false);

 const { profile_data, set_auth } = useContext(globalContext);
 const { set_loader_state } = useContext(ComponentContext);

 useEffect(() => {
  const auth_data = JSON.parse(sessionStorage.getItem("profile"));
  if (!auth_data) {
   history.push("/login");
  } else {
   history.push(`/${auth_data.role}/profile`);
  }
  set_loader_state({ visibility: false });
 }, []);

 return (
  <div className="adminprofile_page container-fluid p-0 m-0 row g-0">
   <TopNav page={page} open={open} setOpen={setOpen} />

   <MiniDrawer set_page={set_page} page={page} open={open} setOpen={setOpen} />

   <div className="profile_dashboard row">
    {(() => {
     switch (page) {
      case "overview":
       return <Overview />;

      case "users":
       return <Users />;

      case "messages":
       return <Messages />;

      case "access_control":
       return <AdminAccessControl />;

      case "documentation":
       return <Documentation />;

      default:
       break;
     }
    })()}
   </div>
  </div>
 );
};

export default AdminProfilePage;
