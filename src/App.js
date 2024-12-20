import "./App.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Aboutus from "./Pages/Aboutus";
import Career from "./Pages/Career";
import FloatingSocialButtons from "./components/FloatingSocialButtons";

function App() {
  return <div className="App bg-[#3F6D66]">
    <FloatingSocialButtons/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services/:serviceName" element={<Services />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </BrowserRouter>
  </div>;
}
export default App;