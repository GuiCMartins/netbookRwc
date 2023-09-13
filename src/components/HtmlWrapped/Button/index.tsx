import IButton from "interfaces/IButton";

const Button = ({
  text,
  type = "button",
  className = "btn-primary",
  onClick,
}: IButton) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
