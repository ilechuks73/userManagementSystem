import React from "react";

export const ComponentContext = React.createContext();

export const ComponentStore = ({ children }) => {
  const [modal_state, set_modal_state] = React.useState({
    visibility: false,
    content: "",
  });

  const [notification_state, set_notification_state] = React.useState({
    visibility : false,
    content: null
  })

  const [loader_state, set_loader_state] = React.useState({
    visibility: false
  })

  return (
    <ComponentContext.Provider value={{ modal_state, set_modal_state, notification_state, set_notification_state, loader_state, set_loader_state }}>
      {children}
    </ComponentContext.Provider>
  );
};
