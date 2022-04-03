import React from "react";

const ShippingAddressComponent = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className=" bg-white md:w-[40rem] w-[22rem]  rounded-[60px] shadow md:px-24 py-11">
          <div className="grid grid-cols-1 text-center md:space-y-0 space-y-3 ">
            <div className="space-y-3 ">
              <button
                className="bg-[#F8EA19] rounded-3xl h-9 w-80 font-semibold mb-10 mt-5"
                disabled
              >
                Configuración de Entregas
              </button>
              <form action="">
                <input
                  className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 md:w-96 w-64 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                  type="text"
                  placeholder="Dirección de envio de paquetes"
                  required
                />
              </form>
            </div>
          </div>
          <div className="text-center pt-5 mb-5 ">
            <button className="bg-[#0880c4] rounded-3xl text-center h-9 w-44 text-white font-semibold">
              Guardar
            </button>
            <p className="mt-6">
              Llena tu información de envio de paquetería seleccionando una de
              las siguientes opciones:
            </p>
            <div className="flex justify-center space-x-9 mt-6">
              <button className="bg-[#DADADA] rounded-3xl text-center h-9 w-44  font-semibold">
                Persona Fisíca
              </button>
              <button className="bg-[#DADADA] rounded-3xl text-center h-9 w-44  font-semibold">
                Empresa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressComponent;
