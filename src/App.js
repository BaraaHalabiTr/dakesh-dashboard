import { Routes, BrowserRouter, Route, Router } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dahboard";
import Protected from "./Protected";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
