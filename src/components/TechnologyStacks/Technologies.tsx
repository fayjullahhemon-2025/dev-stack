import { use, useState } from "react"
import type { TechnologyStacksType } from "../types"
import TechnologyCard from "./TechnologyCard";
import SelectedStacks from "./SelectedStacks";
import { Bounce, toast } from "react-toastify";

interface TechnologiesPropType {
    TechnologyPromiseData: Promise<TechnologyStacksType[]>
}
export default function Technologies({ TechnologyPromiseData }: TechnologiesPropType) {
    const technologies = use(TechnologyPromiseData);
    const [selectedStacks, setSelectedStacks] = useState<TechnologyStacksType[]>([]);
    const handleAddStack = (tech: TechnologyStacksType) => {
        if (!selectedStacks.find((item) => item.id === tech.id)) {
            setSelectedStacks((prev) => [...prev, tech]);
           
        }
        
    };
    const handleRemoveStack = (id: string) => {
        setSelectedStacks((prev) => prev.filter((item) => item.id !== id));
        toast.info(`${id} Removed Successfully`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };
    const handleRemoveAll = (): void => {
        setSelectedStacks([]);
        toast.info(`Removed All Stack Successfully`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };
    return (
        <div className="flex justify-center w-290 m-auto flex-col " >
            <div>
                <h1 className='text-4xl' >Explore the <span className="bg-linear-to-r from-[#e048a7] to-[#ba43bf] bg-clip-text text-transparent font-bold " >Technologies</span> </h1>
                <p className="text-[#64748B]" >Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="flex">
                <div className='grid grid-cols-3 ' >
                    {
                        technologies.map(technology => {
                            const isSelected = selectedStacks.some((item) => item.id === technology.id);
                            return (<TechnologyCard
                                key={technology.id}
                                technology={technology}
                                isSelected={isSelected}
                                handleAddStack={handleAddStack}
                            ></TechnologyCard>)
                        })
                    }
                </div>
                <div className=' w-[30%] mx-0.5 mt-4.5 rounded-2xl p-1.5' >
                    <SelectedStacks
                        selectedStacks={selectedStacks}
                        handleRemoveStack={handleRemoveStack}
                        handleRemoveAll={handleRemoveAll}
                    ></SelectedStacks>
                </div>
            </div>

        </div>
    )
}