import Image from "next/image";
import { Theme } from "@/types/theme";
import Button from "@/components/Button";
import styles from "./style.module.scss";
import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: Theme;
}

const getAriaLabel = (theme: Theme) => {
  if (theme === Theme.LIGHT) return "Dark Theme";
  return "Light Theme";
};

const ThemeButton: React.FC<IProps> = ({
  theme,
  className = "",
  ...restProps
}) => {
  const combineClassName = `${styles.themeButton} ${className}`;

  return (
    <Button
      className={combineClassName}
      aria-label={getAriaLabel(theme)}
      {...restProps}
    >
      {theme === Theme.LIGHT && (
        <Image
          className={styles.themeIcon}
          src="/icons/icon-sun.svg"
          alt="light mode"
          width={20}
          height={20}
        />
      )}
      {theme === Theme.DARK && (
        <Image
          className={styles.themeIcon}
          src="/icons/icon-moon.svg"
          alt="dark mode"
          width={20}
          height={20}
        />
      )}
    </Button>
  );
};

export default ThemeButton;
