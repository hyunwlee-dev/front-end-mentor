import { HTMLAttributes } from 'react';
import styles from './style.module.scss';

interface IProps extends HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

const Container: React.FC<IProps> = ({ as: Component = 'div', className = '', children, ...restProps }) => {
  const combineClassNames = `${styles.container} ${className}`.trim();

  return (
    <Component className={combineClassNames} {...restProps}>
      {children}
    </Component>
  );
};

export default Container;
