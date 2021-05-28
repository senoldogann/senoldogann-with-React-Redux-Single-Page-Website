import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"
import Products from "./components/Products";
import Satisfaction from "./components/Satisfaction";
import Slider from "./components/Slider";
import Team from "./components/Team";
import About from "./components/About";
import Contact from "./components/Contact";
 
function App() {
  return (
    <BrowserRouter>
 
     <div className="contanier m-auto w-100 h-auto">
        <Navbar/>
        <Slider/>
        <Products/>
          <Satisfaction/>
          <Team/>
          <About/>
          <Contact/>
        </div>
  
    </BrowserRouter>
  );
}

export default App;
