import React from 'react';
const ProfileComponent = () => {
    const type = 1;
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className=" bg-white md:w-[52rem] w-[22rem]  rounded-[60px] shadow flex flex-col md:px-24 py-11">
          <div className="grid md:grid-cols-2 grid-cols-1 place-content-center place-items-center">
            <div className="">
              <div className="bg-[#0880C4] w-28 h-28 rounded-full mb-5"></div>
            </div>
            <div className="">
              <button
                className="bg-[#F8EA19] rounded-3xl h-9 w-44 font-semibold mb-10 mt-5 md:ml-24"
                disabled
              >
                {type == 1
                  ? 'ADMINISTRADOR'
                  : type == 2
                  ? 'CLIENTE'
                  : type == 3
                  ? 'REPARTIDOR'
                  : null}
              </button>
            </div>
          </div>

          {type == 1 || type == 2 ? (
            <form action="">
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
              <div className="text-center pt-5 mb-5">
                <button className="bg-[#F8EA19] rounded-3xl text-center h-9 w-44  font-semibold">
                  Guardar
                </button>
              </div>
            </form>
          ) : type == 3 ? (
            <form action="">
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
                    placeholder="Ciudad"
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
                    type="text"
                    placeholder="INE"
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
                </div>
              </div>
              <div className="text-center pt-5 mb-5">
                <button className="bg-[#F8EA19] rounded-3xl text-center h-9 w-44  font-semibold">
                  Guardar
                </button>
              </div>
            </form>
          ) : null}
          <form action="">
            <div className="grid md:grid-cols-2 grid-cols-1 text-center md:space-y-0 space-y-3 ">
              <input
                className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600 "
                type="text"
                placeholder="Contraseña actual"
                required
              />
              <input
                className="bg-gray-200 placeholder:text-black placeholder:px-4 h-11 w-72 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-600"
                type="number"
                placeholder="Nueva contraseña"
              />
            </div>
            <div className="text-center pt-5 mb-5">
              <button className="bg-[#F8EA19] rounded-3xl text-center h-9 w-44  font-semibold">
                Cambiar contraseña
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
