import { HTMLAttributes } from "react";
import Container from "@/components/Container";
import styles from "./style.module.scss";
import CheckBoxButton from "../CheckBoxButton";
import RemoveButton from "@/components/RemoveButton";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  todo: Todo;
  handleCheck: (id: number) => void;
  handleRemove: (id: number) => void;
}
const TodoItem: React.FC<IProps> = ({
  todo,
  handleCheck,
  handleRemove,
  className = "",
  ...restProps
}) => {
  const { id, completed, text } = todo;
  const checkIsCompleted = (isCompleted: boolean) => {
    if (isCompleted) return styles["completed"];
    return "";
  };
  const combineClassName = `${styles.todoItem} ${checkIsCompleted(
    completed
  )} ${className}`;
  return (
    <Container className={combineClassName} {...restProps}>
      <CheckBoxButton isChecked={completed} onClick={() => handleCheck(id)} />
      <div className={styles.contents}>{text}</div>
      <RemoveButton onClick={() => handleRemove(id)} />
    </Container>
  );
};

export default TodoItem;
