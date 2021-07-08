import React from "react";
import loader from "../images/loader/loader3.gif";
import "../css/loader.css";
import { ComponentContext, useLoader } from "../contexts/component_context";

const Loader = () => {
  const { loader_state, set_loader_state } = React.useContext(ComponentContext);
  return (
    <div>
      {
        !loader_state.visibility
        ? 
        ""
        :
        <div className="loader">
          <img src={loader} alt="loader" />
        </div>
      }
    </div>
  );
};

export default Loader;
