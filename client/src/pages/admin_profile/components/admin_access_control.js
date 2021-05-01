import React, {useContext} from 'react'
import { adminContext } from '../../../contexts/admin_context'

import loader from '../../../images/loader/loader3.gif'

const AdminAccessControl = () => {

  const {admin_data} = useContext(adminContext)
  return (
    <div id="admin_access_control" className="h-100vh">
      <h1>Admin Access Control</h1>
      <table>
        <tbody>
          <tr>
          <td className="px-2">ID</td>
            <td className="px-2">Surname</td>
            <td className="px-2">Other names</td>
            <td className="px-2">Email</td>
          </tr>
          {
            admin_data.map(item => {
              return(
                <tr key={item._id}>
                  <td>{item._id}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <img src = {loader}/>
    </div>
  )
}

export default AdminAccessControl
