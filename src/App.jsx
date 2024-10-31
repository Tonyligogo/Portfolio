import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const[active, setActive] = useState(false)

    const isActive = ()=>{
        window.scrollY > 50 ? setActive(true) : setActive(false)
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", isActive);
        return ()=>{
            window.removeEventListener("scroll", isActive);
        };
    },[])
  return (
    <main className="relative bg-gradient-to-r from-sky-50 via-blue-100 to-blue-200">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${active ? 'top-0 px-0' :'top-5 px-4 md:px-10'}`}>
      <Navbar active={active}/>
      </nav>
      <Hero />
      <Services/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
