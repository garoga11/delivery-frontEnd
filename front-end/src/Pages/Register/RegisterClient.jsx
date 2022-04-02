import React from "react";
import logo from "../../Assets/Images/biglogo_white.png";

export default class RegisterClient extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div classNameName="container mx-auto">
          <div className="md:h-screen h-full bg-blue-400">
            <div className="pt-5 flex justify-around items-center mb-10">
              <img src={logo} className="w-20" />
              <p className="text-center text-white font-bold text-xl italic">
                Envios economicos y rápidos
              </p>
              <img src={logo} className="w-20" />
            </div>

            {/* <div className=" w-full bg-no-repeat bg-cover bg-RegisterDeliverymancenter" style="background-image: url('https://images.pexels.com/photos/11341064/pexels-photo-11341064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"> */}
            <form
              action=""
              className="flex flex-col justify-center items-center"
            >
              <div className=" bg-white md:w-[52rem] w-[22rem]  rounded-[60px] shadow flex flex-col md:px-24 py-11">
                <div className="grid md:grid-cols-2 grid-cols-1 place-content-center place-items-center">
                  <div className="">
                    <h1 className="font-bold text-4xl">Regístrate aquí</h1>
                    <h5 className="mb-2 font-light text-sm mt-2">
                      Registra tus datos para dar de alta tu usuario.
                    </h5>
                    <small className="text-gray-400">
                      *Campos obligatorios
                    </small>
                  </div>
                  <div className="">
                    <button
                      className="bg-[#F8EA19] rounded-3xl h-9 w-44 font-semibold mb-10 mt-5 md:ml-24"
                      disabled
                    >
                      CLIENTE
                    </button>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 text-center md:space-y-0 space-y-3 ">
                  <div className="space-y-3 ">
                    <input
                      className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                      type="text"
                      placeholder="Nombre*"
                      required
                    />

                    <input
                      className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                      type="text"
                      placeholder="Domicilio"
                    />

                    <input
                      className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                      type="text"
                      placeholder="Giro empresarial"
                    />

                    <input
                      className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                      type="tel"
                      pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                      placeholder="Teléfono (614-000-00-00)*"
                      required
                    />

                    <input
                      className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600"
                      type="number"
                      placeholder="Promedio de envios mensual"
                    />
                  </div>
                  <div className="space-y-3">
                    <input
                      className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72  rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                      type="text"
                      placeholder="Apellidos*"
                      required
                    />

                    <input
                      className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                      type="email"
                      placeholder="Correo*"
                      required
                    />
                    <input
                      className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                      type="text"
                      placeholder="RFC (cedula fiscal)*"
                      required
                    />
                    <input
                      className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                      type="text"
                      placeholder="CURP*"
                      required
                    />
                    <input
                      className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600"
                      type="number"
                      placeholder="Promedio de envios mensual"
                    />
                  </div>
                </div>
                <div className="text-center pt-5">
                  <button className="bg-[#F8EA19] rounded-3xl text-center h-9 w-44  font-semibold">
                    Enviar
                  </button>
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
