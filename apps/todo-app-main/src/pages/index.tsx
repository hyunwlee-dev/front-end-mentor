import type { NextPage } from "next";
import Input from "@/components/Input";
import Container from "@/components/Container";
import styles from "./style.module.scss";
import Header from "@/components/Header";
import TodoContainer from "@/container/TodoContainer";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Header />
        <TodoContainer />
      </main>
    </>
  );
};

export default Home;
