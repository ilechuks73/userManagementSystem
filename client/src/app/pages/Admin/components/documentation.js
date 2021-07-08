import React from "react";
import { useLoader } from "../../../helpers/custom_hooks";

const Documentation = () => {
 const [state, set_state] = React.useState(false);
 const setLoader = useLoader(state);
 React.useEffect(() => {
   setLoader()
 }, [state]);
 return (
  <div id="documentation" className="h-100">
    <button onClick={()=> set_state(true)}>sett</button>
   
  </div>
 );
};

export default Documentation;
