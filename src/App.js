import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Experts from "./components/Experts";
import Newsletter from './components/Newsletter'
import Plans from "./components/Plans";

function App() {
  return <div className="App">
    <Header />
    <Banner />
    <Experts />
    <Newsletter />
    <Plans />
  </div>;
}

export default App;
