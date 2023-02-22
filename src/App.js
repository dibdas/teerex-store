// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Collections from "./pages/collections/Collections";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/collections/:collectionParamsId?"
          element={<Collections />}
        />
      </Routes>
    </div>
  );
}

export default App;
