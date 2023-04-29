import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<IProps> = ({
  className = "",
  children,
  ...restProps
}) => {
  return (
    <button className={className} type="button" {...restProps}>
      {children}
    </button>
  );
};

export default Button;
