import React from "react";
import "./style.scss";


interface ButtonProps {
  text: string;
  icon?: string;
  onClick?: () => void;
  variant?: "filled" | "outlined";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  variant = "filled",
  className = "",
  type = "button",
  disabled = false,
  style,
}) => {
  return (
    <button
      type={type}
      className={`button ${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {icon && <img src={icon} alt="icon" />}
      {text}
    </button>
  );
};

export default Button;
