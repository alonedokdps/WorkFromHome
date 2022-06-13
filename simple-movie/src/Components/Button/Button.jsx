import React from "react";

const Button = ({
  onClick,
  className,
  type = "button",
  bgColor = "primary",
  children,
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={`py-3 cursor-pointer px-6 rounded-lg capitalize w-full ${bgClassName} mt-auto ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
