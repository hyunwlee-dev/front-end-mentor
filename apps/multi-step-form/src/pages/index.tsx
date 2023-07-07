import type { NextPage } from 'next';
import { styled } from 'styled-components';
import { MultiStepFormContainer } from '@/container';
import { A11yHidden, Button, Container } from '@front-end-mentor/ui';
import { useDispatch } from 'react-redux';
import { nextStep, previousStep } from '@/store/slices/stepSlice';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  return (
    <FlexContainer>
      <Main>
        <A11yHidden as="h1">Multi Step Form</A11yHidden>
        <StyledMultiStepFormContainer />
      </Main>
      <Footer>
        <ButtonWrapper>
          <PreviousButton onClick={() => dispatch(previousStep())}>Go Back</PreviousButton>
          <NextButton onClick={() => dispatch(nextStep())}>Next step</NextButton>
        </ButtonWrapper>
      </Footer>
    </FlexContainer>
  );
};

const FlexContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const StyledMultiStepFormContainer = styled(MultiStepFormContainer)`
  width: 100%;
  height: 100%;
`;

const Footer = styled.footer`
  height: 72px;
  flex: 0 0 auto;
  background: var(--theme-white);
`;

const ButtonWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const CommonButton = styled(Button)`
  border: 0;
  cursor: pointer;
  font: normal 500 14px / normal Ubuntu;
`;

const PreviousButton = styled(CommonButton)`
  background: transparent;
  color: var(--theme-cool-gray);
`;

const NextButton = styled(CommonButton)`
  width: 97px;
  height: 40px;
  border-radius: 4px;
  background: var(--theme-marine-blue);
  color: var(--theme-white);
`;

export default Home;
