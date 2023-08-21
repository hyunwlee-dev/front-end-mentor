import { HTMLAttributes } from 'react';
import RemoveButton from '@/components/RemoveButton';
import CheckBoxButton from '../CheckBoxButton';
import styles from './style.module.scss';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  todo: Todo;
  onCheck: (id: number) => void;
  onRemove: (id: number) => void;
}
const TodoItem: React.FC<IProps> = ({ todo, onCheck, onRemove, className = '', ...restProps }) => {
  const { id, completed, text } = todo;
  const checkIsCompleted = (isCompleted: boolean) => {
    if (isCompleted) {
      return styles['completed'];
    }
    return '';
  };
  const combineClassName = `${styles.todoItem} ${checkIsCompleted(completed)} ${className}`;
  return (
    <div className={combineClassName} {...restProps}>
      <CheckBoxButton isChecked={completed} onClick={() => onCheck(id)} />
      <div className={styles.contents}>{text}</div>
      <RemoveButton onClick={() => onRemove(id)} />
    </div>
  );
};

export default TodoItem;
