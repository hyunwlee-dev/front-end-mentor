import type { NextPage } from 'next';
import Header from '@/components/Header';
import TodoContainer from '@/container/TodoContainer';
import { Button } from '@front-end-mentor/ui';

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
