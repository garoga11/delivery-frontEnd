import React from "react";
import {Link} from "react-router-dom";
/* import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content' */
import logo from "../../Assets/Images/biglogo_white.png"

/* const MySwal = withReactContent(Swal);
const profileType = () =>{ MySwal.fire({
    title:' Te quieres registrar como:',
    icon: 'question',
    iconColor: "#3B82F6",
    showCloseButton:true,
    showDenyButton: true,
    denyButtonText:'Repartidor',
    denyButtonColor:'#6B7280',
    showConfirmButton:true,
    confirmButtonText: 'Cliente',
    confirmButtonColor:'#3B82F6'
}).then((result) => {
    if(result.isConfirmed){
        window.location.href = "/customerRegister";
    }else if(result.isDenied){
        window.location.href = "/deliverymanRegister";
    }
})
} */
    

export default class Login extends React.Component{
    render(){
        return(
            <React.Fragment>
               <div className=" md:mx-auto" >
                <div className="flex h-screen items-center justify-center bg-blue-400">
                    {/* <div className=" w-full bg-no-repeat bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/11341064/pexels-photo-11341064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"> */}
                        <img src={logo} className="md:w-36 w-12 absolute md:top-10 top-5 md:left-10 left-5"/>
                        <div className="m:w-96 w-80 rounded-2xl border shadow py-12 px-8 text-center bg-white">
                            <p className="text-3xl font-semibold"> Inicia Sesión </p>
                            <p className="text-xs font-extralight mt-1 mb-20"> Introduce los datos de tu cuenta para continuar </p>
                            <p className="text-left mb-3 ml-7">Usuario</p>
                            <input className="mb-12 border-b-2 border-gray-200 focus:outline-none focus:border-0 focus:border-b-2 focus:border-[#0880C4] " type="text"/>
                            <p className="text-left mb-3 ml-7">Contraseña</p>
                            <input className="border-b-2 border-gray-200 focus:outline-none focus:border-0 focus:border-b-2 focus:border-[#0880C4]" type="password"/>
                            <Link to="/home">
                                <button className="mt-10 w-full py-3 rounded-3xl bg-[#0880C4] text-white hover:bg-[#0772af] hover:border-0 hover:-translate-y-1 hover:shadow-md delay-75 duration-100">
                                Inicia sesión para continuar
                                </button>
                            </Link>
                            <p className="text-xs font-light mt-3 "> ¿No tienes cuenta? <a className="text-gray-500 hover:text-[#0880C4] hover:font-bold" href="/decision">Registrate aquí</a></p>
                        </div>
                    {/* </div> */}
                </div>
               </div>
            </React.Fragment>
        );
    }
}