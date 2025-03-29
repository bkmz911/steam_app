import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    ...others
}) => {
    return (
        <button
            className={`w-[140px] xl:w-[260px] h-[36px] xl:h-[56px] bg-[#3c73dd] rounded-lg xl:rounded-2xl text-white uppercase text-[10px] xl:text-[16px] shadow-button font-semibold ${
                className || ""
            }`}
            {...others}
        >
            {children}
        </button>
    );
};
