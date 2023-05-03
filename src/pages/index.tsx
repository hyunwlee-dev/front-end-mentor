import type { NextPage } from "next";
import Input from "@/components/Input";
import Container from "@/components/Container";
import styles from "./style.module.scss";
import Header from "@/components/Header";

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
      </main>
    </>
  );
};

export default Home;
