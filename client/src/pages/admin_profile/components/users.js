import React, { useEffect, useContext } from "react";
import { adminContext } from "../../../contexts/admin_context";

const Users = () => {
  const { user_data } = useContext(adminContext);

  

  // useEffect(() => {
  // }, []);

  return (
    <div id="users" className="h-100vh">
      <h1>Users</h1>
      <table>
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
      </table>
    </div>
  );
};

export default Users;
