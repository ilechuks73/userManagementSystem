import React from "react";
import { ComponentContext } from "../contexts/component_context";

export const useLoader = (visibility) => {
 const { set_loader_state } = React.useContext(ComponentContext);

 return () => {
   set_loader_state({
     visibility: visibility
   })
 };
};

export const useModal = (visibility, content)=>{
  const {set_modal_state} = React.useContext(ComponentContext)

  return ()=>{
    set_modal_state({
      visibility : visibility,
      content: content
    })
  }
}

export const useNotifier = (visibility, content)=>{
  const {set_notifier_state} = React.useContext(ComponentContext)

  return ()=>{
    set_notifier_state({
      visibility : visibility,
      content: content
    })
  }
}
