import { styled } from 'styled-components';
import { Header } from '@/components/Header';
import { Container } from '@front-end-mentor/ui';

const MultiStepFormContainer = () => {
  return (
    <StyledDiv>
      <StyledHeader />
      <StyledContainer />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
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

const StyledHeader = styled(Header)`
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  width: 100;
  height: 172px;
  background: var(--theme-background-image) no-repeat;
  background-size: cover;
  @media (min-width: 992px) {
    margin: 16px;
    width: 274px;
    height: 568px;
  }
`;

const StyledContainer = styled(Container)`
  outline: 3px solid red;
  position: fixed;
  content: '';
  width: 90%;
  // height: 300px;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0%);
  background: var(--theme-white);
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

export {MultiStepFormContainer};
