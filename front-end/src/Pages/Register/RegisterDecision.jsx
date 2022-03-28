import React from "react";
import {Link} from "react-router-dom";
import logo from "../../Assets/Images/logo.png"

export default class RegisterDecision extends React.Component{
    render(){
        return(
            <React.Fragment>
               <div classNameName="md:container md:mx-auto" >
                <div className="flex h-screen items-center justify-center bg-blue-400">
                    {/* <div className=" w-full bg-no-repeat bg-cover bg-RegisterDeliverymancenter" style="background-image: url('https://images.pexels.com/photos/11341064/pexels-photo-11341064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"> */}
                        
                        <img src={logo} className="w-20 absolute top-10 left-5"/>
                        <p className="absolute top-20 text-center text-white font-bold text-xl italic">Envios economicos y rápidos</p>
                        <img src={logo} className="w-20 absolute top-10 right-5"/>

                        <div className="grid grid-cols-2 bg-white rounded-[60px] shadow">
                            <div className="">
                                <div className="grid grid-rows-4 text-center">
                                    <div className="">
                                        <h1 className="font-bold text-3xl mt-16">Crear cuenta</h1>
                                    </div>
                                    <div className="">
                                        <h5 className=" font-light text-sm">Introduce tus datos para generar una cuenta.</h5>
                                    </div>
                                    <div className="">
                                        <Link to="/customerRegister">
                                            <button className="bg-[#F8EA19] rounded-xl h-11 w-56 font-semibold text-white">CLIENTE</button>
                                        </Link>
                                    </div>
                                    <div className="">
                                        <Link to="/deliverymanRegister">
                                            <button className="bg-[#1880C3] rounded-xl h-11 w-56 font-semibold text-white">REPARTIDOR</button>
                                        </Link>
                                    </div>
                                    <div className="">
                                        <p className="font-light text-sm text-gray-400">Inicia sesión para <a className="font-bold" href="/">continuar</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="my-16">
                                <img src={logo} alt="" className="w-80"/>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
               </div>
            </React.Fragment>
        );
    }
}