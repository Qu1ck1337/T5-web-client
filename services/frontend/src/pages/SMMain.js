import React, { Component } from "react";
import "../styles/SMMain.css";
export default class SMMain extends Component {
  render() {
    return (
      <div className="SMmain">
        <div id="main_title">
          <h5>Общие</h5>
        </div>
        <div id="options">
          <div id="opts_main"><p id="p">Основное</p>
          <form action="" method="post">
            Префикс: <input type="text" name="name"></input>

          </form>
          </div>
          <div id="opts_msg"><p id="p">Сообщения</p></div>
        </div>
      </div>
    );
  }
}
