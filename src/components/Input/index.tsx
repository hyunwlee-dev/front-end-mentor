import { InputHTMLAttributes } from "react";
import styles from "./style.module.scss";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IProps> = ({ className, ...restProps }) => {
  const combineClassName = `${className} ${styles.input}`;
  return <input className={combineClassName} {...restProps} />;
};

export default Input;
