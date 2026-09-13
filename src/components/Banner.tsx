import BannerImg from '../assets/banner-stack.png'
export default function Banner() {
    return (
        <div className='flex justify-around items-center w-full m-auto'>
            <div className='flex flex-col justify-center '>
                <h1 className='text-[60px] font-bold leading-none text-[#0F172A] pb-3' >Build Your Ideal
                    <br />
                    <span className='bg-linear-to-r from-[#ff4b2b] via-[#e91e63] to-[#8e24aa] bg-clip-text text-transparent font-bold'>
                        Development Stack
                    </span>
                </h1>
                <p className='text-[#475569] pb-3' >
                    Explore frontend, backend, database, and tooling options, <br /> compare them side by side, and put together the stack that fits your <br /> next project.
                </p>
                <div className='flex items-center gap-2' >
                    <button className='bg-linear-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:opacity-95 transition' >Explore Technologies</button>
                    <button className=' text-[#374151] font-semibold px-6 py-3 rounded-2xl shadow-md hover:opacity-95 transition outline-[#E5E7EB]'>Learn More</button>
                </div>
            </div>
            <div className='flex justify-center items-center '>
                <img className='w-87.5 h-87.5' src={BannerImg} alt="" />
            </div>
        </div>
    )
}