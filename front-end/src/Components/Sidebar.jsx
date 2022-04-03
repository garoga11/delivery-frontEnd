import React from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
  state = {
    type: 1,
  };

  render() {
    const { type } = this.state;
    return (
      <React.Fragment>
        <div className="md:flex relative">
          <aside className=" flex flex-col md:w-64 w-screen  h-screen px-4 py-8 overflow-y-auto border-r items-center">
            <div className="bg-[#0880C4] w-36 h-36 rounded-full"></div>
            <p className="mt-5 font-bold text-lg">Ana Laura Martinez</p>

            <div className="flex flex-col mt-8 mb-8">
              <Link to={"/profile"}>
                <button className="active:bg-[#DADADA] w-44 px-6 py-2 bg-[#0880C4] font-thin text-white rounded-xl">
                  Perfil
                </button>
              </Link>
            </div>
            <div className="">
              {type == 1 ? (
                <div className="space-y-6 grid">
                  <p className="text-center font-bold ">Administrador</p>
                  <Link
                    to="/users"
                    className="flex justify-evenly active:scale-95 px-6 py-2 bg-[#0880C4] font-thin text-white rounded-xl"
                  >
                    <button>Usuarios</button>
                  </Link>
                  <Link to="/requests">
                    <button className="flex justify-evenly w-48 active:scale-95 px-6 py-2 bg-[#0880C4] font-thin text-white rounded-xl">
                      Solicitudes
                    </button>
                  </Link>
                  <Link to="/products">
                    <button className="flex justify-evenly w-48 active:scale-95 px-6 py-2 bg-[#0880C4] font-thin text-white rounded-xl">
                      Reportes Productos
                    </button>
                  </Link>
                </div>
              ) : null}
              {type == 1 || type == 2 ? (
                <div className="space-y-6 grid">
                  <p className="text-center font-bold mt-5">Cliente</p>
                  <Link to={'/shipping'}>
                    <button className="flex justify-evenly active:scale-95 px-6 py-2 bg-[#0880C4] font-thin text-white rounded-xl">
                      Dirección de Entrega
                    </button>
                  </Link>
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
                  <button className="flex justify-evenly w-48 active:scale-95 px-6 py-2 bg-[#0880C4] font-thin text-white rounded-xl">
                    Entregas
                  </button>
                  <button className="flex justify-evenly active:scale-95 px-6 bg-[#DADADA] font-thin text-black rounded-xl">
                    Rutas
                  </button>
                </div>
              ) : null}
            </div>
          </aside>
          <div className="w-full bg-[#DADADA] ">{this.props.component}</div>
        </div>
      </React.Fragment>
    );
  }
}
