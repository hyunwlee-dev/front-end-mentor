import { HTMLAttributes } from 'react';
import { Button } from '@front-end-mentor/ui';
import styles from './style.module.scss';
import buttonStyles from '../Button/style.module.scss';

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
  const combineClassName = `${styles.checkBoxButton} ${checkIsChecked()} ${className} ${buttonStyles.button}`;
  return (
    <Button className={combineClassName} {...restProps}>
      {children}
    </Button>
  );
};

export default CheckBoxButton;
