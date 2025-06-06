import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/Pages/About/About.jsx";
// import Home from "./components/Pages/Home/Home.jsx";
import Contact from "./components/Pages/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ChatBot from "./components/ChatBot/ChatBot.jsx";

const App = () => {
  function Home() {
    return (
      <div>
        <ChatBot></ChatBot>
      </div>
    );
  }
  return (
    <div className="con-all">
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/about" exact element={<About />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
