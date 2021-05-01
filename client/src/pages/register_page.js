import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/register_page.css";

import { register_user, post_activity } from "../api_request";

const register = async (form_data) => {
  console.log(form_data);
  register_user(form_data)
  post_activity({
    name: "user account created",
    duration: Date.now(),
    severity: "1",
  });
};
const form_validation = (form_data) => {
  if (
    !form_data.surname ||
    !form_data.other_names ||
    !form_data.gender ||
    !form_data.marital_status ||
    !form_data.email ||
    !form_data.username ||
    !form_data.password ||
    !form_data.password2
  ) {
    alert("please fill all forms");
    return false;
  } else if (form_data.password !== form_data.password2) {
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
  const [form_data, set_form_data] = useState({});
  return (
    <div className="register_page container-fluid">
      <div className="register_form row">
        <div className="px-0 col-md-9 m-auto row">
          <div className="register_page_1 p-5 col-md-6 row">
            <h1>General Information</h1>
            <div className="col-md-6">
              <input
                type="text"
                className="py-2 mb-3"
                placeholder="Surname"
                onChange={(e) =>
                  set_form_data({ ...form_data, surname: e.target.value })
                }
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="py-2 mb-3"
                placeholder="Other nanes"
                onChange={(e) =>
                  set_form_data({ ...form_data, other_names: e.target.value })
                }
              />
            </div>
            <div>
              <select
                name="gender"
                className="py-2 mb-3"
                placeholder="select..."
                onChange={(e) =>
                  set_form_data({ ...form_data, gender: e.target.value })
                }
              >
                <option selected disabled>
                  Gender
                </option>
                <option>male</option>
                <option>female</option>
              </select>
            </div>
            <div>
              <select
                name="marital_status"
                className="py-2 mb-3"
                placeholder="select..."
                onChange={(e) =>
                  set_form_data({
                    ...form_data,
                    marital_status: e.target.value,
                  })
                }
              >
                <option selected disabled>
                  Marital Status
                </option>
                <option>single</option>
                <option>married</option>
              </select>
            </div>
            <div>
              <input
                type="email"
                className="py-2 mb-3"
                placeholder="E-Mail"
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
              <Link
                onClick={() => click_handler(form_data, history)}
                className="form_submit"
              >
                SIGN UP
              </Link>
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
