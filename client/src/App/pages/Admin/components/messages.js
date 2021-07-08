// import React from 'react'

// import Card from '@material-ui/core/Card'
// import { Typography } from '@material-ui/core'

// const Messages = () => {

//   return (
//     <div id="messages" className="h-100">
//       <Card>
//       </Card>
//     </div>
//   )
// }

// export default Messages

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
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
export default function Messages() {
 const classes = useStyles();
 return (
  <Card className={classes.root}>
   <CardContent>
    <Grid container spacing={4}>
     <Grid item xs={6}>
      <AccountBoxIcon style={{
        fontSize: "3rem"
      }}/>
     </Grid>
     <Grid item xs={6}>
     <Grid item xs={12}><AccountBoxIcon fontSize="large" /></Grid>
     <Grid item xs={12}><AccountBoxIcon fontSize="large" /></Grid>
     </Grid>
     {/* <Grid item xs={12} sm={6} md={3}></Grid>
     <Grid item xs={12} sm={6} md={3}></Grid> */}
    </Grid>
   </CardContent>
   <CardActions>
  
    <Button size="small">Learn More</Button>
   </CardActions>
  </Card>
 );
}
