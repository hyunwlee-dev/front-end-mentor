import { Container } from '@front-end-mentor/ui';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { Header, 
         PersonalInfoForm,
         SelectPlanForm,
         PickAddOnsForm,
         FinishingUpForm,
         SubscriptionCompleteCard
} from '@/components';
import { RootState } from '@/store/store';
import { nextStep } from '@/store/slices/stepSlice';

interface IStepObj {
  step: number;
  description: string;
}

const stepObjs = [
  {step: 1, description: 'your info'},
  {step: 2, description: 'select plan'},
  {step: 3, description: 'add-ons'},
  {step: 4, description: 'summary'}
];


const MultiStepFormContainer = () => {
  const step = useSelector((state: RootState) => {
    return state.step;
  });
  const dispatch = useDispatch();
  return (
    <StyledDiv>
      <StyledHeader stepObjs={stepObjs} step={step}/>
      {step === 0 && <PersonalInfoForm />}
      {step === 1 && <SelectPlanForm />}
      {step === 2 && <PickAddOnsForm />}
      {step === 3 && <FinishingUpForm />}
      {step === 4 && <SubscriptionCompleteCard />}
      <button onClick={() => dispatch(nextStep())}>테스트 버튼</button>
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
export type {IStepObj};
