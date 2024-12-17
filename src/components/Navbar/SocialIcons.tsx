import { iconSize } from "@/Constants";
import Link from "next/link";
import React from 'react';
import { BiLogoGithub, BiLogoInstagramAlt, BiLogoLinkedin, BiSolidBrain } from "react-icons/bi";

const SocialIcons = () => {
    return (
        <>
            <Link className="relative flex items-center gap-2" href="https://github.com/barSolga" rel="noopener noreferrer" target="_blank">
                <BiLogoGithub size={iconSize} />

            </Link>
            <Link className="relative flex items-center gap-2" href="https://www.codewars.com/users/barSolga" rel="noopener noreferrer" target="_blank">
                <BiSolidBrain size={iconSize} />

            </Link>
            <Link className="relative flex items-center gap-2" href="https://www.linkedin.com/in/barsolga/" rel="noopener noreferrer" target="_blank">
                <BiLogoLinkedin size={iconSize} />

            </Link>
            <Link className="relative flex items-center gap-2" href="https://www.instagram.com/bartoszsolga/" rel="noopener noreferrer" target="_blank">
                <BiLogoInstagramAlt size={iconSize} />

            </Link>
        </>
    );
};

export default SocialIcons;