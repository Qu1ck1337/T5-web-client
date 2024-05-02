import discord_logo from "../assets/images/discord_logo.png";
import serv_online_png from "../assets/images/serv_online.png";
import "../styles/ServerList.css";
import React, { Component } from "react";
export default class ServerList extends Component {
  render() {
    return (
      <div className="serv_list">
        <div className="servlist">
          <div id="serv_list_title">
            <h1>Ваши сервера Discord</h1>
          </div>
          <div className="serv_list_btns">
            <a id="serv1" href="/server_manager">
              <img className="serv_img" src={discord_logo} alt=""></img>
              <div className="serv_info">
                <p>T5-DEV</p>
                <div className="serv_online">
                  <img id="serv_online_png" src={serv_online_png} alt=""></img>
                  <p>в сети:</p>
                </div>
              </div>
            </a>

            <a id="serv2" href="/server_manager">
              <img className="serv_img" src={discord_logo} alt=""></img>
              <div className="serv_info">
                <p>T5-COMMUNITY</p>
                <div className="serv_online">
                  <img id="serv_online_png" src={serv_online_png} alt=""></img>
                  <p>в сети:</p>
                </div>
              </div>
            </a>

            <a id="serv3" href="/server_manager">
              <img className="serv_img" src={discord_logo} alt=""></img>
              <div className="serv_info">
                <p>T5-FUN</p>
                <div className="serv_online">
                  <img id="serv_online_png" src={serv_online_png} alt=""></img>
                  <p>в сети:</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}