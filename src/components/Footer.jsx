import { Icon } from "@iconify/react/dist/iconify.js";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row py-5 px-10 md:items-end justify-between gap-6 md:gap-4 bg-dark text-white">
      <div className="space-y-1 text-center md:text-left">
        <h1 className="font-bold text-3xl text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text">
          Ligogo.dev
        </h1>
        <p>
         Elevate your online presence today👌
        </p>
      </div>
        <ul className="flex flex-col-reverse md:flex-row gap-2 text-sm md:text-base md:gap-4 items-center">
          <li>© Copyright 2024, Anthony Ligogo</li>
          <li className="flex gap-1 items-center"><Icon icon="solar:phone-bold" width="1.2rem" height="1.2rem"  style={{color: '#0ea5e9'}} /> 0710507872</li>
          <li className="flex gap-1 items-center"><Icon icon="fluent-color:mail-16" width="1.4rem" height="1.4rem" />
          <a href="mailto:ligogo.dev@gmail.com">ligogo.dev@gmail.com</a>
           </li>
        </ul>
    </footer>
  );
}

export default Footer;
