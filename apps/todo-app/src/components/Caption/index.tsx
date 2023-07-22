import { HTMLAttributes } from 'react';
import styles from './style.module.scss';

interface IProps extends HTMLAttributes<HTMLDivElement> {}
const Caption: React.FC<IProps> = ({ className = '', children, ...restProps }) => {
  const combineClassName = `${styles.caption} ${className}`;
  return (
    <div className={combineClassName} {...restProps}>
      {children}
    </div>
  );
};

export default Caption;
