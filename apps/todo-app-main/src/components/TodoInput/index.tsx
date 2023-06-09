import { HTMLAttributes, ReactNode } from 'react';
import { Input } from '@front-end-mentor/ui';
import styles from './style.module.scss';
import inputStyles from '../Input/style.module.scss';

interface Iprops extends HTMLAttributes<HTMLDivElement> {
  leftSide?: ReactNode;
  value: string;
}

const TodoInput: React.FC<Iprops> = ({ leftSide, value, className = '', ...restProps }) => {
  const checkHasLeftSide = () => {
    if (leftSide) {
      return styles['leftSide'];
    }
    return '';
  };
  const combineClassName = `${styles.todoInput} ${checkHasLeftSide()} ${className}`;
  return (
    <div className={combineClassName}>
      {leftSide}
      <Input className={`${styles.input} ${inputStyles.input}`} value={value} {...restProps} />
    </div>
  );
};

export default TodoInput;
