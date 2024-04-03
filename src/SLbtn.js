import React from "react";
import ReactDOM from "react-dom";
class ServerListBtn extends React.Component {
    onclick () {
      window.location.assign('http://localhost:3000/second/');
    }

    // render() {
    //   return (<button onClick={(e) => this.onclick(e)}>List</button>);
    // }
  }
export default ServerListBtn;

// import React from "react";
// import ReactDOM from "react-dom";

//  class Back_button extends React.Component {
//     onclick () {
//       window.location.assign('http://localhost:3000/');
//     }

//     render() {
//       return (<button  onClick={(e) => this.onclick(e)}>Back </button>);
//     }
//   }
// export default Back_button;