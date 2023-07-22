import Link from 'next/link';
import { HTMLAttributes } from 'react';
import styles from './style.module.scss';

interface IProps extends HTMLAttributes<HTMLAnchorElement> {}

const Logo: React.FC<IProps> = ({ className = '', children, ...restProps }) => {
  const combineClassName = `${styles.logo} ${className}`;
  return (
    <Link href="/" className={combineClassName} {...restProps}>
      <h1>TODO</h1>
    </Link>
  );
};

export default Logo;
