/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import logoLight from "@/../public/logo-light.svg";
import logoDark from "@/../public/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";
import DeskMenu from "./DeskMenu";
import { links } from "@/app/data";

export interface NavLink {
    id: string,
    name: string,
    href: string,
    subpages?: NavLink[];
};

const NavBar = () => {
    const
        [theme, setTheme] = useState<string>(),
        [isOpen, setIsOpen] = useState(false),
        nav = useRef<HTMLDivElement | null>(null),
        onScroll = () => {
            if (!nav.current)
                return;
            else if (window.scrollY > 400) {
                nav?.current.classList.add("py-4", "fixed", "bg-background-light", "dark:bg-background-dark", "shadow-lg");
                nav?.current.classList.remove("py-8", "absolute");
            }
            else {
                nav?.current.classList.remove("py-4", "fixed", "bg-background-light", "dark:bg-background-dark", "shadow-lg");
                nav?.current.classList.add("py-8", "absolute");
            }

        },
        handleTheme = (event: any) => {
            if (event.matches) {
                localStorage.setItem("theme", "dark");
                setTheme("dark");
            }
            else {
                localStorage.setItem("theme", "light");
                setTheme("light");
            }
        };

    useEffect(() => {
        setTheme(localStorage.getItem("theme") as string);

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleTheme);

        if (!nav) return;
        else
            window.addEventListener("scroll", onScroll);

        return () => {
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleTheme);
            window.removeEventListener("scroll", onScroll);
        };
    }, [nav, theme]);

    return (
        <div
            ref={nav}
            className="fixed left-0 top-0 w-full z-top px-6 py-8 transition-all duration-300">
            <nav className="relative container mx-auto">

                <div className="flex items-center justify-between" >

                    <Link href="/">
                        {
                            theme !== "light"
                                ? <Image src={logoDark} alt="bsolga.dev" />
                                : <Image src={logoLight} alt="bsolga.dev" />
                        }


                    </Link>

                    <DeskMenu links={links} />

                    <MobileMenu isOpen={isOpen} links={links} onClickFn={() => setIsOpen(false)} />

                    {/* <div className=" hidden lg:block scale-75">
                        <Switch />
                    </div> */}

                    <div className="block lg:hidden">
                        <Hamburger onToggle={() => setIsOpen(!isOpen)} toggled={isOpen} />
                    </div>

                </div>

            </nav>
        </div>
    );
};

export default NavBar;