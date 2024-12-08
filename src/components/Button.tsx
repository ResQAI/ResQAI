import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  color?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children = "Button",
  color = "blue",
  onClick,
  className = "",
}) => {
  return (
    <div>
      <button
        className={`
          text-white 
          font-medium 
          bg-${color}-600 
          hover:bg-${color}-700 
          focus:ring-2 
          focus:ring-${color}-800 
          rounded-lg 
          text-sm 
          px-5 
          py-2.5 
          text-center
          ${className}
        `}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
