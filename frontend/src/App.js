import { Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lux from "./pages/Lux";
import About from "./pages/About";
import Map from "./pages/Map";
import Populaire from "./pages/Populaire";
import SignUp from "./pages/profiles/SignUp";
import AddCarDashboard from "./pages/profiles/AddCarDashboard";
import CarDetail from "./pages/detail/CarDetail";
import Account from "./pages/profiles/Account";

function App() {
  return (
    <div style={{ backgroundColor: '#FAFAFA' }}>
      <div>
        <Header />
      </div>
      <div className="" style={{ marginTop: '' }}>
        <div style={{height:'50px', backgroundColor:'black'}}>
        </div>
        <Routes>
          <Route path="/" element={<Acceuil />}></Route>
          <Route path="/Lux" element={<Lux />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Populaire" element={<Populaire />}></Route>
          <Route path="/Map" element={<Map />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/account" Component={Account}></Route>
          <Route path="/AddCar" element={<AddCarDashboard/>} />
          <Route path="/cars/:id" element={<CarDetail />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
