import { NavLink } from "./Navbar";
import Link from "next/link";
import CollapseLink from "./CollapseLink";
import SocialIcons from "./SocialIcons";

interface Props {
    isOpen: boolean;
    links: NavLink[];
    onClickFn: () => void;
}

const MobileMenu = ({ isOpen, links, onClickFn }: Props) => {
    return (
        <menu className={`w-2/3 fixed h-screen left-0 top-0 drop-shadow-xl transition-all ${!isOpen ? "-translate-x-full" : ""} cursor-pointer lg:hidden bg-background-lightDimmed dark:bg-background-darkDimmed`}>
            <div className="h-full flex flex-col justify-between p-6">
                <div className="flex flex-col w-full h-auto space-y-10">
                    <div className="flex flex-col space-y-3">
                        {
                            links.map(link => (
                                !link.subpages
                                    ?
                                    <Link key={link.id} href={link.href} className="hover:text-accent nav-link" onClick={onClickFn}>{link.name}</Link>
                                    :
                                    <CollapseLink key={link.id} groupName={link.name} links={link.subpages} onClickFn={onClickFn} />
                            ))
                        }
                    </div>

                    {/* <div className="lg:hidden w-full">
                        <Switch />
                    </div> */}

                    <div className="flex gap-2">
                        <SocialIcons />
                    </div>

                </div>
                <p className="font-normal text-sm">COPYRIGHT@{new Date().getFullYear()} <br /> Bartosz Sołga</p>
            </div>
        </menu>
    );
};

export default MobileMenu;