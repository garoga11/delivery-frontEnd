import React from "react";
import {Link} from "react-router-dom";

export default class Sidebar extends React.Component {
  state = {
    type: 1,
  };

  render() {
    const { type } = this.state;
    return (
      <React.Fragment>
        <div className="md:flex relative">
          <aside className=" flex flex-col md:w-64 w-screen md:h-full px-4 py-8 overflow-y-auto border-r items-center">
            <div className="bg-[#0880C4] w-36 h-36 rounded-full"></div>
            <p className="mt-5 font-bold text-xl">Ana Laura Martinez</p>

              <div className="flex flex-col mt-8 mb-8">
              <Link to="/profile">
                  <button className="active:bg-[#DADADA] w-44 px-6 py-2 bg-[#0880C4] font-thin text-white rounded-xl">
                    Perfil
                  </button>
                </Link>
              </div>
            <div className="">
              {type == 1 ? (
                <div className="space-y-6 grid">
                  <p className="text-center font-bold ">Administrador</p>
                  <button className="flex justify-evenly active:scale-95 px-6 py-2 bg-[#0880C4] font-thin text-white rounded-xl">
                    Usuarios
                  </button>
                  <button className="flex justify-evenly active:scale-95 px-6 py-2 bg-[#0880C4] font-thin text-white rounded-xl">
                    Solicitudes
                  </button>
                  <select className="flex justify-evenly active:scale-95 px-6 py-2 bg-[#0880C4] font-thin text-white rounded-xl text-center">
                        <option value="">-- Reportes --</option>
                        <option value="vegetable">Productos en almacén</option>
                        <option value="meat">Productos entregados</option>
                        <option value="vegetable">Productos sin repartidor asignado</option>
                        <option value="meat">Productos en espera (aún no llegan al almacén)</option>
                    </select>
                </div>
              ) : null}
              {type == 1 || type == 2 ? (
                <div className="space-y-6 grid">
                  <p className="text-center font-bold mt-5">Cliente</p>
                  <button className="flex justify-evenly active:scale-95 px-6 py-2 bg-[#0880C4] font-thin text-white rounded-xl">
                    Cotizar
                  </button>
                  <button className="flex justify-evenly active:scale-95 px-6 bg-[#DADADA] font-thin text-block rounded-xl">
                    Rutas
                  </button>
                  <button className="flex justify-evenly active:scale-95 px-6 py-2 bg-[#0880C4] font-thin text-white rounded-xl">
                    Solicitar Repartidor
                  </button>
                </div>
              ) : null}
              {type == 3 || type == 1 ? (
                  <div className="space-y-6 grid mt-5">
                  <p className="text-center font-bold ">Repartidor</p>
                  <button className="flex justify-evenly active:scale-95 px-6 py-2 bg-[#0880C4] font-thin text-white rounded-xl">
                    Entregas
                  </button>
                  <button className="flex justify-evenly active:scale-95 px-6 bg-[#DADADA] font-thin text-black rounded-xl">
                    Rutas
                  </button>
                </div>
              ) : null}
              </div>
          </aside>

          {/* <div className="w-full h-screen md:p-4 md:m-12 overflow-y-auto bg-gray-300 relative">
            <div className="md:p-8 border-4 border-dotted ">
            </div>
          </div>
          <button
            className="fixed absolute bottom-0 left-0 p-2 rounded-xl bg-dark-blue m-4"
          >
            <span className="font-thin text-white text-xs">Cerrar Sesion</span>
          </button> */}
        </div>
      </React.Fragment>
    );
  }
}
