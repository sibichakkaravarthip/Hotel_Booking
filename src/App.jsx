import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Main/Navbar";
import { Home } from "./Main/pages/Home";
import { About } from "./Main/pages/About";
import { Contact } from "./Main/pages/Contact";
import {Login} from "./Main/pages/Login";   
import { Singin } from "./Main/pages/Singin"; 
import RoomBookingApp from "./RoomBookinApp";
import { Main } from "./Main/Main";
import { Footer } from "./Main/Footer";


function App() {
  
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/singin" element={<Singin/>}/>
    <Route path="/click" element={<RoomBookingApp/>}/>
    </Routes>
    <Main/>

    <Footer/>
   
    </>
  )
}

export default App
