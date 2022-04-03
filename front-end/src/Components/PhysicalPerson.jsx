import React from "react";

const PhysicalPersonComponent = () => {

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className=" bg-white md:w-[52rem] w-[22rem]  rounded-[60px] shadow flex flex-col md:px-24 py-11">
          <div className="grid md:grid-cols-2 grid-cols-1 place-content-center place-items-center">
            <div className="">
              <h1 className="font-bold text-xl">Llena los siguientes datos:</h1>
            </div>
            <div className="">
              <button
                className="bg-[#F8EA19] rounded-3xl h-9 w-44 font-semibold mb-10 mt-5 md:ml-24"
                disabled
              >Persona Fisíca
              </button>
            </div>
          </div>
          <form action="">
            <div className="grid md:grid-cols-2 grid-cols-1 text-center md:space-y-0 space-y-3 ">
              <div className="space-y-3 ">
                <input
                  className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                  type="text"
                  placeholder="Nombre completo del remitente"
                  required
                />

                <input
                  className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                  type="text"
                  placeholder="Calle"
                  required
                />

                <input
                  className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                  type="number"
                  placeholder="Número interior"
                  required
                />

                <input
                  className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                  type="number"
                  placeholder="Número exterior"
                />

                <input
                  className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600"
                  type="number"
                  placeholder="Código Postal"
                  required
                />
                <input
                  className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72  rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                  type="text"
                  placeholder="Ciudad"
                  required
                />
              </div>
              <div className="space-y-3">

                <input
                  className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                  type="text"
                  placeholder="Estado"
                  required
                />
                <input
                  className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                  type="text"
                  placeholder="País"
                  value="México"
                  required
                />
                <input
                  className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                  type="text"
                  placeholder="Tipo de producto"
                  required
                />
                <input
                  className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                  type="text"
                  placeholder="Descripción"
                  required
                />
                <input
                  className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                  type="number"
                  placeholder="Cantidad"
                  required
                />
                <input
                  className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                  type="text"
                  placeholder="Guía o código de rastreo"
                  required
                />
              </div>
            </div>
            <div className="text-center pt-5 mb-5">
              <button className="bg-[#F8EA19] rounded-3xl text-center h-9 w-44  font-semibold">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhysicalPersonComponent;
