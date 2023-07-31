import { HTMLAttributes } from 'react';
import Container from '../Container';
import Logo from '../Logo';
import styles from './style.module.scss';
import ThemeButtonContainer from '@/container/ThemeContainer';

interface IProps extends HTMLAttributes<HTMLHeadElement> {}
const Header: React.FC<IProps> = ({ className = '', ...restProps }) => {
  const combineClassName = `${styles.header} ${className}`;
  return (
    <header className={combineClassName} {...restProps}>
      <Container className={styles.container}>
        <Logo />
        <ThemeButtonContainer />
      </Container>
    </header>
  );
};

export default Header;
