import Container from "../Container";
import { HTMLAttributes } from "react";
import styles from "./style.module.scss";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import TodoItem from "../TodoItem";
import Button from "../Button";

interface IProps extends HTMLAttributes<HTMLDivElement>, TodoList {}

const TodoList: React.FC<IProps> = ({
  todos,
  onCheck,
  onRemove,
  onClear,
  onCompleted,
  onReorder,
  className = "",
  ...restProps
}) => {
  const combineClassName = `${styles.todoListContainer} ${className}`;
  const onDragEnd = (result: DropResult) => {
    onReorder(result.source.index, result.destination?.index);
  };
  const checkActiveItemCount = () => {
    const count = todos.filter(({ completed }) => !completed).length;
    if (count === 0) return `No left`;
    if (count === 1) return `1 item left`;
    return `${count} items left`;
  };

  return (
    <Container className={combineClassName} {...restProps}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={"todo-container"}>
          {(provided) => (
            <div
              className={styles.todoItemContainer}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {todos.map((todo, index) => (
                <Draggable
                  key={`${todo.id}`}
                  draggableId={`${todo.id}`}
                  index={index}
                >
                  {(provided) => (
                    <li
                      className={styles.todoItem}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <TodoItem
                        todo={todo}
                        onCheck={onCheck}
                        onRemove={onRemove}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
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
    </Container>
  );
};

export default TodoList;
