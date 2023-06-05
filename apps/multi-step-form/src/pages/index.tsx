import type { NextPage } from 'next';
import { styled } from 'styled-components';
import { StyledHeader } from '@/components/Header';
import { MultiStepForm } from '@/Container/MultiStepFormContainer';

const Home: NextPage = () => {
  return (
    <Main>
      <StyledHeader />
      <StyledMultiStepFormContainer />
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100vh;
  border-radius: 15px;
  background: transparent;
  @media (min-width: 992px) {
    background: var(--theme-white);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 940px;
    height: 600px;
  }
`;

const StyledMultiStepFormContainer = styled(MultiStepForm)`
  position: fixed;
  content: '';
  width: 90%;
  height: auto;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0%);
  background: var(--theme-white);
  outline: 3px solid red;
  @media (min-width: 992px) {
    margin: 16px;
    position: absolute;
    content: '';
    top: 0;
    left: 290px;
    transform: none;
    width: 618px;
    height: 568px;
  }
`;

export default Home;
