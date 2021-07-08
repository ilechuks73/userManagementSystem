import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/register_page.css";

import { register_user, post_activity } from "../../helpers/api_request";
import { ComponentContext } from "../../contexts/component_context";

//------MATERIAL UI 
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const register = async (form_data) => {
  console.log(form_data);
  register_user(form_data);
  post_activity({
    name: "user account created",
    duration: Date.now(),
    severity: "1",
  });
};

const form_validation = (form_data) => {
  for (const data in form_data) {
    if (form_data[data] === "") {
      alert("please fill all forms");
      return false;
    }
  }

  if (form_data.password !== form_data.password2) {
    alert("password doesnt match");
    return false;
  } else {
    return true;
  }
};

const click_handler = (form_data, history) => {
  form_validation(form_data) && register(form_data);
};

const RegisterPage = () => {
  const history = useHistory();
  const { set_loader_state } = useContext(ComponentContext);
  const [form_data, set_form_data] = useState({
    surname: "",
    other_names: "",
    gender: "",
    marital_status: "",
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    setTimeout(() => set_loader_state({ visibility: "hidden" }), 1000);

    return () => {
      set_loader_state({ visibility: "visible" });
    };
  }, []);
  return (
    <div className="register_page container-fluid">
      <div className="register_form row">
        <div className="px-0 col-md-9 m-auto row">
          <div className="register_page_1 p-5 col-md-6 row">
            <h1>General Information</h1>
            <div className="col-md-6">
              <TextField
                className="py-2 mb-3"
                label="Surname"
                onChange={(e) =>
                  set_form_data({ ...form_data, surname: e.target.value })
                }
              />
            </div>
            <div className="col-md-6">
              <TextField
                className="py-2 mb-3"
                label="Other names"
                onChange={(e) =>
                  set_form_data({ ...form_data, other_names: e.target.value })
                }
              />
            </div>
            <div>
              <Select
                className="py-2 mb-3"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={form_data.gender}
                displayEmpty
                onChange={(e) =>
                  set_form_data({ ...form_data, gender: e.target.value })
                }
              >
                <MenuItem value="" disabled>
                  Gender
                </MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </div>
            <div>
              <Select
                className="py-2 mb-3"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={form_data.marital_status}
                displayEmpty
                onChange={(e) =>
                  set_form_data({
                    ...form_data,
                    marital_status: e.target.value,
                  })
                }
              >
                <MenuItem value="" disabled>
                  Marital Status
                </MenuItem>
                <MenuItem value="married">Married</MenuItem>
                <MenuItem value="Single">Single</MenuItem>
              </Select>
            </div>
            <div>

              <TextField
                className="py-2 mb-3"
                id="standard-basic"
                label="E-Mail"
                onChange={(e) =>
                  set_form_data({ ...form_data, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="register_page_2 p-5 col-md-6 blue">
            <h1>User Info</h1>
            <div>
              <input
                type="text"
                className="py-2 mb-3"
                placeholder="Username"
                onChange={(e) =>
                  set_form_data({ ...form_data, username: e.target.value })
                }
              />
            </div>

            <div>
              <input
                type="password"
                className="py-2 mb-3"
                placeholder="Enter new password"
                onChange={(e) =>
                  set_form_data({ ...form_data, password: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="password"
                className="py-2 mb-3"
                placeholder="Confirm password"
                onChange={(e) =>
                  set_form_data({ ...form_data, password2: e.target.value })
                }
              />
            </div>

            <div className="my-4">
              <button
                onClick={() => click_handler(form_data, history)}
                className="form_submit"
              >
                SIGN UP
              </button>
            </div>
            <div>
              Already have an Account?{" "}
              <Link to="/login" className="form_submit">
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
