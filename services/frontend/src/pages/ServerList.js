import "../styles/ServerList.css";
import React, { Component } from "react";
import ServerElement from "../components/ServerElement";
import axios from "axios";
export default class ServerList extends Component {
  
  render() {
    return (
      <div className="serv_list">
        <div className="servlist">
          <div id="serv_list_title">
            <h1>Ваши сервера Discord</h1>
          </div>
          <div className="serv_list_btns">
          {this.servers_list.map(el => <ServerElement server_name={el["name"]} discord_logo={el["avatar"]} serv_online_png={el["png"]}/>)}
          </div>
        </div>
      </div>
    );
  }
}