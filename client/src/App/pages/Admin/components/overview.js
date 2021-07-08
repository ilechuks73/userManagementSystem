import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MessageIcon from "@material-ui/icons/Message";
import SecurityIcon from "@material-ui/icons/Security";
import { adminContext } from "../../../contexts/adminContext";

import { Time } from "../../../helpers/time";

// import { post_activity } from "../../../api_request";

const useStyles = makeStyles({
 root: {
  position: "relative",
  backgroundColor: "red",
  width: 275,
  height: "min-content",
 },
 bullet: { display: "inline-block", margin: "0 2px", transform: "scale(0.8)" },
 title: { fontSize: 14 },
 pos: { marginBottom: 12 },
});

const Overview = () => {
 const classes = useStyles();
 const { activity, set_activity } = useContext(adminContext);

 return (
  <div id="overview" className="">
   <div className="row justify-content-evenly">
    <div className="card mb-4 d-flex justify-content-around">
     <Card className={classes.root}>
      <CardContent>
       <Grid container spacing={4}>
        <Grid item xs={6}>
         <AccountBoxIcon
          style={{
           fontSize: "3rem",
          }}
         />
        </Grid>
        <Grid item xs={6}>
         <Grid item xs={12}>
          <h1>200</h1>
         </Grid>
         <Grid item xs={12}>
          <h6>Users</h6>
         </Grid>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={3}></Grid>
     <Grid item xs={12} sm={6} md={3}></Grid> */}
       </Grid>
      </CardContent>
     </Card>
    </div>
    <div className="card mb-4 d-flex justify-content-around">
    <Card className={classes.root}>
      <CardContent>
       <Grid container>
        <Grid item xs={6}>
         <MessageIcon
          style={{
           fontSize: "3rem",
          }}
         />
        </Grid>
        <Grid item xs={6}>
         <Grid item xs={12}>
          <h1>200</h1>
         </Grid>
         <Grid item xs={12}>
          <h6>Messages</h6>
         </Grid>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={3}></Grid>
     <Grid item xs={12} sm={6} md={3}></Grid> */}
       </Grid>
      </CardContent>
     </Card>
    </div>
    <div className="card mb-4 d-flex justify-content-around">
    <Card className={classes.root}>
      <CardContent>
       <Grid container>
        <Grid item xs={6}>
         <SecurityIcon
          style={{
           fontSize: "3rem",
          }}
         />
        </Grid>
        <Grid item xs={6}>
         <Grid item xs={12}>
          <h1>2</h1>
         </Grid>
         <Grid item xs={12}>
          <h6>Admins</h6>
         </Grid>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={3}></Grid>
     <Grid item xs={12} sm={6} md={3}></Grid> */}
       </Grid>
      </CardContent>
     </Card>
    </div>
   </div>

   <table className="mt-4 col-5 p-0 m-0 row">
    <tbody className="mx-auto col-11">
     <tr className="col-12">
      <td>Recent Notifications</td>
     </tr>
     {activity.map((item) => {
      return (
       <tr key={item._id} className="py-1">
        <td className="px-1">{item.name}</td>
        <td>{new Time().timeline(item.duration)}</td>
       </tr>
      );
     })}
    </tbody>
   </table>
  </div>
 );
};

export default Overview;
