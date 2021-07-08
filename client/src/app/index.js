import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
//CSS
import "./css/App.css";

//PAGES
import HomePage from "./pages/home_page";
import RegisterPage from "./pages/register_page";
import AdminProfilePage from "./pages/admin_profile"
import UserProfilePage from "./pages/user_profile";
import LoginPage from "./pages/login_page";

//COMPONENTS
import Loader from "./components/loader"
import Modal from "./components/modal";
import Notification from "./components/notification"

//CONTEXTS
import { AdminStore } from "./contexts/admin_context";


const App = () => {

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/admin/profile">
          <AdminStore>
            <AdminProfilePage />
          </AdminStore>
        </Route>

        <Route exact path="/user/profile">
          <UserProfilePage />
        </Route>
        
        <Route exact path="/register">
          <RegisterPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>

      <Modal />
      <Loader />
      <Notification />

      

    </div>
  );
};

export default App;
