import './App.css';
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/About";
// import Carousel from "./components/Carousel";


function App() {
  return (
    <div className="App">
      <Navbar bgColor={"white"} />
      <LandingPage bgColor={"blue"} />
      <AboutPage bgColor={"white"} />
      {/* <Carousel bgColor={"light"} /> */}
      
    </div>
  );
}

export default App;
