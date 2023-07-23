import { useToggle } from '@hyunwlee/hook';
import { Container } from '@hyunwlee/ui';
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import {
  Header,
  PersonalInfoForm,
  SelectPlanForm,
  PickAddOnsForm,
  FinishingUpForm,
  SubscriptionCompleteCard,
} from '@/components';
import { jumpToPlanForm, nextStep, previousStep } from '@/store/slices/stepSlice';
import { RootState } from '@/store/store';

interface IStepObj {
  step: number;
  description: string;
}

interface IPlanObj {
  id: number;
  name: string;
  price: number;
}

interface IAddOnsObj {
  id: number;
  main: string;
  sub: string;
  price: number;
}

const stepObjs = [
  { step: 1, description: 'your info' },
  { step: 2, description: 'select plan' },
  { step: 3, description: 'add-ons' },
  { step: 4, description: 'summary' },
];

const planObjs = [
  { id: 0, name: 'arcade', price: 9 },
  { id: 1, name: 'advanced', price: 12 },
  { id: 2, name: 'pro', price: 15 },
];

const addOnsObjs = [
  { id: 0, main: 'Online service', sub: 'Access to multiplayer games', price: 1 },
  { id: 1, main: 'Larger storage', sub: 'Extra 1TB of cloud save', price: 2 },
  { id: 2, main: 'Customizable profile', sub: 'Custom theme on your profile', price: 2 },
];

const MultiStepFormContainer = () => {
  const { visible: duration, toggle: onDurationToggle } = useToggle();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [plan, setPlan] = useState<number>(0);
  const [pickedAddOns, setPickedAddOns] = useState<number[]>([]);
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const onPlanChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlan(Number(e.target.value));
  };
  const onPickedAddOns = (id: number) => {
    setPickedAddOns(prevState => {
      if (prevState.includes(id)) {return prevState.filter(item => item !== id);}
      return [...prevState, id];
    });
  };
  const step = useSelector((state: RootState) => {
    return state.step;
  });
  const dispatch = useDispatch();
  const prev = () => dispatch(previousStep());
  const next = () => dispatch(nextStep());
  const jumpToPlan = () => dispatch(jumpToPlanForm());
  return (
    <StyledDiv>
      <StyledHeader stepObjs={stepObjs} step={step} />
      <StyledContainer>
        {step === 0 && (
          <PersonalInfoForm
            username={username}
            email={email}
            phone={phone}
            onNameChange={onNameChange}
            onEmailChange={onEmailChange}
            onPhoneChange={onPhoneChange}
            next={next}
          />
        )}
        {step === 1 && (
          <SelectPlanForm
            planObjs={planObjs}
            plan={plan}
            onChange={onPlanChange}
            duration={duration}
            onDurationToggle={onDurationToggle}
            prev={prev}
            next={next}
          />
        )}
        {step === 2 && (
          <PickAddOnsForm 
            addOnsObjs={addOnsObjs}
            pickedAddOns={pickedAddOns}
            onPickedAddOns={onPickedAddOns}
            prev={prev}
            next={next}
          />
        )}
        {step === 3 && (
          <FinishingUpForm
            planObjs={planObjs}
            addOnsObjs={addOnsObjs}
            plan={plan}
            duration={duration}
            pickedAddOns={pickedAddOns}
            jumpToPlan={jumpToPlan}
            prev={prev}
            next={next}
          />
        )}
        {step === 4 && <SubscriptionCompleteCard prev={prev}/>}
      </StyledContainer>
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
  border-radius: 18px;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  position: fixed;
  content: '';
  width: 90%;
  margin: 0 3px 3px 0;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0%);
  background: var(--theme-white);
  min-width: 343px;
  @media (min-width: 992px) {
    margin: 16px;
    position: absolute;
    content: '';
    top: 0;
    left: 290px;
    transform: none;
    width: 618px;
    height: 568px;
    display: flex;
    justify-content: center;
  }
`;

export { MultiStepFormContainer };
export type { IStepObj, IPlanObj, IAddOnsObj };
