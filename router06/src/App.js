import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import PI from "./pages/PI";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <h1>Projeto Roteamento</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PI />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
