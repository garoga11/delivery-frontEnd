import React from "react";
import {Link} from "react-router-dom";
import logo from "../../Assets/Images/biglogo_white.png"

export default class RegisterDecision extends React.Component{
    render(){
        return(
            <React.Fragment>
               <div className="md:mx-auto" >
                <div className="flex flex-col h-screen bg-blue-400">
                    <div className="pt-5 flex justify-around items-center">
                        <img src={logo} className="w-20"/>
                        <p className="text-center text-white font-bold text-xl italic">Envios económicos y rápidos</p>
                        <img src={logo} className="w-20"/>
                    </div>
                    <div className="flex flex-col h-full items-center justify-center">
                        {/* <div className=" w-full bg-no-repeat bg-cover bg-RegisterDeliverymancenter" style="background-image: url('https://images.pexels.com/photos/11341064/pexels-photo-11341064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"> */}

                            <div className="grid sm:grid-cols-2 bg-white rounded-[60px] sm:px-0 px-10 shadow items-center justify-center h-96">
                                <div className="sm:pl-16 ">
                                    <div className="grid grid-rows-3 text-center">
                                        <div className="mb-5">
                                            <h1 className="font-bold text-4xl mt-16">Crear cuenta</h1>
                                            <h5 className=" font-light text-xs">Introduce tus datos para generar una cuenta.</h5>
                                        </div>
                                        <div className="">
                                            <div className="grid grid-rows-2">
                                                <div className="mb-5 mt-4">
                                                    <Link to="/customerRegister">
                                                        <button className="bg-[#F8EA19] rounded-3xl h-11 w-56 font-semibold text-white">CLIENTE</button>
                                                    </Link>
                                                </div>
                                                <div className="">
                                                <Link to="/deliverymanRegister">
                                                    <button className="bg-[#1880C3] rounded-3xl h-11 w-56 font-semibold text-white">REPARTIDOR</button>
                                                </Link>
                                                <p className="font-light text-sm text-gray-400 mt-4">Inicia sesión para <a className="font-bold" href="/">continuar</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:block hidden">
                                    <img src={logo} alt="" className="w-60 mb-24"/>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                    </div>
               </div>
            </React.Fragment>
        );
    }
}