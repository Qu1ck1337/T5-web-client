import React, { Component } from "react";
import "../styles/Login.css";
import user_icon from "../assets/images/user_icon.png";
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login_desc">
          <div id="login_avatar">
            <img id="user_icon" src={user_icon}></img>
          </div>
          <div id="login_button">
            <a>авторизоваться через Discord</a>
          </div>
        </div>
      </div>
    );
  }
}
