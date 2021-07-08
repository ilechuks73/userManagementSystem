import { createContext, useEffect, useReducer } from "react";
//DEVELOPMENTAL IMPORTS--------------
import { get_activities, get_users, get_admins } from "../helpers/apiRequests";
//----------------
export const adminContext = createContext();

export const AdminStore = (props) => {
  useEffect(() => {
    //GET ALL ACTIVITIES FROM API

    get_activities().then((data) => {
      set_activity({
        type: "onload",
        data: data.reverse(),
      });
    });

    //--------------------GET ALL USERS DETAILS FROM API-------------------------------

    get_users().then((data) => {
      set_user_data({
        type: "onload",
        data: data,
      });
    });

    //--------------------GET ALL USERS DETAILS FROM API-------------------------------
    get_admins().then((data) => {
      set_admin_data({
        type: "onload",
        data: data,
      });
    });
  }, []);

  const activity_reducer = (activity, action) => {
    switch (action.type) {
      case "onload":
        return [...activity, ...action.data];
      default:
        return activity;
    }
  };

  const user_data_reducer = (user_data, action) => {
    switch (action.type) {
      case "onload":
        return [...user_data, ...action.data];
      default:
        return user_data;
    }
  };

  const admin_data_reducer = (admin_data, action) => {
    switch (action.type) {
      case "onload":
        return [...admin_data, ...action.data];
      default:
        return admin_data;
    }
  };

  const [activity, set_activity] = useReducer(activity_reducer, []);
  const [user_data, set_user_data] = useReducer(user_data_reducer, []);
  const [admin_data, set_admin_data] = useReducer(admin_data_reducer, []);

  return (
    <adminContext.Provider
      value={{
        activity,
        set_activity,
        user_data,
        set_user_data,
        admin_data,
        set_admin_data,
      }}
    >
      {props.children}
    </adminContext.Provider>
  );
};
