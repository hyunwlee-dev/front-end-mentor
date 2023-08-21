import { HTMLAttributes } from 'react';
import Tabs from '@/components/Tabs';
import { TabList } from '@/types/tab';
import TodoList from '../TodoList';
import styles from './style.module.scss';

interface IProps extends HTMLAttributes<HTMLDivElement>, TodoList, TabList {}

const TodoTabList: React.FC<IProps> = ({
  todos,
  onCheck,
  onRemove,
  onClear,
  onCompleted,
  onReorder,
  tabs,
  activeTabIndex,
  onChangeTab,
  className = '',
  ...restProps
}) => {
  const combineClassName = `${styles.todoTabList} ${className}`;
  return (
    <div className={combineClassName} {...restProps}>
      <TodoList
        todos={todos}
        onCheck={onCheck}
        onRemove={onRemove}
        onClear={onClear}
        onCompleted={onCompleted}
        onReorder={onReorder}
      />
      <Tabs tabs={tabs} activeTabIndex={activeTabIndex} onChangeTab={onChangeTab} />
    </div>
  );
};

export default TodoTabList;
