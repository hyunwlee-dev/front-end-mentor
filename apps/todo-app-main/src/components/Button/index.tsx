import styles from "./style.module.scss";
import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<IProps> = ({
  className = "",
  children,
  ...restProps
}) => {
  const combineClassName = `${styles.button} ${className}`;
  return (
    <button className={combineClassName} type="button" {...restProps}>
      {children}
    </button>
  );
};

export default Button;
