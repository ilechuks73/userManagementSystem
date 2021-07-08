import React from "react";
import { ComponentContext } from "../contexts/componentContext";

export const useLoader = (visibility) => {
 const { set_loader_state } = React.useContext(ComponentContext);
 function hideLoader() {
  set_loader_state({
   visibility: false,
  });
 }
 function showLoader() {
  set_loader_state({
   visibility: true,
  });
 }
 return {
  hideLoader,
  showLoader,
 };
};

export const useModal = (visibility, content) => {
 const { set_modal_state } = React.useContext(ComponentContext);

 return () => {
  set_modal_state({
   visibility: visibility,
   content: content,
  });
 };
};

export const useNotifier = (visibility, content) => {
 const { set_notifier_state } = React.useContext(ComponentContext);

 return () => {
  set_notifier_state({
   visibility: visibility,
   content: content,
  });
 };
};
