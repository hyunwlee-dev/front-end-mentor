import { Button, Container } from '@hyunwlee/ui';
import { HTMLAttributes } from 'react';
import * as React from 'react';
import { styled } from 'styled-components';
import { IAddOnsObj, IPlanObj } from '@/container/MultiStepFormContainer/MultiStepFormContainer';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  planObjs: IPlanObj[];
  addOnsObjs: IAddOnsObj[];
  plan: number;
  pickedAddOns: number[];
  duration: boolean;
  jumpToPlan: () => void;
  prev: () => void;
  next: () => void;
}

const FinishingUpForm: React.FC<IProps> = ({ planObjs, addOnsObjs, duration, plan, pickedAddOns, jumpToPlan, prev, next }) => {
  const subscriptionDate = duration ? 'yearly' : 'monthly';
  const planPrice = (price: number) => (duration ? price * 12 : price);
  const totalSum =
    planPrice(planObjs[plan].price) +
    addOnsObjs.filter(obj => pickedAddOns.includes(obj.id)).reduce((cal, curr) => cal + curr.price, 0);
  return (
    <StyledContainer>
      <H2>Finishing up</H2>
      <P>Double-check everything is looks OK before confirming.</P>
      <PartialBiling>
        <PickedPlanWrapper>
          <PlanInfo>
            <PlanPart>{`${planObjs[plan].name} (${subscriptionDate})`}</PlanPart>
            <ChangePart type="button" onClick={() => jumpToPlan()}>
              Change
            </ChangePart>
          </PlanInfo>
          <PlanPrice>{`$${planPrice(planObjs[plan].price)}/mo`}</PlanPrice>
        </PickedPlanWrapper>
        <PickedAddOnsWrapper>
          {pickedAddOns
            .sort((a, b) => a - b)
            .map(addOn => (
              <AddOnWrapper key={addOnsObjs[addOn].main}>
                <AddOnInfo>{addOnsObjs[addOn].main}</AddOnInfo>
                <AddOnPrice>{`+$${addOnsObjs[addOn].price}/mo`}</AddOnPrice>
              </AddOnWrapper>
            ))}
        </PickedAddOnsWrapper>
      </PartialBiling>
      <TotalBiling>
        <TotalInfo>Total (per month)</TotalInfo>
        <TotalPrice>+${totalSum}/mo</TotalPrice>
      </TotalBiling>
      <PrevButton type='button' onClick={prev}>Go back</PrevButton>
      <NextButton type='button' onClick={next}>Confirm</NextButton>
    </StyledContainer>
  );
};


const PrevButton = styled(Button)`
  display: none;
  border: 0;
  width: 123px;
  height: 48px;
  cursor: pointer;
  color: var(--theme-cool-gray);
  font: normal 500 16px / normal Ubuntu;
  background: transparent;
  @media (min-width: 992px) {
    display: inline-block;
    position: absolute;
    left: 110px;
    bottom: 32px;
    border-radius: 8px;
  }
`;

const NextButton = styled(Button)`
  display: none;
  border: 0;
  width: 123px;
  height: 48px;
  cursor: pointer;
  color: var(--theme-white);
  font: normal 500 16px / normal Ubuntu;
  @media (min-width: 992px) {
    display: inline-block;
    position: absolute;
    right: 110px;
    bottom: 32px;
    border-radius: 8px;
    background: var(--theme-purplish-blue);
  }
`;

const StyledContainer = styled(Container)`
  padding: 32px 24px;
  @media (min-width: 992px) {
    width: 450px;
  }
`;

const PickedPlanWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--theme-light-gray);
  padding: 12px 0;
`;

const PlanInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: space-between;
  gap: 3px;
`;

const PlanPart = styled.span`
  color: var(--theme-marine-blue);
  font: normal 500 14px / normal Ubuntu;
  text-transform: capitalize;
`;

const ChangePart = styled(Button)`
  border: 0;
  text-align: start;
  background: transparent;
  color: var(--theme-cool-gray);
  font: normal 400 14px / 20px Ubuntu;
  text-decoration-line: underline;
  cursor: pointer;
  &:hover {
    color: var(--theme-purplish-blue);
  }
`;

const PlanPrice = styled.span`
  color: var(--denim, #022959);
  font: normal 700 14px / 20px Ubuntu;
`;

const PickedAddOnsWrapper = styled.div`
  padding: 12px 0;
  display: flex;
  flex-flow: column nowrap;
  gap: 12px;
`;

const AddOnWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const AddOnInfo = styled.span`
  color: var(--theme-cool-gray);
  font: normal 400 14px / 20px Ubuntu;
`;

const AddOnPrice = styled.span`
  color: var(--theme-marine-blue);
  font: normal 400 14px / 20px Ubuntu;
`;

const PartialBiling = styled.section`
  margin-top: 22px;
  background: var(--theme-little-gray);
  padding: 4px 16px;
  border-radius: 8px;
`;

const TotalBiling = styled.section`
  padding: 24px 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const TotalInfo = styled.span`
  color: var(--theme-cool-gray);
  font: normal 400 14px / 20px Ubuntu;
`;
const TotalPrice = styled.span`
  color: var(--theme-purplish-blue);
  font: normal 700 16px / 20px Ubuntu;
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

export { FinishingUpForm };
