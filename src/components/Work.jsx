
function Work() {
  return (
    <div id="work" className="scroll-mt-16 bg-dark py-10 text-white">
        <div className="px-4 text-center md:text-left md:px-10">
            <span className="font-bold text-base text-sky-500">My work</span>
            <h2 className="text-[26px] md:text-4xl mt-5 font-bold">Check out some of the work <br className="hidden md:block"/> I&apos;ve done</h2>
        </div>
        <div className="px-4 md:w-3/4 md:mx-auto">
        <ul className="mt-10 space-y-10">
            <li className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1 rounded-lg overflow-hidden">
                    <img src="https://cdn.dribbble.com/userupload/15775593/file/original-f411409b7d9ce2cea75123e02223f17d.png?resize=400x0" alt="" className="w-full h-full"/>
                </div>
                <div className="flex-1">
                    <p className="text-sm md:text-base tracking-wide leading-relaxed text-gray-400">This online job board connects job seekers with employers, providing a user-friendly platform for posting and searching job listings. With features like advanced search filters, resume uploads, and application tracking, the site streamlines the hiring process for both candidates and companies, making it easier to find the right fit.</p>
                    <ul className="flex flex-wrap mt-5 gap-2">
                        <li className="bg-sky-500 text-white rounded-full px-2 py-1 text-sm">Nextjs</li>
                        <li className="bg-sky-500 text-white rounded-full px-2 py-1 text-sm">MongoDB</li>
                    </ul>
                </div>
            </li>
            <li className="flex flex-col md:flex-row-reverse items-center justify-between gap-4">
                <div className="flex-1 rounded-lg overflow-hidden">
                    <img src="https://llllline.com/images/thumbs/0000046430_online-pharmacy-app-ui-template_800.jpeg" alt="" className="w-full h-full"/>
                </div>
                <div className="flex-1">
                    <p className="text-sm md:text-base tracking-wide leading-relaxed text-gray-400">The pharmacy e-commerce site offers a seamless shopping experience for customers looking to purchase health and wellness products online. With a secure payment system, easy navigation, and detailed product descriptions, users can quickly find and order medications and health supplies, all while enjoying reliable delivery services.</p>
                    <ul className="flex flex-wrap mt-5 gap-2">
                        <li className="bg-sky-500 text-white rounded-full px-4 py-1 text-sm">Nextjs</li>
                        <li className="bg-sky-500 text-white rounded-full px-4 py-1 text-sm">Clerk Auth</li>
                        <li className="bg-sky-500 text-white rounded-full px-4 py-1 text-sm">Cloudinary</li>
                        <li className="bg-sky-500 text-white rounded-full px-4 py-1 text-sm">Prisma</li>
                        <li className="bg-sky-500 text-white rounded-full px-4 py-1 text-sm">MySQL</li>
                    </ul>
                </div>
            </li>
            <li className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1 rounded-lg overflow-hidden">
                    <img src="https://cms.pixso.net/images/articles/ecommerce-dashboard.png" alt="" className="w-full h-full"/>
                </div>
                <div className="flex-1">
                    <p className="text-sm md:text-base tracking-wide leading-relaxed text-gray-400">The ERP system I developed integrates various business processes into a single, cohesive platform. This custom solution enhances efficiency by automating tasks such as inventory management, order processing, and financial reporting. With a user-friendly interface and real-time data access, businesses can make informed decisions and improve overall productivity.</p>
                    <ul className="flex flex-wrap mt-5 gap-2">
                        <li className="bg-sky-500 text-white rounded-full px-4 py-1 text-sm">Reactjs</li>
                        <li className="bg-sky-500 text-white rounded-full px-4 py-1 text-sm">OAuth</li>
                        <li className="bg-sky-500 text-white rounded-full px-4 py-1 text-sm">Redis</li>
                        <li className="bg-sky-500 text-white rounded-full px-4 py-1 text-sm">Nodejs</li>
                        <li className="bg-sky-500 text-white rounded-full px-4 py-1 text-sm">MongoDB</li>
                    </ul>
                </div>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Work