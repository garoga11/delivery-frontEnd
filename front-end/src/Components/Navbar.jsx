import React from "react";
import logo from "../Assets/Images/biglogo_white.png";

export default class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex justify-around bg-[#0880C4] items-center h-20">
          <img className="w-14" src={logo} alt="logo" />
          <div className="flex items-center space-x-9">
            <img className="w-14" src={logo} alt="logo" />
            <h3 className="bg-[#F8EA19] font-bold rounded-lg w-40 h-8 text-center">
              Cliente
            </h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
