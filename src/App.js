import { Routes, BrowserRouter, Route, Router } from "react-router-dom";
// import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
// import Protected from "./Protected";
// import Sidenav from "./component/Sidenav";
import About from "./pages/About/About";
import Admins from "./pages/Admins/Admins";
import Settings from "./pages/Settings/Settings";
import Charts from "./pages/Charts/Chart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/About" exact element={<About />}></Route>
          <Route path="/Admins" exact element={<Admins />}></Route>
          <Route path="/Settings" exact element={<Settings />}></Route>
          <Route path="/Charts" exact element={<Charts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
