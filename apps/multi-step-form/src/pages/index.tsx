import type { NextPage } from 'next';
import { styled } from 'styled-components';
import { MultiStepFormContainer } from '@/container';
import { A11yHidden } from '@front-end-mentor/ui';

const Home: NextPage = () => {
  return (
    <Main>
      <A11yHidden as="h1">Multi Step Form</A11yHidden>
      <StyledMultiStepFormContainer/>
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100vh;
`;

const StyledMultiStepFormContainer = styled(MultiStepFormContainer)`
  width: 100%;
  height: 100%;
`;

export default Home;
