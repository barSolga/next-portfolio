"use client";

import { iconSize } from "@/Constants";
import { ReactNode, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

interface Props {
    head: ReactNode;
    body: ReactNode;
}

const Collapser = ({ head, body }: Props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="w-full rounded-2xl max-w-3xl">
            <div onClick={() => setOpen(!isOpen)} className="w-full flex p-2 font-medium justify-between items-center cursor-pointer">
                {head}
                {
                    !isOpen ? <BiPlus size={iconSize} /> : <BiMinus size={iconSize} />
                }

            </div>
            <div className={`flex flex-col gap-4 transition-all rounded-xl px-6 ${isOpen ? "py-6" : "h-0"} border border-gray-200 dark:border-gray-700 overflow-hidden transition-all`}>
                {body}
            </div>
        </div>
    );
};

export default Collapser;