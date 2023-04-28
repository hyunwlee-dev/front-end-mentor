import { HTMLAttributes } from "react";
import styles from "./style.module.scss";

interface IProps extends HTMLAttributes<HTMLElement> {
  as: React.ElementType;
}

const Container: React.FC<IProps> = ({
  as: Component,
  className,
  children,
  ...restProps
}) => {
  const combineClassNames = `${styles.container} ${className}`.trim();

  return (
    <Component className={combineClassNames} {...restProps}>
      {children}
    </Component>
  );
};

Container.defaultProps = {
  as: "div",
  className: "",
};

export default Container;
