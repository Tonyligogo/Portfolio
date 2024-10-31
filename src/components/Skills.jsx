import CssIcon from "../assets/css.png";
import ReactIcon from "../assets/react.png";
import HtmlIcon from "../assets/html.png";
import TailwindIcon from "../assets/tailwind.png";
import NextjsIcon from "../assets/next.webp";
import JsIcon from "../assets/js.png";
import NodejsIcon from "../assets/nodejs.jpg";
import PythonIcon from "../assets/python.svg";
import DjangoIcon from "../assets/django.png";
function Skills() {
  return (
    <div id="skills" className="scroll-mt-16 py-10 bg-gradient-to-r from-sky-50 via-blue-100 to-blue-200">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-10">My Core Skills</h1>
      <ul className="grid px-4 grid-cols-3 lg:grid-cols-5 gap-y-6 justify-center md:w-3/4 lg:w-1/2 mx-auto gap-3 ">
        <li className="bg-white grid place-content-center size-24 md:size-28 rounded-md">
          <img src={HtmlIcon} alt="html logo" className="size-20" />
        </li>
        <li className="bg-white grid place-content-center size-24 md:size-28 rounded-md">
          <img src={CssIcon} alt="css logo" className="size-24" />
        </li>
        <li className="bg-white grid place-content-center size-24 md:size-28 rounded-md">
          <img src={JsIcon} alt="js logo" className="size-20" />
        </li>
        <li className="bg-white grid place-content-center size-24 md:size-28 rounded-md">
          <img src={ReactIcon} alt="react logo" className="size-20" />
        </li>
        <li className="bg-white grid place-content-center size-24 md:size-28 rounded-md overflow-hidden">
          <img src={NextjsIcon} alt="nextjs logo" className="h-24" />
        </li>

        <li className="bg-white grid place-content-center size-24 md:size-28 rounded-md">
          <img src={TailwindIcon} alt="tailwind logo" className="w-20 lg:w-24" />
        </li>
        <li className="bg-white grid place-content-center size-24 md:size-28 rounded-md">
          <img src={NodejsIcon} alt="react logo" className="w-24" />
        </li>
        <li className="bg-white grid place-content-center size-24 md:size-28 rounded-md">
          <img src={PythonIcon} alt="nextjs logo" className="h-24" />
        </li>

        <li className="bg-white grid place-content-center size-24 md:size-28 rounded-md">
          <img src={DjangoIcon} alt="tailwind logo" className="w-20 lg:w-24" />
        </li>
      </ul>
    </div>
  );
}

export default Skills;
