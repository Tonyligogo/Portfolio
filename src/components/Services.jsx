import Hand from "../assets/hand.png";
import Portfolio from "../assets/portfolio.png";
import Ecommerce from "../assets/ecommerce.png";
import WebApp from "../assets/webApp.png"
import Business from "../assets/business.png"
function Services() {
  return (
    <div className="mt-10">
        <h3 className="text-center mb-10 text-gray-500 font-bold text-base uppercase">What I build</h3>
    <ul className="grid grid-cols-2 w-3/4 mx-auto px-10 justify-between gap-8">
      <li className="relative bg-dark rounded-lg p-8 space-y-4">
        <img src={Portfolio} alt="portfolio" className="size-12 absolute -top-6"/>
        <h3 className="text-2xl font-bold text-white">Personal Portfolios</h3>
        <p className="text-base text-gray-400 leading-relaxed tracking-wide ">Showcase your skills, projects, and experiences with a visually appealing personal portfolio. I&apos;ll give you something to highlight your unique style and expertise, making it easy for potential clients or employers to see what you can offer.</p>
      </li>
      <li className="relative bg-dark rounded-lg p-8 space-y-4">
      <img src={Business} alt="Business" className="size-14 absolute -top-6"/>
        <h3 className="text-2xl font-bold text-white">Business Website</h3>
        <p className="text-base text-gray-400 leading-relaxed tracking-wide ">Need a professional website for your business that effectively communicates your brand and services? I will create a tailored site to attract customers, provide essential information, and enhance your online presence, helping your business grow and succeed.</p>
      </li>
      <li className="relative bg-dark rounded-lg p-8 space-y-4">
      <img src={Ecommerce} alt="Ecommerce" className="size-12 absolute -top-5"/>
        <h3 className="text-2xl font-bold text-white">E-commerce sites</h3>
        <p className="text-base text-gray-400 leading-relaxed tracking-wide ">You want to sell products or services online? I build user-friendly e-commerce platforms that include secure payment gateways, inventory management, and intuitive shopping experiences to drive sales and customer satisfaction.</p>
      </li>
      <li className="relative bg-dark rounded-lg p-8 space-y-4">
      <img src={WebApp} alt="webApp" className="w-16 absolute -top-6"/>
        <h3 className="text-2xl font-bold text-white">Web Applications</h3>
        <p className="text-base text-gray-400 leading-relaxed tracking-wide ">I develop dynamic web applications that provide interactive features and functionalities. Whether it&apos;s a project management tool, a social networking site, or a custom solution, I develop these applications to meet your needs.</p>
      </li>
    </ul>
    <div className="flex justify-around bg-dark mt-10 pt-10">
    <div className="flex gap-4 items-center">
            <h3 className="text-white text-4xl font-bold">Choose me for</h3>
            <ul className="text-4xl font-bold text-gray-400">
                <li>Quality work</li>
                <li>Responsive site</li>
                <li className="text-sky-500">Good Price</li>
                <li>SEO friendly</li>
                <li>Quick delivery</li>
            </ul>
        </div>
        <div>
            <img src={Hand} alt="hand" className="max-h-[250px]" />
        </div>
    </div>
  </div>
  )
}

export default Services