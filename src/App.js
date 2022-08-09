import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Footer } from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import AnimatedRoutes from './components/AnimatedRoutes';
import SocialIcons from './components/SocialIcons';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AnimatedRoutes />
        <SocialIcons />
      </Router>
      {/* <Banner />
      <Skills />
      <Footer /> */}
    </div>
  );
}

export default App;
