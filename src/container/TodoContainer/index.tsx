import {
  ChangeEvent,
  HTMLAttributes,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import TodoTabList from "@/components/TodoTabList";
import { RootState } from "@/store/store";
import { addTodo, clearTodo, updateTodoList } from "@/store/slices/todoSlice";
import { removeTodo } from "@/store/slices/todoSlice";
import { updateTodo } from "@/store/slices/todoSlice";
import TodoInput from "@/components/TodoInput";
import CheckBoxButton from "@/components/CheckBoxButton";
import Container from "@/components/Container";
import { TodoTabs } from "@/types/tab";
import { useRouter } from "next/router";
import Caption from "@/components/Caption";

interface IProps extends HTMLAttributes<HTMLDivElement> {}
const TodoContainer: React.FC<IProps> = ({ ...restProps }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => {
    return state.todo;
  });
  const [todoText, setTodoText] = useState<string>("");
  const [isTodoCompleted, setIsTodoCompleted] = useState<boolean>(false);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const router = useRouter();
  const { tab } = router.query;

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const onCheck = useCallback(
    (id: number) => {
      const todo = todos.find(({ id: _id }) => _id === id);
      if (!todo) return;
      dispatch(
        updateTodo({
          ...todo,
          id,
          completed: !todo.completed,
        })
      );
    },
    [todos]
  );

  const onAdd = useCallback((completed: boolean, text: string) => {
    if (!text) return;
    dispatch(
      addTodo({
        text,
        completed,
      })
    );
  }, []);

  const onKeyUp = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const { key } = e;
      if (key !== "Enter") return;
      onAdd(isTodoCompleted, todoText);
      setTodoText("");
    },
    [todoText, isTodoCompleted]
  );

  const onToggleTodoCompoleted = useCallback(() => {
    setIsTodoCompleted(!isTodoCompleted);
  }, [isTodoCompleted]);

  const onRemove = useCallback((id: number) => {
    dispatch(
      removeTodo({
        id,
      })
    );
  }, []);

  const onClear = useCallback(() => {
    dispatch(clearTodo());
  }, []);

  const onCompleted = useCallback(() => {
    const updatedTodos = todos.map((todo) => {
      return {
        ...todo,
        completed: true,
      };
    });
    dispatch(updateTodoList(updatedTodos));
  }, []);

  const filteredTodos = useMemo(() => {
    switch (activeTabIndex) {
      case TodoTabs.ACTIVE:
        return todos.filter(({ completed }) => !completed);
      case TodoTabs.COMPLETED:
        return todos.filter(({ completed }) => completed);
      default:
        return todos;
    }
  }, [todos, activeTabIndex]);

  const reorder = (todos: object[], startIndex: number, endIndex: number) => {
    const result = Array.from(todos);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onReorder = useCallback(
    (startIndex: number, endIndex: number) => {
      const originalStartIndex = todos.indexOf(filteredTodos[startIndex]);
      const originalEndIndex = todos.indexOf(filteredTodos[endIndex]);
      const reorderedTodos = reorder(
        todos,
        originalStartIndex,
        originalEndIndex
      );
      dispatch(updateTodoList(reorderedTodos));
    },
    [todos]
  );

  const onChangeTab = (index: number) => {
    switch (index) {
      case TodoTabs.ACTIVE:
        router.push(
          {
            query: {
              tab: TodoTabs[TodoTabs.ACTIVE].toLowerCase(),
            },
          },
          undefined,
          {
            shallow: true,
          }
        );
        return;
      case TodoTabs.COMPLETED:
        router.push(
          {
            query: {
              tab: TodoTabs[TodoTabs.COMPLETED].toLowerCase(),
            },
          },
          undefined,
          {
            shallow: true,
          }
        );
        return;
      default:
        router.push(
          {
            query: {},
          },
          undefined,
          {
            shallow: true,
          }
        );
        return;
    }
  };

  useEffect(() => {
    if (!tab) {
      setActiveTabIndex(TodoTabs.ALL);
      return;
    }
    switch (tab) {
      case TodoTabs[TodoTabs.ACTIVE].toLowerCase():
        setActiveTabIndex(TodoTabs.ACTIVE);
        return;
      case TodoTabs[TodoTabs.COMPLETED].toLowerCase():
        setActiveTabIndex(TodoTabs.COMPLETED);
        return;
      default:
        setActiveTabIndex(TodoTabs.ALL);
        return;
    }
  }, [tab]);

  return (
    <Container className={styles.todoContainer} {...restProps}>
      <TodoInput
        leftSide={
          <CheckBoxButton
            isChecked={isTodoCompleted}
            onClick={onToggleTodoCompoleted}
          />
        }
        value={todoText}
        onKeyUp={onKeyUp}
        onChange={onChangeInput}
      />
      <TodoTabList
        todos={filteredTodos}
        onCheck={onCheck}
        onRemove={onRemove}
        onClear={onClear}
        onCompleted={onCompleted}
        onReorder={onReorder}
        tabs={["All", "Active", "Completed"]}
        activeTabIndex={activeTabIndex}
        onChangeTab={onChangeTab}
      />
      <Caption>Drag and drop to reorder list</Caption>
    </Container>
  );
};

export default TodoContainer;
