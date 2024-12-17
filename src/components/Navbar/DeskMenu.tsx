import Link from "next/link";
import { NavLink } from "./Navbar";
import CollapseLink from "./CollapseLink";

interface Props {
    links: NavLink[];
}

const DeskMenu = ({ links }: Props) => {
    return (
        <menu className="hidden space-x-4 lg:flex items-center">
            {
                links.map(link => (
                    !link.subpages
                        ?
                        <Link key={link.id} href={link.href} className="hover:text-accent nav-link">{link.name}</Link>
                        :
                        <CollapseLink key={link.id} groupName={link.name} links={link.subpages} />
                ))
            }
        </menu>
    );
};

export default DeskMenu;