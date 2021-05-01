import { createContext, useReducer, useEffect } from "react";

import { get_profile_data } from "../api_request";

export const globalContext = createContext();

export const Store = (props) => {
  useEffect(() => {
    const auth_data = JSON.parse(sessionStorage.getItem("profile"));
    if (auth_data) {
      set_auth({
        type: "onload",
        data: { ...auth_data},
      });
    }
  }, []);

  const auth_reducer = (auth, action) => {
    switch (action.type) {
      case "onload":
        return { ...action.data };
      case "onlogin":
        return { ...action.data };
      case "onlogout":
        return { ...action.data };
      default:
        return auth;
    }
  };

  const profile_data_reducer = (profile_data, action) => {
    switch (action.type) {
      case "onload":
        return { ...profile_data, ...action.data };
      default:
        return profile_data;
    }
  };

  const [auth, set_auth] = useReducer(auth_reducer, {
    auth_state: false,
    auth_token: null,
    role: null,
  });
  const [profile_data, set_profile_data] = useReducer(profile_data_reducer, {
    date_joined: "NA",
    email: "NA",
    gender: "NA",
    marital_status: "NA",
    other_names: "NA",
    password: "NA",
    role: "NA",
    surname: "NA",
    username: "NA",
  });

  useEffect(() => {
    if (auth.auth_state) {
      get_profile_data(auth)
        .then((data) => {
          set_profile_data({
            type: "onload",
            data: { ...data },
          });
        })
        .catch((err) => console.log(err));
    }
  }, [auth]);

  return (
    <globalContext.Provider
      value={{ auth, set_auth, profile_data, set_profile_data }}
    >
      {props.children}
    </globalContext.Provider>
  );
};
