import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Watch from "./pages/watch/watch";
// import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <h1>reacr router dom 6</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Footer">Footer</NavLink>
          <NavLink to="/Header">Header</NavLink>
          <NavLink to="/Books">Books</NavLink>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Watch" element={<Watch />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
