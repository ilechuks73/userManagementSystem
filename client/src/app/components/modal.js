import React, { useContext } from "react";
import "../css/modal.css";
import { ComponentContext } from "../contexts/component_context";

import { makeStyles } from "@material-ui/core/styles";
import MiuiModal from "@material-ui/core/Modal";

function rand() {
 return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
 const top = 50 + rand();
 const left = 50 + rand();

 return {
  top: `${top}%`,
  left: `${left}%`,
  transform: `translate(-${top}%, -${left}%)`,
 };
}

const useStyles = makeStyles((theme) => ({
 paper: {
  position: "absolute",
  width: 400,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
 },
}));

const Modal = () => {
 const { modal_state, set_modal_state } = useContext(ComponentContext);

 const classes = useStyles();
 // getModalStyle is not a pure function, we roll the style only on the first render
 const [modalStyle] = React.useState(getModalStyle);
 return (
  <MiuiModal
   open={modal_state.visibility}
   onClose={() => set_modal_state({ visibility: false, content: "" })}
   aria-labelledby="simple-modal-title"
   aria-describedby="simple-modal-description"
  >
   <div style={modalStyle} className={classes.paper}>
    {modal_state.content}
   </div>
  </MiuiModal>
 );
};

export default Modal;
