import type { TechnologyStacksType } from "../types"
import { FaStar } from "react-icons/fa6";

interface TechnologyCardPropType {
    technology: TechnologyStacksType;
    isSelected: boolean;
  handleAddStack: (tech: TechnologyStacksType) => void;
}
export default function TechnologyCard({ technology,isSelected, handleAddStack }: TechnologyCardPropType) {
    return (
        <div className="flex flex-col justify-center gap-1.5 border border-[#F1F5F9] p-2" >
            <div className='flex justify-between' >
                <img className='w-6.25' src={technology.icon} alt="" />
                <span
                    className={`text-[11.5px] p-1 rounded-lg ${technology.id === 'react' ? 'text-[#0EA5E9] bg-[#E0F2FE]'
                            : technology.id === 'vue' ? 'text-[#41B883] bg-[#E6F4ED]'
                                : technology.id === 'svelte' ? 'text-[#FF3E00] bg-[#FFEBE6]'
                                    : technology.id === 'nextjs' ? 'text-black bg-[#F3F4F6]'
                                        : technology.id === 'nodejs' ? 'text-[#339933] bg-[#EAF5EA]'
                                            : technology.id === 'postgresql' ? 'text-[#4169E1] bg-[#EBF0FF]'
                                                : technology.id === 'redis' ? 'text-[#DC382D] bg-[#FCE8E6]'
                                                    : technology.id === 'javascript' ? 'text-[#A16207] bg-[#FEF9C3]'
                                                        : technology.id === 'typescript' ? 'text-[#3178C6] bg-[#EBF3FC]'
                                                            : technology.id === 'java' ? 'text-[#007396] bg-[#E6F4F8]'
                                                                : technology.id === 'tailwindcss' ? 'text-[#06B6D4] bg-[#E0F7FA]'
                                                                    : technology.id === 'docker' ? 'text-[#2496ED] bg-[#E8F4FE]'
                                                                        : 'text-gray-500 bg-gray-100'
                        }`}>{technology.badge}</span>
            </div>
            <h2 className='text-[#0F172A] text-[18px] font-bold' >{technology.name}</h2>
            <p className='line-clamp-3 text-[#64748B] text-[12px]' >{technology.description}</p>
            <div className='flex items-center' >
                <span className='bg-[#f1f5f9da] text-[#475569] rounded-lg px-4 py-2 ' >{technology.category}</span>
                <span className=' text-[#475569] rounded-lg px-4 py-2' >{technology.difficulty}</span>
                <span className='flex items-center gap-1 text-[#334155] rounded-lg px-4 py-2 font-bold'><FaStar className='text-yellow-400' /> {technology.rating}</span>
            </div>
            <button onClick={()=>{
                handleAddStack(technology)
            }} disabled={isSelected} className={`bg-[#0A0F1D] text-white rounded-lg px-4.5 py-2.5 ${
          isSelected
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[#0A0F1D] text-white hover:bg-slate-800"
        } `} >{isSelected ? "Added to Stack" : "Add To Stack"}</button>
        </div>
    )
}