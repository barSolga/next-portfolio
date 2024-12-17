import { ReactNode } from "react";

interface Props {
    icon: ReactNode;
    title: string;
    desc: string;
}

const HeroCard = ({ icon, title, desc }: Props) => {
    return (
        <div className="h-full w-full bg-opacity-35 backdrop-blur-md bg-background-light dark:bg-background-dark dark:bg-opacity-35 dark:backdrop-blur-md p-6 space-y-5 hero-card">
            {icon}
            <div>
                <h3 className="lg:text-2xl font-black">{title}</h3>
                <p className="text-textColor-lightDimmed dark:text-textColor-darkDimmed max-w-2xl text-base">{desc}</p>
            </div>
        </div>
    );
};

export default HeroCard;