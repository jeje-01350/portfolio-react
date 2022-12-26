import './App.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css'
import {Services} from "./components/Services";
import {Contact} from "./components/Contact";

function App() {

let docTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "⏲ je t'attends"
    })

window.addEventListener("focus", () => {
        document.title = docTitle
    })

  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
