import Image from 'next/image';
import { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import buttonStyles from '../Button/style.module.scss';
import { Button } from '@hyunwlee/ui';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const RemoveButton: React.FC<IProps> = ({ className = '', ...restProps }) => {
  const combineClassName = `${styles.removeButton} ${className} ${buttonStyles.button}`;
  return (
    <Button className={combineClassName} aria-label="Remove" {...restProps}>
      <Image className={styles.removeIcon} src="/icons/icon-cross.svg" alt="remove button" width={12} height={12} />
    </Button>
  );
};

export default RemoveButton;
