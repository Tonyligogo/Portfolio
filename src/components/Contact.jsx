import { Icon } from "@iconify/react/dist/iconify.js"

function Contact() {
  return (
    <div id="contact" className="md:w-3/4 flex flex-col md:flex-row justify-between items-center px-4 md:px-10 mx-auto my-10 text-white h-[35vh] md:h-[40vh] rounded-xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text tracking-wide font-bold">Ready to get the site <br /> you&apos;ve always wanted?</h2>
        <div className="justify-self-center w-full md:w-auto space-y-2 p-5 rounded-lg bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600">
        <h2 className="text-2xl font-bold">Contact information</h2>
        <ul>
          <li className="flex gap-2 mb-2 items-center"><Icon icon="solar:phone-bold" width="1.4rem" height="1.4rem" /> 0710507872</li>
          <li className="flex gap-2 items-center"><Icon icon="material-symbols:mail" width="1.4rem" height="1.4rem" />
          <a href="mailto:ligogo.dev@gmail.com">ligogo.dev@gmail.com</a>
           </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact