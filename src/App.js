import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css'
import {Services} from "./components/Services";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Services />
        <Footer />
    </div>
  );
}

export default App;
