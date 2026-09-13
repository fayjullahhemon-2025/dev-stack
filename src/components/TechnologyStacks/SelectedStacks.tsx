import type { TechnologyStacksType } from "../types";
import { FaXmark } from "react-icons/fa6";
interface SelectedStacksPropType {
    selectedStacks: TechnologyStacksType[];
    handleRemoveStack: (id: string) => void;
    handleRemoveAll: () => void;
}
export default function SelectedStacks({ selectedStacks,
    handleRemoveStack,
    handleRemoveAll }: SelectedStacksPropType) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center  pb-2">
                <div>
                    <h1 className="text-xl font-bold text-[#0F172A]">Your Stacks</h1>
                    <p className='text-xs text-[#94A3B8]' > {selectedStacks.length} Technology Selected</p>
                </div>

            </div>

            {selectedStacks.length === 0 ? (
                <p className="text-gray-400 text-sm">No technologies selected yet.</p>
            ) : (
                <ul className="flex flex-col gap-2">
                    {selectedStacks.map((tech) => (
                        <li
                            key={tech.id}
                            className="flex justify-between items-center bg-[#F8FAFC] p-2 rounded-lg border border-slate-100"
                        >
                            <div className="flex items-center gap-2">
                                <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                                <span className="font-semibold text-sm text-[#0F172A]">{tech.name}</span>
                            </div>
                            <button
                                onClick={() => handleRemoveStack(tech.id)}
                                className="text-gray-400 hover:text-red-500 transition-colors p-1"

                            >
                                <FaXmark />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {selectedStacks.length > 0 && (
                <button
                    onClick={handleRemoveAll}
                    className="text-red-500 hover:text-red-700 text-[14px] flex items-center gap-1 font-semibold border-2 border-[#ED8C85] py-3 rounded-lg justify-center"
                >
                    Remove All
                </button>
            )}
        </div>
    )
}