import ThemeButton from "@/components/ThemeButton";
import { Theme } from "@/types/theme";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <ThemeButton theme={Theme.LIGHT} />
        <ThemeButton theme={Theme.DARK} />
      </main>
    </>
  );
};

export default Home;
