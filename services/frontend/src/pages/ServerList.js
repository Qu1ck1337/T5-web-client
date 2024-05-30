import "../styles/ServerList.css";
import React, { Component } from "react";
import ServerElement from "../components/ServerElement";
import axios from "axios";
export default class ServerListComponent extends Component {
  
  function ServerListComponent(){
    const [serverList, setServerList] = useState([]);

    window.onload = () => {

        
    axios.post('http://localhost:8000/get_user_owned_guilds', {
        access_token: localStorage.getItem(`access_token`),
        token_type: localStorage.getItem(`token_type`),
        user_id: localStorage.getItem(`user_id`)
    })
        .then(response => {
            response = response.data;
            setServerList(response)
            console.log(serverList)
        })
        .catch(function (error) {
            console.log(error);
        });
        
    };
    return(
      <div className="serv_list_btns">
            {this.servers_list.map(el => <ServerElement server_name={el["name"]} serv_img={el["icon"]}/>)}
      </div>
    )
  }

  





  
  render(){
    return (
      <div className="serv_list">
        <div className="servlist">
          <div id="serv_list_title">
            <h1>Ваши сервера Discord</h1>
          </div>
          <div className="serv_list_btns">
          {this.servers_list.map(el => <ServerElement server_name={el["name"]} serv_img={el["icon"]}/>)}
          </div>
        </div>
      </div>
    );
  }
}