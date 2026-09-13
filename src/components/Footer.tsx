import Logo from '../assets/logo-text.png'
export default function Footer() {
    return (
        <div>
            <footer className="w-full  m-auto bg-white text-slate-500 text-sm py-12 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">

                        <div className="md:col-span-2 flex flex-col gap-4 max-w-sm mx-auto md:mx-0 items-center md:items-start text-center md:text-left">

                            <div className="flex items-center gap-2">
                                <img src={Logo} alt="Logo" className="h-8 md:h-10" />
                            </div>


                            <p className="text-slate-400 text-xs leading-relaxed">
                                Curated tools, technologies, and resources for developers building modern software.
                            </p>


                            <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 mt-2">
                                <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
                                <span className="text-slate-300"></span>
                                <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
                                <span className="text-slate-300"></span>
                                <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
                            </div>
                        </div>

                        <div className="hidden md:flex flex-col gap-3 items-center md:items-start text-center md:text-left">
                            <h3 className="text-xs font-bold text-slate-900">
                                PRODUCT
                            </h3>
                            <ul className="flex flex-col gap-2 text-xs text-slate-400">
                                <li><a href="#" className="hover:text-slate-600 transition-colors">Home</a></li>
                                <li><a href="#" className="hover:text-slate-600 transition-colors">Technologies</a></li>
                                <li><a href="#" className="hover:text-slate-600 transition-colors">Projects</a></li>
                            </ul>
                        </div>


                        <div className="hidden md:flex flex-col gap-3 items-center md:items-start text-center md:text-left">
                            <h3 className="text-xs font-bold text-slate-900">
                                COMPANY
                            </h3>
                            <ul className="flex flex-col gap-2 text-xs text-slate-400">
                                <li><a href="#" className="hover:text-slate-600 transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-slate-600 transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-slate-600 transition-colors">Careers</a></li>
                            </ul>
                        </div>


                        <div className="hidden md:flex flex-col gap-3 items-center md:items-start text-center md:text-left">
                            <h3 className="text-xs font-bold text-slate-900">
                                LEGAL
                            </h3>
                            <ul className="flex flex-col gap-2 text-xs text-slate-400">
                                <li><a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="border-t border-slate-100 mb-6" />


                    <div className="flex flex-row justify-between items-center text-[10px] sm:text-xs text-slate-400 gap-2">
                        <p className="text-left">© 2026 Dev Stack. All rights reserved.</p>
                        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
