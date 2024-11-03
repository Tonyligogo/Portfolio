/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

function Navbar({active}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`bg-[#0b1023] py-5 relative ${active ? 'rounded-none shadow-sky-100 shadow-sm' : 'rounded-lg'}`}>
    <div className=" flex items-center lg:justify-around justify-between px-[2rem]">
      <h1 className=" font-bold text-2xl text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text">
        ligogo.dev
      </h1>
      <button onClick={()=>setMenuOpen(prev=>!prev)} className="sm:hidden border border-white border-opacity-30 size-8 inline-flex justify-center items-center rounded-lg">
      {menuOpen ?
      <Icon icon="iconamoon:close" width="1.3rem" height="1.3rem" style={{ color: "white" }}/>
      :
         <Icon
          icon="ic:round-menu"
          width="1.2rem"
          height="1.2rem"
          style={{ color: "white" }}
        /> 
        
      }
      </button>
      <nav className="hidden md:flex gap-6 items-center ">
        <a href="#" className="text-white hover-effect">Home</a>
        <a href="#skills" className="text-white hover-effect">My stack</a>
        <a href="#work" className="text-white hover-effect">My work</a>
        <a href="#contact" className="text-white hover-effect">Contact</a>
        <a href="#contact" className=" py-2 px-4 bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 text-white rounded-lg flex items-center gap-2">Let&apos;s talk <Icon icon="solar:arrow-right-outline" width="1rem" height="1rem"  style={{color: 'white'}} /></a>
      </nav>
    </div>
    <aside className={`absolute w-[80vw] top-[66px] h-[100vh] bg-[#0b1023] z-50 transition-all ${menuOpen ? 'left-0' :'-left-[1000px]'}`}>
    <nav className="flex flex-col gap-6 items-start px-8">
        <a onClick={()=>setMenuOpen(false)} href="#" className="text-white hover-effect">Home</a>
        <a onClick={()=>setMenuOpen(false)} href="#skills" className="text-white hover-effect">My stack</a>
        <a onClick={()=>setMenuOpen(false)} href="#work" className="text-white hover-effect">My work</a>
        <a onClick={()=>setMenuOpen(false)} href="#contact" className="text-white hover-effect">Contact</a>
        <a onClick={()=>setMenuOpen(false)} href="#contact" className=" py-2 px-4 bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 text-white rounded-lg flex items-center gap-2">Let&apos;s talk <Icon icon="solar:arrow-right-outline" width="1rem" height="1rem"  style={{color: 'white'}} /></a>
      </nav>
    </aside>
    </div>
  );
}

export default Navbar;
