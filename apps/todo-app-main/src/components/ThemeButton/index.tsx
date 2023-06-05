import Image from 'next/image';
import { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import buttonStyles from '../Button/style.module.scss';
import { Button } from '@front-end-mentor/ui';
import { Theme } from '@/types/theme';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: Theme;
}

const getAriaLabel = (theme: Theme) => {
  if (theme === Theme.LIGHT) {
    return 'Dark Theme';
  }
  return 'Light Theme';
};

const ThemeButton: React.FC<IProps> = ({ theme, className = '', ...restProps }) => {
  const combineClassName = `${styles.themeButton} ${className} ${buttonStyles.button}`;

  return (
    <Button className={combineClassName} aria-label={getAriaLabel(theme)} {...restProps}>
      {theme === Theme.LIGHT && (
        <Image className={styles.themeIcon} src="/icons/icon-sun.svg" alt="light mode" width={20} height={20} />
      )}
      {theme === Theme.DARK && (
        <Image className={styles.themeIcon} src="/icons/icon-moon.svg" alt="dark mode" width={20} height={20} />
      )}
    </Button>
  );
};

export default ThemeButton;
