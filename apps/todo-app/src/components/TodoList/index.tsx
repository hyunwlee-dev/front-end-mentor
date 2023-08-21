import dynamic from 'next/dynamic';
import { HTMLAttributes } from 'react';
import { DragDropContextProps, DraggableProps, DroppableProps, DropResult } from 'react-beautiful-dnd';

import Button from '../Button';
import TodoItem from '../TodoItem';
import styles from './style.module.scss';

/* eslint-disable  @typescript-eslint/no-explicit-any */
const DragDropContext = dynamic<DragDropContextProps>(
  () =>
    import('react-beautiful-dnd').then(mod => {
      return mod.DragDropContext;
    }) as any,
  { ssr: false }
);
const Droppable = dynamic<DroppableProps>(
  () =>
    import('react-beautiful-dnd').then(mod => {
      return mod.Droppable;
    }) as any,
  { ssr: false }
);

const Draggable = dynamic<DraggableProps>(
  () =>
    import('react-beautiful-dnd').then(mod => {
      return mod.Draggable;
    }) as any,
  { ssr: false }
);

interface IProps extends HTMLAttributes<HTMLDivElement>, TodoList {}

const TodoList: React.FC<IProps> = ({
  todos,
  onCheck,
  onRemove,
  onClear,
  onCompleted,
  onReorder,
  className = '',
  ...restProps
}) => {
  const combineClassName = `${styles.todoListContainer} ${className}`;
  const onDragEnd = (result: DropResult) => {
    onReorder(result.source.index, result.destination?.index);
  };
  const checkActiveItemCount = () => {
    const count = todos.filter(({ completed }) => !completed).length;
    if (count === 0) {
      return `No left`;
    }
    if (count === 1) {
      return `1 item left`;
    }
    return `${count} items left`;
  };

  return (
    <div className={combineClassName} {...restProps}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={'todo-container'}>
          {provided => (
            <div className={styles.todoItemContainer} ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo, index) => (
                <Draggable key={`${todo.id}`} draggableId={`${todo.id}`} index={index}>
                  {provided => (
                    <li
                      className={styles.todoItem}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <TodoItem todo={todo} onCheck={onCheck} onRemove={onRemove} />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className={styles.footer}>
        <span className={styles.activeItemCount}>{checkActiveItemCount()}</span>
        <div className={styles.buttonContainer}>
          <Button onClick={onClear}>Clear</Button>
          <Button onClick={onCompleted}>Completed</Button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
