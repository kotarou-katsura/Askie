import Navbar from "./components/navbar/Navbar";
import "./App.css";
import ChatBot from "./components/ChatBot/ChatBot";


const App = () => {
  return (
    <div className="con-all">
     <Navbar></Navbar>
      <ChatBot></ChatBot>
    </div>
  );
};

export default App;
