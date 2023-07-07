import { Button, Container } from '@front-end-mentor/ui';
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
import { nextStep } from '@/store/slices/stepSlice';
import { RootState } from '@/store/store';
import { ChangeEvent, useState } from 'react';
import { Footer } from '@/components/Footer';

interface IStepObj {
  step: number;
  description: string;
}

const stepObjs = [
  { step: 1, description: 'your info' },
  { step: 2, description: 'select plan' },
  { step: 3, description: 'add-ons' },
  { step: 4, description: 'summary' },
];

const MultiStepFormContainer = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const step = useSelector((state: RootState) => {
    return state.step;
  });
  const dispatch = useDispatch();
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
          />
        )}
        {step === 1 && <SelectPlanForm />}
        {step === 2 && <PickAddOnsForm />}
        {step === 3 && <FinishingUpForm />}
        {step === 4 && <SubscriptionCompleteCard />}
        {/*<StyledFooter>
        <NextButton onClick={() => dispatch(nextStep())}>테스트 버튼</NextButton>
      </StyledFooter>
      */}
      </StyledContainer>
    </StyledDiv>
  );
};

const StyledFooter = styled(Footer)`
  outline: 3px solid blue;
`;
const NextButton = styled(Button)``;

const Spacer = styled.div`
  margin: 0 12px 12px 0;
  position: relative;
  background: yellow;
`;

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

export { MultiStepFormContainer };
export type { IStepObj };
