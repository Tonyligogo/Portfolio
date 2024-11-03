import { Icon } from "@iconify/react/dist/iconify.js";
import Me from "../assets/MyPic2.png"
import CssIcon from "../assets/css.png";
import ReactIcon from "../assets/react.png";
import HtmlIcon from "../assets/html.png";
import TailwindIcon from "../assets/tailwind.png";
import NextjsIcon from "../assets/next.webp";
import JsIcon from "../assets/js.png";
import Dots from "../assets/dots.png";
function Hero() {
  
  return (
    <div className="relative pt-[150px] md:pt-[200px] md:place-content-center md:px-4 lg:px-14">
      <div className="flex flex-col-reverse gap-9 md:flex-row md:justify-between items-center lg:justify-evenly ">
        <div className="lg:flex-1 flex flex-col gap-4 px-4 md:px-10">
          <h1 className="text-2xl font-bold flex gap-2 items-center text-gray-500">
            <Icon icon="noto:waving-hand" width="24" />
            Hey there, I&apos;m Ligogo
          </h1>
          <p className="text-[17px] md:text-lg text-gray-600">
            I&apos;m a{" "}
            <span className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text">
              Software Developer.
            </span>
            <br /> I combine technical expertise with creative flair to deliver
          exceptional web development services. <br /> Let&apos;s partner to elevate
          your online presence and achieve your business goals.
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
          <ul className="flex flex-wrap gap-3">
          <li className="bg-white grid place-content-center size-14 rounded-md">
              <img src={HtmlIcon} alt="html logo" className="size-8"/>
            </li>
            <li className="bg-white grid place-content-center size-14 rounded-md">
              <img src={CssIcon} alt="css logo" className="size-10"/>
            </li>
            <li className="bg-white grid place-content-center size-14 rounded-md">
              <img src={JsIcon} alt="js logo" className="size-8"/>
            </li>
            <li className="bg-white grid place-content-center size-14 rounded-md">
              <img src={ReactIcon} alt="react logo" className="size-8"/>
            </li>
            <li className="bg-white grid place-content-center size-14 rounded-md">
              <img src={NextjsIcon} alt="nextjs logo" className="h-10"/>
            </li>
            
            <li className="bg-white grid place-content-center size-14 rounded-md">
              <img src={TailwindIcon} alt="tailwind logo" className="h-6"/>
            </li>
            
          </ul>
          <a href="#contact" className=" py-2 px-4 bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 text-white rounded-lg flex items-center gap-2 w-fit">
            Let&apos;s talk{" "}
            <Icon
              icon="solar:arrow-right-outline"
              width="1rem"
              height="1rem"
              style={{ color: "white" }}
            />
          </a>
        </div>
        <div className="lg:flex-1 px-4 h-[45vh] md:h-[35vh] lg:h-[60vh] w-full">
          <div className="relative w-full lg:w-3/4 h-full lg:ml-auto">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pacman.svg/1200px-Pacman.svg.png" alt="pacman" className="absolute size-[20px] top-5 mix-blend-multiply "/>
          <div className="h-full relative overflow-hidden rounded-b-full">
            <img src={Dots} alt="dots" className="absolute left-8 w-1/2 top-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 w-full bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 h-1/2 origin-top-right -rotate-6"></div>
            <img src={Me} alt="Myself" className="h-full object-cover absolute bottom-0 left-1/2 -translate-x-1/2"/>
          </div>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-0 px-4 space-y-2 text-center md:w-3/4 mx-auto">
        <span className="font-bold text-base text-gray-500 uppercase">What I do</span>
        <h2 className="text-2xl md:text-5xl font-bold text-dark">You Never Have To <br /> Worry About Your Website</h2>
        <p className="text-[17px] md:text-lg text-gray-600">I focus on building custom websites for individuals and businesses. I write quality code 😎, to ensure your site runs smoothly and is SEO friendly, which helps attract more visitors and grow your revenue. I believe in fostering strong relationships with my clients, offering continuous support and updates to keep your website aligned with your business goals. <br /> Your success is my priority, and I&apos;m dedicated to helping you shine online!</p>
      </div>
     
    </div>
  );
}

export default Hero;




