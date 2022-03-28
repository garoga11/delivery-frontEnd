import React from "react";
import logo from "../../Assets/Images/logo.png"

export default class RegisterClient extends React.Component{
    render(){
        return(
            <React.Fragment>
               <div classNameName="md:container md:mx-auto" >
                <div className="flex h-screen items-center justify-center bg-blue-400">
                    {/* <div className=" w-full bg-no-repeat bg-cover bg-RegisterDeliverymancenter" style="background-image: url('https://images.pexels.com/photos/11341064/pexels-photo-11341064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"> */}
                        
                        <img src={logo} className="w-20 absolute top-10 left-5"/>
                        <p className="absolute top-20 text-center text-white font-bold text-xl italic">Envios economicos y rápidos</p>
                        <img src={logo} className="w-20 absolute top-10 right-5"/>

                        <form action="" className="">
                            <div className="grid grid-cols-2 bg-white rounded-[60px] shadow py-28 px-28">
                                <div className="">
                                    <h1 className="font-bold text-5xl">Regístrate aquí</h1>
                                    <h5 className="mb-2 font-light text-sm mt-2">Registra tus datos para dar de alta tu usuario.</h5>
                                    <small className="text-gray-400">*Campos obligatorios</small>
                                    <div className="grid grid-rows-5 mt-5">
                                        <div className="">
                                            <input className="bg-gray-200 placeholder:text-black h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 " type="text" placeholder="Nombre*" required/>
                                        </div>
                                        <div className="">
                                            <input className="bg-gray-200 placeholder:text-black mb-3 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 " type="text" placeholder="Domicilio" />
                                        </div>
                                        <div className="">
                                            <input className="bg-gray-200 placeholder:text-black mb-3 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 " type="text" placeholder="Giro empresarial" />
                                        </div>
                                        <div className="">
                                            <input className="bg-gray-200 placeholder:text-black mb-3 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 " type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}" placeholder="Teléfono (614-000-00-00)*" required/>
                                        </div>
                                        <div className="">
                                            <input className="bg-gray-200 placeholder:text-black mb-3 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600" type="number" placeholder="Promedio de envios mensual" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <button className="bg-[#F8EA19] rounded-xl text-center h-9 w-44 font-semibold mb-12 ml-20" disabled>CLIENTE</button>
                                    <div className="grid grid-rows-4 mt-11">
                                        <div className="">
                                            <input className="bg-gray-200 placeholder:text-black mb-3 h-11 w-72  rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 " type="text" placeholder="Apellidos*" required/>
                                        </div>
                                        <div className="">
                                            <input className="bg-gray-200 placeholder:text-black h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 " type="email" placeholder="Correo*" required/>
                                        </div>
                                        <div className="">
                                            <input className="bg-gray-200 placeholder:text-black h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 " type="text" placeholder="RFC (cedula fiscal)*" required/>
                                        </div>
                                        <div className="">
                                            <input className="bg-gray-200 placeholder:text-black h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 " type="text" placeholder="CURP*" required/>
                                        </div>
                                        <div className="">
                                            <input className="bg-gray-200 placeholder:text-black h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600" type="number" placeholder="Promedio de envios mensual"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="bg-[#F8EA19] rounded-xl text-center h-9 w-44 font-semibold">Enviar</button>
                                </div>
                            </div>
                        </form>
                    {/* </div> */}
                </div>
               </div>
            </React.Fragment>
        );
    }
}