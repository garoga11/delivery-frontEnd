import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Pages/Login/login';
import RegisterClient from './Pages/Register/RegisterClient';
import RegisterDeliveryman from "./Pages/Register/RegisterDeliveryman";
import RegisterDecision from "./Pages/Register/RegisterDecision";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Users from "./Pages/Administrator/Users"
import RequestComponent from "./Pages/Administrator/Requests"
import Products from "./Pages/Administrator/Products"
import ShippingAddress from "./Pages/Customer/ShippingAddress"
import PhysicalPerson from "./Pages/Customer/PhysicalPerson"
import Company from "./Pages/Customer/Company"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/customerRegister" element={<RegisterClient/>}/>
        <Route path="/deliverymanRegister" element={<RegisterDeliveryman/>}/>
        <Route path="/decision" element={<RegisterDecision/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/requests" element={<RequestComponent/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/shipping" element={<ShippingAddress/>}/>
        <Route path="/physicalperson" element={<PhysicalPerson/>}/>
        <Route path="/company" element={<Company/>}/>
    </Routes>
</BrowserRouter>

  );
}

export default App;
