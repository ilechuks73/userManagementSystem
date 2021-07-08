import React, { useEffect, useContext } from "react";
import { adminContext } from "../../../contexts/admin_context";
import { ComponentContext } from "../../../contexts/component_context";
import { delete_user_profile_data, post_activity } from "../../../api_request";

import MUITable from "@material-ui/core/Table";
import { TableBody, TableRow, TableCell, TableHead } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
 pageContent: {
  margin: theme.spacing(2),
 },

 TableHead: {
  TableCell: {
   color: "white",
  },
 },
}));

const Users = () => {
 const classes = useStyles();
 const { set_loader_state, set_modal_state } = React.useContext(
  ComponentContext
 );
 const { user_data } = useContext(adminContext);

 // useEffect(() => {
 // }, []);

 return (
  <div id="users" className="h-100">
   <h1>Users</h1>
   <MUITable>
    <TableHead className={classes.TableHead}>
     <TableRow>
      <TableCell>ID</TableCell>
      <TableCell>Surname</TableCell>
      <TableCell>Other Names</TableCell>
      <TableCell>E-Mail</TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {user_data.map((item) => {
      return (
       <TableRow className={classes.root} key={item._id}>
        <TableCell>{item._id}</TableCell>
        <TableCell>{item.surname}</TableCell>
        <TableCell>{item.other_names}</TableCell>
        <TableCell>{item.email}</TableCell>

        <TableCell>
         <Button
          className="red"
          onClick={(e) => {
            console.log(e.target)
           set_modal_state({
            visibility: true,
            content: (
             <div>
              <p>"Are you sure you want to this account ?"</p>
              <button
               className="btn fwr424re6"
               onClick={() => {
                set_modal_state({
                 visibility: false,
                 content: "",
                });
                delete_user_profile_data(item._id).then((data) =>
                 console.log(data)
                );
                post_activity({
                 name: "user account deleted",
                 duration: Date.now(),
                 severity: "5",
                });
               }}
              >
               YES
              </button>
             </div>
            ),
           });
          }}
         >
          delete
         </Button>
        </TableCell>
        <TableCell>
         <Button>...</Button>
        </TableCell>
       </TableRow>
      );
     })}
    </TableBody>
   </MUITable>
   {/* <table>
        <tbody>
          <tr>
            <td className="px-2">ID</td>
            <td className="px-2">Surname</td>
            <td className="px-2">Other names</td>
            <td className="px-2">Email</td>
          </tr>
          {user_data.map((item) => {
            return (
              <tr key={item._id}>
                <td className="px-2">{item._id}</td>
                <td className="px-2">{item.surname}</td>
                <td className="px-2">{item.other_names}</td>
                <td className="px-2">{item.email}</td>
                <td className="px-2 red" onClick={()=> alert('hello')}>delete</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
  </div>
 );
};

export default Users;
