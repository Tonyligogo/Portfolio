import { Icon } from "@iconify/react/dist/iconify.js";
import Avatar from "../assets/profile.jpg";
import Me from "../assets/Myself.png"
import CssIcon from "../assets/css.png";
import ReactIcon from "../assets/react.png";
import HtmlIcon from "../assets/html.png";
import TailwindIcon from "../assets/tailwind.png";
import NextjsIcon from "../assets/next.webp";
import JsIcon from "../assets/js.png";
import { useEffect, useState } from "react";
function Hero() {
  const [showPopUp, setShowPopUp] = useState(false);
  useEffect(() => {
    const timeoutId1 = setTimeout(() => setShowPopUp(true), 5000);
    const timeoutId2 = setTimeout(() => setShowPopUp(false), 60000);
    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
    };
  }, []);
  return (
    <div className="relative mt-[200px] md:place-content-center md:px-4 lg:px-14">
      <div
        className={` ${
          showPopUp ? " flex " : "hidden"
        } md:items-center border border-white justify-center md:justify-between fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10 rounded-md md:rounded-lg text-white w-[90vw] md:w-5/12 p-4 md:py-6 md:px-8 backdrop-blur-lg bg-black/60 `}
      >
        <div className="flex gap-2 items-center">
          <img src={Avatar} alt="avatar" className="size-8 md:size-12 rounded-full" />
          <span className=" font-semibold text-sm md:text-lg">
            I am available for work
          </span>
        </div>
        <button className="bg-white mx-auto py-1 px-2 text-sm md:text-base md:px-4 font-semibold text-black rounded-full">
          Hire me
        </button>
        <span
          onClick={() => setShowPopUp(false)}
          className="absolute top-2 right-2 cursor-pointer"
        >
          {" "}
          <Icon
            icon="material-symbols:cancel-rounded"
            width="1.2rem"
            height="1.2rem"
            style={{ color: "white" }}
          />{" "}
        </span>
      </div>
      <div className="flex flex-col-reverse gap-9 md:flex-row md:justify-between items-center lg:justify-around ">
        <div className="lg:flex-1 flex flex-col px-4 md:px-0 gap-4">
          <h1 className="text-2xl font-bold flex gap-2 items-center text-gray-500">
            <Icon icon="noto:waving-hand" width="24" />
            Hey there, I&apos;m Ligogo
          </h1>
          <p className="text-lg">
            I&apos;m a{" "}
            <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text">
              Software Developer
            </span>
            <br /> with a passion for creating engaging and user-friendly
            interfaces.
          </p>
          {/* <ul className="flex gap-2">
            <li className="size-8 grid place-items-center rounded-md bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600">
              <Icon
                icon="prime:linkedin"
                width="1.4rem"
                height="1.4rem"
                style={{ color: "white" }}
              />
            </li>
            <li className="size-8 grid place-items-center rounded-md bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600">
              <Icon
                icon="ant-design:github-filled"
                width="1.4rem"
                height="1.4rem"
                style={{ color: "white" }}
              />
            </li>
            <li className="size-8 grid place-items-center rounded-md bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600">
              <Icon
                icon="ant-design:twitter-outlined"
                width="1.4rem"
                height="1.4rem"
                style={{ color: "white" }}
              />
            </li>
          </ul> */}
          <ul className="flex gap-3">
          <li className="bg-white border grid place-content-center size-14 rounded-md">
              <img src={HtmlIcon} alt="html logo" className="size-8"/>
            </li>
            <li className="bg-white border grid place-content-center size-14 rounded-md">
              <img src={CssIcon} alt="css logo" className="size-10"/>
            </li>
            <li className="bg-white border grid place-content-center size-14 rounded-md">
              <img src={JsIcon} alt="js logo" className="size-8"/>
            </li>
            <li className="bg-white border grid place-content-center size-14 rounded-md">
              <img src={ReactIcon} alt="react logo" className="size-8"/>
            </li>
            <li className="bg-white border grid place-content-center size-14 rounded-md">
              <img src={NextjsIcon} alt="nextjs logo" className="h-10"/>
            </li>
            
            <li className="bg-white border grid place-content-center size-14 rounded-md">
              <img src={TailwindIcon} alt="tailwind logo" className="h-6"/>
            </li>
            
          </ul>
          <button className=" py-2 px-4 bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 text-white rounded-lg flex items-center gap-2 w-fit">
            Let&apos;s talk{" "}
            <Icon
              icon="solar:arrow-right-outline"
              width="1rem"
              height="1rem"
              style={{ color: "white" }}
            />
          </button>
        </div>
        <div className="lg:flex-1 h-[45vh] md:h-[35vh] lg:h-[60vh] w-full">
          <div className="relative px-4 md:px-0 w-full lg:w-3/4 h-full lg:ml-auto">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pacman.svg/1200px-Pacman.svg.png" alt="pacman" className="absolute size-[20px] top-5 mix-blend-multiply "/>
          <div className="h-full relative overflow-hidden rounded-b-full">
            <img src="https://images.freeimages.com/vhq/images/previews/c7a/dots-square-grid-02-pattern-clip-art-531982.jpg" alt="dots" className="absolute left-8 w-1/2 top-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 w-full bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 h-1/2 origin-top-right -rotate-6"></div>
            <img src={Me} alt="" className="w-3/4 h-full object-cover absolute bottom-0 left-1/2 -translate-x-1/2"/>
          </div>
          </div>
        </div>
      </div>
      <div className="space-y-2 text-center w-3/4 mx-auto">
        <span className="font-bold text-base text-gray-500 uppercase">What I do</span>
        <h2 className="text-5xl font-bold text-dark">You Never Have To <br /> Worry About Your Website</h2>
        <p className="text-lg text-gray-600">I focus on building custom websites for individuals and businesses. I write every line of code by hand 😎 (okay, most lines 😁), to ensure your site runs smoothly and ranks well on search engines like Google, which helps attract more visitors and grow your revenue. I believe in fostering strong relationships with my clients, offering continuous support and updates to keep your website aligned with your business goals. <br /> Your success is my priority, and I&apos;m dedicated to helping you shine online!</p>
      </div>
     
    </div>
  );
}

export default Hero;




