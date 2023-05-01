import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, completed: false, text: "print hello world!" },
    { id: 2, completed: false, text: "play the piano" },
  ],
  reducers: {
    addTodo: (state, action) => {
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
    removeTodo: (state, action) => {
      const { id } = action.payload;
      const updatedTodos = state.filter(({ id: _id }) => _id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    },
    updateTodo: (state, action) => {
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
    updateTodoList: (state, action) => {
      const todos = action.payload;
      const updatedTodos = [...state, todos];
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
export const { addTodo, removeTodo, updateTodo, updateTodoList, clearTodo } =
  todoSlice.actions;
