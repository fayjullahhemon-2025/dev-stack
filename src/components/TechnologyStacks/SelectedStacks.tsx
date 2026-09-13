import type { TechnologyStacksType } from "../types";
import { FaTrash, FaXmark } from "react-icons/fa6";
interface SelectedStacksPropType {
    selectedStacks: TechnologyStacksType[];
    handleRemoveStack: (id: string) => void;
    handleRmoveAll: () => void;
}
export default function SelectedStacks({ selectedStacks,
    handleRemoveStack,
    handleRmoveAll}: SelectedStacksPropType) {
    return (
        <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center border-b pb-2">
        <h1 className="text-xl font-bold text-[#0F172A]">Your Stacks ({selectedStacks.length})</h1>
        {selectedStacks.length > 0 && (
          <button
            onClick={handleRmoveAll}
            className="text-red-500 hover:text-red-700 text-xs flex items-center gap-1 font-semibold"
          >
            <FaTrash /> Clear All
          </button>
        )}
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
                aria-label={`Remove ${tech.name}`}
              >
                <FaXmark />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
    )
}