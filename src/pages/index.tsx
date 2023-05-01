import type { NextPage } from "next";
import Input from "@/components/Input";
import Container from "@/components/Container";
import styles from "./style.module.scss";
import Header from "@/components/Header";
import TodoList from "@/components/TodoList";
import Tabs from "@/components/Tabs";

const Home: NextPage = () => {
  const todos = [
    { id: 1, completed: true, text: "one" },
    { id: 2, completed: false, text: "two" },
    { id: 3, completed: true, text: "three" },
    { id: 4, completed: false, text: "four" },
  ];
  const items = ["All", "Active", "Completed"];
  return (
    <>
      <main>
        <Header />
        <Container className={styles.inputWrapper}>
          <Input className={`${styles.leftMargin} ${styles.inputInner}`} />
        </Container>
        <TodoList
          todos={todos}
          onRemove={() => {}}
          onCheck={() => {}}
          onClear={() => {}}
          onCompleted={() => {}}
          onReorder={() => {}}
        />
      </main>
    </>
  );
};

export default Home;
