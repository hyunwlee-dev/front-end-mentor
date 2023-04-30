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

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => {
    return state.theme;
  });

  useEffect(() => {
    let theme = Theme.LIGHT;
    const localTheme = localStorage.getItem("theme");
    const isDark = matchMedia("(prefers-color-scheme: dark)").matches;
    if (localTheme) theme = Theme.fromString(localTheme);
    else if (isDark) theme = Theme.DARK;
    if (theme === Theme.DARK) dispatch(initTheme(theme));
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (!htmlElement) return;
    if (theme === Theme.LIGHT) {
      htmlElement.classList.add("light");
      htmlElement.classList.remove("dark");
    } else {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    }
  }, [theme]);

  let obj = {
    id: 3,
    completed: true,
    text: "hi",
  };
  return (
    <>
      <main>
        <Logo />
        <ThemeButton theme={theme} onClick={() => dispatch(toggleTheme())} />
        <CheckBoxButton isChecked />
        <CheckBoxButton isChecked={false} />
        <Container className={styles.inputWrapper}>
          <Input className={`${styles.leftMargin} ${styles.inputInner}`} />
        </Container>
        <TodoItem todo={obj} handleCheck={() => {}} handleRemove={() => {}} />
      </main>
    </>
  );
};

export default Home;
