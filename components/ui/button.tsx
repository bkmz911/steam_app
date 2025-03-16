interface Props {
    text: string;
}

export const Button: React.FC<Props> = ({ text }) => {
    return (
        <button
            id="button"
            className="w-[140px] xl:w-[260px] h-[36px] xl:h-[56px] bg-[#3c73dd] rounded-lg xl:rounded-2xl text-white uppercase text-[10px] xl:text-[16px] shadow-button font-semibold"
        >
            {text}
        </button>
    );
};
