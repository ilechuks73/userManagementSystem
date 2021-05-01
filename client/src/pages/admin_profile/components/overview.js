import React, {useEffect, useContext} from 'react'


import {adminContext } from "../../../contexts/admin_context"

import { Time } from '../../../custom_modules/time'

//DEVELOPMENTAL IMPORTS--------------
import {post_activity} from '../../../api_request'
//----------------


const Overview  = () => {

  const { activity, set_activity } = useContext(adminContext);

  // useEffect(() => {

  // }, [])
  
  return (
    <div id="overview" className="h-100vh">
          <h1 className="title_heading  col-12 p-0 ">Dashboard</h1>

        <div className="row justify-content-around">
          <div className="card card1 mx-2 red d-flex justify-content-around">
            <span className="">ICON</span>
            <span>
              <h1>26</h1>
              <p>Users</p>
            </span>
          </div>
          <div className="card mx-2 blue d-flex justify-content-around">
            <span className="">ICON</span>
            <span>
              <h1>5</h1>
              <p>Admins</p>
            </span>
          </div>
          <div className="card mx-2 red d-flex justify-content-around">
            <span className="">ICON</span>
            <span>
              <h1>3</h1>
              <p>New Messages</p>
            </span>
          </div>
        </div>

        <table className="mt-4 col-5 p-0 m-0 row">
          
          <tbody className="mx-auto col-11">
          <tr className="col-12"><td>Recent Notifications</td></tr>
            {activity.map((item) => {
              return (
                <tr key = {item._id} className="py-1">
                  <td className="px-1">{item.name}</td>
                  <td>{new Time().timeline(item.duration)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
  )
}

export default Overview
