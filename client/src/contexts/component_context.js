import React from "react";

export const ComponentContext = React.createContext();

export const ComponentStore = ({ children }) => {
  const [modal_state, set_modal_state] = React.useState({
    visibilty: "hidden",
    content: null,
  });

  const [notification_state, set_notification_state] = React.useState({
    visibilty : false,
    content: null
  })

  return (
    <ComponentContext.Provider value={{ modal_state, set_modal_state }}>
      {children}
    </ComponentContext.Provider>
  );
};

export const useModal = (visibilty, content) => {
  const { set_modal_state } = React.useContext(ComponentContext);
  return () => {
    set_modal_state({
      visibilty: visibilty,
      content: content,
    });
  };
};

export const useNotification = (visibilty, content) =>{
  const {set_notification_state} = React.useContext(ComponentContext)

  return ()=>{
    set_notification_state({
      visibilty: "visible",
      content: content
    })
  }
}
