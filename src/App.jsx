import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, } from './components';
import StarWrapper from "./hoc/SectionWrapper";

// import { inRect } from "maath/dist/declarations/src/random";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Education /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />

        </div>
      </div>
    </BrowserRouter>
  )
}


export default App
// import React from "react";
// import "./index.css";
// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components';

