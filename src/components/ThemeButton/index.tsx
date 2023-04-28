import { Theme } from "@/types/theme";
import styles from "./style.module.scss";
import { ButtonHTMLAttributes } from "react";
import Image from "next/image";
import Button from "../Button";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: Theme;
}

const getAriaLabel = (theme: Theme) => {
  if (theme === Theme.LIGHT) return "Dark Theme";
  return "Light Theme";
};

const ThemeButton: React.FC<IProps> = ({ theme, className, ...restProps }) => {
  const combineClassName = `${styles.themeButton} ${className}`;

  return (
    <Button
      className={combineClassName}
      aria-label={getAriaLabel(theme)}
      {...restProps}
    >
      {theme === Theme.LIGHT && (
        <Image
          src="/icons/icon-sun.svg"
          alt="light mode"
          width={26}
          height={26}
        />
      )}
      {theme === Theme.DARK && (
        <Image
          src="/icons/icon-moon.svg"
          alt="dark mode"
          width={26}
          height={26}
        />
      )}
    </Button>
  );
};

ThemeButton.defaultProps = {
  className: "",
};

export default ThemeButton;
