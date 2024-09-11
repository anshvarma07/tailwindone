import "./App.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";



function App() {
  return <div className="App bg-[#6A9C89]">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
