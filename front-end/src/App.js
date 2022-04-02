import {BrowserRouter,Routes,Route,useParams,useLocation} from "react-router-dom";
import Login from './Pages/Login/login';
import RegisterClient from './Pages/Register/RegisterClient';
import RegisterDeliveryman from "./Pages/Register/RegisterDeliveryman";
import RegisterDecision from "./Pages/Register/RegisterDecision";
import CustomerHome from "./Pages/Home/CustomerHome";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/customerRegister" element={<RegisterClient/>}/>
        <Route path="/deliverymanRegister" element={<RegisterDeliveryman/>}/>
        <Route path="/decision" element={<RegisterDecision/>}/>
        <Route path="/customerHome" element={<CustomerHome/>}/>
        <Route path="/profile" element={<Profile/>}/>
    </Routes>
</BrowserRouter>

  );
}

export default App;
