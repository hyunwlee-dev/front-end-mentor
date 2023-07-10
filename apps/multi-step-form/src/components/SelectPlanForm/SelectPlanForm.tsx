import { A11yHidden, Input, Label, Button, Container } from '@front-end-mentor/ui';
import { HTMLAttributes } from 'react';
import { styled } from 'styled-components';
import * as React from 'react';
import { IPlanObjs } from '@/container/MultiStepFormContainer';
import Image from 'next/image';
import { useId, ChangeEvent } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  planObjs: IPlanObjs[];
  plan: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  duration: boolean;
  onDurationToggle: () => void;
}

const SelectPlanForm: React.FC<IProps> = ({ planObjs, plan, onChange, duration, onDurationToggle }) => {
  const durationId = useId();
  return (
    <StyledContainer>
      <H2>Select your plan</H2>
      <P>You have the option of monthly or yearly billing.</P>
      <Form>
        {planObjs.map(planObj => (
          <RadioButton type="button" key={planObj.id}>
            <Input
              type="radio"
              id={planObj.name}
              value={planObj.id}
              name="plan"
              onChange={onChange}
              checked={planObj.id === plan}
            />
            <Label htmlFor={planObj.name}>
              <Image src={`/icons/icon-${planObj.name}.svg`} alt={planObj.name} width={40} height={40} />
              <span>{planObj.name}</span>
              <span>{planObj.info}</span>
            </Label>
          </RadioButton>
        ))}
        <DurationWrapper>
          <Monthly active={duration === false ? 1 : 0}>monthly</Monthly>
          <A11yHidden as="label" htmlFor={durationId} />
          <input role="switch" type="checkbox" id={durationId} checked={duration} onChange={onDurationToggle} />
          <Yearly active={duration === true ? 1 : 0}>yearly</Yearly>
        </DurationWrapper>
      </Form>
    </StyledContainer>
  );
};

const DurationWrapper = styled.div`
  border: 0;
  margin-top: 24px;
  height: 48px;
  border-radius: 8px;
  background: #f8f9ff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 24px;

  [type='checkbox'] {
    appearance: none;
    position: relative;
    border: 1px solid var(--theme-marine-blue);
    border-radius: 10px;
    background: var(--theme-marine-blue);
    min-width: 38px;
    height: 20px;
    cursor: pointer;
  }

  [type='checkbox']::before {
    content: '';
    position: absolute;
    left: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transform: scale(0.7);
    background-color: var(--theme-white);
    transition: left 250ms linear;
    cursor: pointer;
  }

  [type='checkbox']:checked {
    background-color: var(--theme-white);
    border-color: var(--theme-marine-blue);
  }

  [type='checkbox']:checked::before {
    background-color: var(--theme-marine-blue);
    left: 18px;
  }
`;

const Span = styled.span`
  color: var(--theme-marine-blue);
  text-transform: capitalize;
  font: normal 500 14px / normal Ubuntu;
`;

const Monthly = styled(Span)<{ active: number }>`
  color: ${props => (props.active === 1 ? 'var(--theme-marine-blue)' : 'var(--theme-cool-gray)')};
`;

const Yearly = styled(Span)<{ active: number }>`
  color: ${props => (props.active === 1 ? 'var(--theme-marine-blue)' : 'var(--theme-cool-gray)')};
`;

const Form = styled.form`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-flow: column nowrap;
`;

const RadioButton = styled(Button)`
  margin-top: 12px;
  height: 77px;
  border: 0;
  background: transparent;
  > input[type='radio'] {
    display: none;
  }
  > label {
    width: 100%;
    height: 100%;
    border: 1px solid var(--theme-light-gray);
    border-radius: 8px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: start;
    gap: 7px;
    cursor: pointer;
    position: relative;
    > span {
      margin-left: 70px;
      cursor: pointer;
    }
    > :nth-child(1) {
      position: absolute;
      top: 17px;
      left: 16px;
    }
    > :nth-child(2) {
      text-transform: capitalize;
      color: var(--theme-marine-blue);
      font: normal 500 16px / normal Ubuntu;
    }
    > :nth-child(3) {
      color: var(--theme-cool-gray);
      font: normal 400 14px / 20px Ubuntu;
    }
  }
  > input[type='radio']:checked + label {
    border: 1px solid var(--theme-purplish-blue);
    background: #f8f9ff;
  }
`;

const StyledContainer = styled(Container)`
  padding: 32px 24px;
`;

const H2 = styled.h2`
  color: var(--theme-marine-blue);
  font: normal 700 24px / normal Ubuntu;
`;

const P = styled.p`
  margin-top: 9px;
  color: var(--theme-cool-gray);
  font: normal 400 16px / 25px Ubuntu;
`;

export { SelectPlanForm };
