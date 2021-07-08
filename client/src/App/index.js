import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//CSS
import "./css/App.css";
import "./css/bootstrap-grid.min.css";
import "./css/bootstrap-reboot.min.css";

//PAGES
import {
 Home as HomePage,
 SignIn as SignInPage,
 SignUp as SignUpPage,
 User as UserPage,
 Admin as AdminPage,
} from "./pages";

//COMPONENTS
import Loader from "./components/loader";
import Modal from "./components/modal";
import Notification from "./components/notification";

//CONTEXTS
import { AdminStore } from "./contexts/adminContext";
import { GlobalStore } from "./contexts/globalContext";
import { ComponentStore } from "./contexts/componentContext";

export function App() {
 return (
  <BrowserRouter>
   <GlobalStore>
    <ComponentStore>
     <Switch>
      <Route exact path="/">
       <HomePage />
      </Route>

      <Route exact path="/admin">
       <AdminStore>
        <AdminPage />
       </AdminStore>
      </Route>

      <Route exact path="/user">
       <UserPage />
      </Route>

      <Route exact path="/signup">
       <SignUpPage />
      </Route>

      <Route exact path="/signin">
       <SignInPage />
      </Route>
     </Switch>

     <Modal />
     <Loader />
     <Notification />
    </ComponentStore>
   </GlobalStore>
  </BrowserRouter>
 );
}
