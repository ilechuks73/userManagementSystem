import React,{useContext} from "react";
import { useHistory } from "react-router-dom";

import {ComponentContext} from '../../../contexts/component_context'

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleIcon from "@material-ui/icons/People";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import DescriptionIcon from "@material-ui/icons/Description";
import AssessmentIcon from "@material-ui/icons/Assessment";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  }
}));

const Sidebar = ({ open, setOpen, set_page, page }) => {
  const history = useHistory()
  const classes = useStyles();
  const theme = useTheme();
  const {set_modal_state} = useContext(ComponentContext)

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={`${classes.root} col-6 p-0`}>
      <CssBaseline />
      <Drawer
      style={{
        backgroundColor: "blue"
      }}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List >
              
          <ListItem button key="overview" onClick={() => set_page('overview')}>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItem>

          <ListItem button key="users" onClick={() => set_page('users')}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>

          <ListItem button key="messages" onClick={() => set_page('messages')}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>

          <ListItem button key="text" onClick={() => set_page('access_control')}>
            <ListItemIcon>
              <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText primary="Access Control" />
          </ListItem>

          <ListItem button key="documentation" onClick={() => set_page('documentation')}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Documentation" />
          </ListItem>

          <ListItem button key="logout" onClick={() =>
         set_modal_state({
          visibility: true,
          content: (
           <div>
            <p>"Are you sure you want to LOGOUT ?"</p>
            <button
             className="btn fwr424re6"
             onClick={() => {
              set_modal_state({
               visibility: false,
               content: "",
              });
              sessionStorage.clear();
              history.push("/login");
             }}
            >
             YES
            </button>
           </div>
          ),
         })
        }>
            <ListItemIcon>
              <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>

        </List>

        <Divider />

      </Drawer>
    </div>
  );
};

export default Sidebar;
