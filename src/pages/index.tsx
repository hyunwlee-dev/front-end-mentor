import ThemeButton from "@/components/ThemeButton";
import { Theme } from "@/types/theme";
import type { NextPage } from "next";
import { RootState } from "@/store/store";
import { initTheme, toggleTheme } from "@/store/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Logo from "@/components/Logo";
import CheckBoxButton from "@/components/CheckBoxButton";
import Input from "@/components/Input";
import Container from "@/components/Container";
import styles from "./style.module.scss";
import TodoItem from "@/components/TodoItem";
import Header from "@/components/Header";

const Home: NextPage = () => {
  let obj = {
    id: 3,
    completed: true,
    text: "hi",
  };
  return (
    <>
      <main>
        <Header />
        <Container className={styles.inputWrapper}>
          <Input className={`${styles.leftMargin} ${styles.inputInner}`} />
        </Container>
        <TodoItem todo={obj} handleCheck={() => {}} handleRemove={() => {}} />
      </main>
    </>
  );
};

export default Home;
