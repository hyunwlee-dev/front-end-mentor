import { ButtonHTMLAttributes } from "react";
import styles from "./style.module.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<IProps> = ({ className, children, ...restProps }) => {
  const combineClassName = `${styles.button} ${className}`;
  return (
    <button className={combineClassName} type="button" {...restProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: "",
};

export default Button;
