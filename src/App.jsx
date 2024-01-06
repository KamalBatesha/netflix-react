import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Watch from "./pages/watch/watch";
// import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <h1>reacr router dom 6</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Footer">Footer</NavLink>
          <NavLink to="/Header">Header</NavLink>
          <NavLink to="/Books">Books</NavLink>
        </nav> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/netflix-react" element={<Home />} />
          <Route path="/netflix-react/Login" element={<Login />} />
          <Route path="/netflix-react/Register" element={<Register />} />
          <Route path="/netflix-react/Watch" element={<Watch />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
    // <div>
    //   <Home />
    // </div>
  );
}

export default App;
