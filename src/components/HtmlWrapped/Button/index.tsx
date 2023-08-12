import IButton from 'interfaces/IButton';

const Button = ({
  text,
  onClick,
  type = 'button',
  className = 'btn-primary',
}: IButton) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
