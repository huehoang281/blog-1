import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css";
import React from "react";


export default function Settings() {
  return (
    <div className="settings" > 
    <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingsUpdateTile">Update Your Account</span>
        <span className="settingsDeleteTile">Delete Account</span>

      </div>
      <form className="settingsForm">
        <label > Profile Picture </label>
        <div className="settingsPP">
          <img 
          src="https://images.pexels.com/photos/2105416/pexels-photo-2105416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" />
          <label htmlFor="fileInput">
          <i className=" settingsPPIcon fa-solid fa-circle-user"></i>
          </label>
          <input type="file" id="finleInput" style={{display:"none"}} />
        </div>
        <label > Username</label>
        <input type="text"  placeholder="Safak" />
        <label > Email</label>
        <input type="email"  placeholder="safakgmail.com" />
        <label > Password</label>
        <input type="password"   />
        <button className="settingsSubmit">Update</button>
      </form>


     

    </div>
    <Sidebar/>

    </div>
  )
}
