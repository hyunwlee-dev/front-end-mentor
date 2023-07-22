import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  completed: boolean;
  text: string;
}

interface ITodoList extends Array<Todo> {}

interface IAddTodoPayload {
  text: string;
  completed: boolean;
}

interface IRemoveTodoPayload {
  id: number;
}

interface IUpdateTodoPayload {
  id: number;
  text: string;
  completed: boolean;
}

const todoSlice = createSlice({
  name: "todo",
  initialState: [] as ITodoList,
  reducers: {
    initTodoList: (_, action) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<IAddTodoPayload>) => {
      const { text, completed } = action.payload;
      const updatedTodos = [
        ...state,
        {
          id: state.length + 1,
          text,
          completed,
        },
      ];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    },
    removeTodo: (state, action: PayloadAction<IRemoveTodoPayload>) => {
      const { id } = action.payload;
      const updatedTodos = state.filter(({ id: _id }) => _id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    },
    updateTodo: (state, action: PayloadAction<IUpdateTodoPayload>) => {
      const { id, text, completed } = action.payload;
      const updatedTodos = state.map((todo) => {
        if (todo.id === id) {
          return {
            id,
            text,
            completed,
          };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    },
    updateTodoList: (state, action: PayloadAction<ITodoList>) => {
      const updatedTodos = action.payload;
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    },
    clearTodo: () => {
      localStorage.setItem("todos", JSON.stringify([]));
      return [];
    },
  },
});

export default todoSlice;
export const {
  initTodoList,
  addTodo,
  removeTodo,
  updateTodo,
  updateTodoList,
  clearTodo,
} = todoSlice.actions;
