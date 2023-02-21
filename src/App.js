// import logo from './logo.svg';
import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
