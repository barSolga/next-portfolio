interface Props {
    id: string,
    label: string,
    placeholder: string,
}

const TextInput = ({ id, label, placeholder }: Props) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
                {label}
            </label>
            <textarea
                className="
                    appearance-none border w-full py-2 px-3 leading-tight 
                    focus:outline-none focus:shadow-outline
                    border-t-0 border-l-0 border-r-0 border-b-1 
                    bg-background-light dark:bg-background-dark
                    min-h-48 max-h-80
                "
                id={id}
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextInput;