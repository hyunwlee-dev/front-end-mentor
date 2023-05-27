import { HTMLAttributes } from 'react';
import Button from '../Button';
import styles from './style.module.scss';

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  isChecked?: boolean;
}

const CheckBoxButton: React.FC<IProps> = ({ isChecked, className = '', children, ...restProps }) => {
  const checkIsChecked = () => {
    if (isChecked) {
      return styles['checked'];
    }
    return '';
  };
  const combineClassName = `${styles.checkBoxButton} ${checkIsChecked()} ${className}`;
  return (
    <Button className={combineClassName} {...restProps}>
      {children}
    </Button>
  );
};

export default CheckBoxButton;
