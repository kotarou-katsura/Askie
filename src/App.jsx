import Navbar from "./components/navbar/Navbar";
import "./App.css";
import ChatBot from "./components/ChatBot/ChatBot";
import { Routes , Route} from "react-router-dom";
import About from "./components/Pages/About/About.jsx";
import Home from "./components/Pages/Home/Home.jsx";
import Contact from "./components/Pages/Contact/Contact.jsx";

const App = () => {
  return (
    <div className="con-all">
     <Navbar/>
      <Routes>
        <Route path="/home" exact element={<Home />}></Route> 
        <Route path="/about" exact element={<About/>}></Route>
        <Route path="/contact" exact element={<Contact/>}></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
};

export default App;
