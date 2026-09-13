import BannerImg from '../assets/banner-stack.png'
export default function Banner() {
    return (
        <div className='flex flex-col md:flex-row justify-around items-center w-full px-4 md:px-0 max-w-7xl m-auto mb-10 gap-8 md:gap-0'>
            <div className='flex flex-col justify-center text-center md:text-left items-center md:items-start'>
                <h1 className='text-4xl md:text-[60px] font-bold leading-tight text-[#0F172A] pb-3' >Build Your Ideal
                    <br />
                    <span className='bg-linear-to-r from-[#ff4b2b] via-[#e91e63] to-[#8e24aa] bg-clip-text text-transparent font-bold'>
                        Development Stack
                    </span>
                </h1>
                <p className='text-[#475569] pb-5 md:pb-3 text-sm md:text-base px-2 md:px-0' >
                    Explore frontend, backend, database, and tooling options, <br className="hidden md:block" /> compare them side by side, and put together the stack that fits your <br className="hidden md:block" /> next project.
                </p>
                <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-2 w-full sm:w-auto px-4 sm:px-0' >
                    <button className='w-full sm:w-auto bg-linear-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:opacity-95 transition' >Explore Technologies</button>
                    <button className='w-full sm:w-auto text-[#374151] font-semibold px-6 py-3 rounded-2xl shadow-md hover:opacity-95 transition outline-[#E5E7EB]'>Learn More</button>
                </div>
            </div>
            <div className='flex justify-center items-center mt-6 md:mt-0'>
                <img className='w-full max-w-87.5 md:w-87.5 md:h-87.5 object-contain' src={BannerImg} alt="" />
            </div>
        </div>
    )
}