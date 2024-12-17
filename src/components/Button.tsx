import { ReactNode } from "react";

interface Props {
    text: string;
    icon?: ReactNode;
    switchIcon?: boolean;
    onClick?: () => void;
    className?: string;
}

const Button = ({ text, icon, switchIcon, onClick, className }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`text-sm xl:text-lg outline-none flex items-center gap-3 px-6 py-2 rounded-full bg-primary-default text-white hover:text-textColor-light hover:bg-primary-light transition-all ${className}`}
        >
            {switchIcon ? icon : ""} {text} {!switchIcon ? icon : ""}
        </button>
    );
};

export default Button;