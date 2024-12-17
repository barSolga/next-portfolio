import { useEffect, useRef, useState } from "react";
import { NavLink } from "./Navbar";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";
import { iconSize } from "@/Constants";

interface Props {
    groupName: string;
    links: NavLink[];
    onClickFn?: () => void;
}

const CollapseLink = ({ groupName, links, onClickFn }: Props) => {
    const
        [isCollapsed, setIsCollapsed] = useState(false),
        collapse = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isCollapsed) return;

        function handleClick(event: Event) {
            if (collapse.current && !collapse.current.contains(event.target as Node)) {
                setIsCollapsed(false);
            }
        }

        window.addEventListener("click", handleClick);

        return () => window.removeEventListener("click", handleClick);
    }, [isCollapsed]);

    return (
        <div ref={collapse}>
            <div className="flex items-center justify-between cursor-pointer">
                <Link onClick={onClickFn} className="hover:text-accent nav-link" href={`/#${groupName.split(" ").map(e => e.toLocaleLowerCase()).join("-")}`}>{groupName}</Link> <BiChevronDown size={iconSize} onClick={() => setIsCollapsed(!isCollapsed)} />
            </div>
            <ul className={`${isCollapsed ? "" : "hidden"} flex flex-col py-2 pl-5 space-y-3 mt-4 lg:bg-white dark:lg:bg-background-dark  lg:text-textColor rounded-xl lg:drop-shadow-lg lg:p-5 lg:absolute z-[top]`}>
                {
                    links.map(link => (
                        <Link key={link.id} href={link.href} className="hover:text-accent nav-link" onClick={onClickFn}>{link.name}</Link>
                    ))
                }
            </ul>
        </div>
    );
};

export default CollapseLink;