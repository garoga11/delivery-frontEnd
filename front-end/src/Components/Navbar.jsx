import React from 'react';
import logo from "../Assets/Images/logo.png"

export default class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="flex justify-around bg-[#3B82F6] items-center h-20">
                    <img className="w-14" src={logo} alt="logo"/>
                    <img className="w-14" src={logo} alt="logo"/>
                    <h3 className="bg-[#F8EA19] font-bold rounded-lg w-40 h-8 text-center">Repartidor</h3>
                </div>
            </React.Fragment>
        );
    }
}
