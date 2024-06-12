import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  style?: string;
};

const Button = ({ children, style }: ButtonProps) => {
  return (
    <div
      className={twMerge(
        `p-2 px-4 rounded-lg shadow-sm text-white flex gap-2 hover:scale-105 active:scale-95
        transition-all ease-out duration-300`,
        style
      )}
    >
      {children}
    </div>
  );
};

export default Button;
