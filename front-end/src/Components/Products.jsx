import React from "react";

const ProductsInStockComponent = () => {
  return (
    <div class="flex flex-col min-h-screen shadow-md sm:rounded-lg">
      <div class="flex justify-evenly items-center ">
        <div className="">
          <h1 className="font-bold md:text-2xl text-md">REPORTES DE PRODUCTOS</h1>
        </div>
        <div className=" ">
          <div class="relative my-6 ml-2">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-80 w-40 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar"
            />
          </div>
        </div>
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-center text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              No. Producto
            </th>
            <th scope="col" class="px-6 py-3">
              Cliente
            </th>
            <th scope="col" class="px-6 py-3">
              Estado
            </th>
            <th scope="col" class="px-6 py-3">
              Trayectoria
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center px-6 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td>248</td>
            <th>Gustao Alejandrez</th>
            <td class="">Dado de alta</td>
            <td className="font-thin">
              Dado de alta: 20/2/2022
              <br />
              Camino al almacén: 20/3/2022
              <br />
              Llegó al almacén: 20/03/2022
              <br />
              Repartidor asignado: Rogelio Diaz
              <br />
              Camino a su destino: 25/03/2022
              <br />
              Entregado: 26/03/2022
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsInStockComponent;
