import React, { Component } from "react";
import SMmeta from "./SMmeta.js";
import SMMain from "./SMMain.js";
export default class ServerManager extends Component {
  render() {
    return (
      <>
        <SMmeta />
        <SMMain />
      </>
    );
  }
}
