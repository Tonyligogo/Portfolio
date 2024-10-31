import { Icon } from "@iconify/react/dist/iconify.js";

function Navbar() {
  return (
    <div className="bg-[#0b1023] py-3">
    <div className=" flex items-center lg:justify-around justify-between px-[2rem]">
      <h1 className=" font-bold text-2xl text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text">
        ligogo.dev
      </h1>
      <div className="sm:hidden border border-white border-opacity-30 size-8 inline-flex justify-center items-center rounded-lg">
        <Icon
          icon="ic:round-menu"
          width="1.2rem"
          height="1.2rem"
          style={{ color: "white" }}
        />
      </div>
      <nav className="hidden sm:flex gap-6 items-center ">
        <a href="#home" className="text-white  hover-effect">Home</a>
        <a href="#myStack" className="text-white hover-effect">My stack</a>
        <a href="#myWork" className="text-white hover-effect">My work</a>
        <a href="#testimonials" className="text-white hover-effect">Testimonials</a>
        <a href="#contact" className="text-white hover-effect">Contact</a>
        <button className=" py-2 px-4 bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 text-white rounded-lg flex items-center gap-2">Let&apos;s talk <Icon icon="solar:arrow-right-outline" width="1rem" height="1rem"  style={{color: 'white'}} /></button>
      </nav>
    </div>
    </div>
  );
}

export default Navbar;