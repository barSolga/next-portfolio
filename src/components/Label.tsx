interface Props {
    name?: string;
    size?: {
        y: number;
        x: number;
    };
    color?: {
        text: string;
        background: string;
    };
}
const Label = ({ name, size, color }: Props) => {

    if (!size)
        size = { x: 6, y: 2 };

    return (
        <div
            style={{ color: color?.text, backgroundColor: color?.background }}
            className={`px-${size.x} py-${size.y} rounded-xl bg-primary-default text-textColor-dark text-center font-semibold`}>
            {name}
        </div>
    );
};

export default Label;