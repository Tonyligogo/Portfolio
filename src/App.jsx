import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Services from "./components/Services";

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
    <main className="relative">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${active ? 'top-0 px-0' :'top-5 px-10'}`}>
      <Navbar active={active}/>
      </nav>
      <Hero />
      <Services/>
      <Skills/>
    </main>
  );
}

export default App;
