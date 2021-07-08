import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
//CSS
import "./css/App.css";

//PAGES
import HomePage from "./pages/home_page";
import RegisterPage from "./pages/SignUp/register_page";
import AdminProfilePage from "./pages/Admin";
import UserProfilePage from "./pages/User";
import LoginPage from "./pages/login_page";

//COMPONENTS
import Loader from "./components/loader";
import Modal from "./components/modal";
import Notification from "./components/notification";

//CONTEXTS
import { AdminStore } from "./contexts/admin_context";
import { GlobalStore } from "./contexts/global_context";
import { ComponentStore } from "./contexts/component_context";

const App = () => {
 return (
  <BrowserRouter>
   <GlobalStore>
    <ComponentStore>
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
    </ComponentStore>
   </GlobalStore>
  </BrowserRouter>
 );
};

export default App;
