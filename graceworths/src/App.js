import './App.css';
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/About";
import FAQPage from "./components/Faq";
import OurServices from "./components/Services";
import Footer from "./components/footer";

// import Carousel from "./components/Carousel";


function App() {
  return (
    <div className="App">
      <Navbar bgColor={"white"} />
      <LandingPage bgColor={"blue"} />
      <AboutPage bgColor={"white"} />
      <FAQPage bgColor={"light"} />
      <OurServices  bgColor={"white"}/>
      <Footer bgColor={"blue"}/>
      
    </div>
  );
}

export default App;
