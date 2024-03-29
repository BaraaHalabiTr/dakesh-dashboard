import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Admins from "./pages/Admins/Admins";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Analysis from "./pages/Aanalysis/Analysis";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="/About" exact element={<About />}></Route>
          <Route path="/Admins" exact element={<Admins />}></Route>
          <Route path="/Analysis" exact element={<Analysis />}></Route>

          <Route path="/Settings" exact element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
