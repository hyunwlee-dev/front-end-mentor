import Image from "next/image";
import styles from "./style.module.scss";
import Button from "@/components/Button";
import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const RemoveButton: React.FC<IProps> = ({ className = "", ...restProps }) => {
  const combineClassName = `${styles.removeButton} ${className}`;

  return (
    <Button className={combineClassName} aria-label="Remove" {...restProps}>
      <Image
        className={styles.removeIcon}
        src="/icons/icon-cross.svg"
        alt="remove button"
        width={12}
        height={12}
      />
    </Button>
  );
};

export default RemoveButton;
