import Home from "./Home"
import About from "../About/About";
import Project from "../Projects/Project";
import Contact from "../Contact/Contact";

function HomePage() {
    return ( 
        <div>
            <Home/>
            <About/>
            <Project/>
            <Contact/>
        </div>
     );
}

export default HomePage;