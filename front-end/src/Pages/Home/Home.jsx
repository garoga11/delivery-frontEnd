import React from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";


export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Sidebar/>
      </React.Fragment>
    );
  }
}
