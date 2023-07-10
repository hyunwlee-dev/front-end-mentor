import { IAddOnsObj } from '@/container/MultiStepFormContainer/MultiStepFormContainer';
import { Button, Container, Input, Label } from '@front-end-mentor/ui';
import { HTMLAttributes } from 'react';
import { styled } from 'styled-components';
import * as React from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  addOnsObjs: IAddOnsObj[];
  pickedAddOns: number[];
  onPickedAddOns: (id: number) => void;
}

const PickAddOnsForm: React.FC<IProps> = ({ addOnsObjs, pickedAddOns, onPickedAddOns }) => {
  return (
    <StyledContainer>
      <H2>Pick add-ons</H2>
      <P>Add-ons help enhance your gaming experience.</P>
      <Form>
        {addOnsObjs.map(addOnsObj => (
          <AddOnButton
            type="button"
            key={`addOnsObj_${addOnsObj.id}`}
            onClick={() => onPickedAddOns(addOnsObj.id)}
            active={pickedAddOns.includes(addOnsObj.id) ? 1 : 0}
          >
            <AddOnInput
              as="input"
              type="checkbox"
              id={addOnsObj.main}
              value={addOnsObj.id}
              checked={pickedAddOns.includes(addOnsObj.id)}
              onChange={() => onPickedAddOns(addOnsObj.id)}
            />
            <AddOnLabel htmlFor={addOnsObj.main}>{addOnsObj.main}</AddOnLabel>
            <Sub>{addOnsObj.sub}</Sub>
            <Info>{addOnsObj.info}</Info>
          </AddOnButton>
        ))}
      </Form>
    </StyledContainer>
  );
};

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

const Form = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 12px;
  margin: 22px 0;
`;

const AddOnButton = styled(Button)<{ active: number }>`
  height: 62px;
  border: ${props =>
    props.active === 1 ? '1px solid var(--theme-purplish-blue)' : '1px solid var(--theme-light-gray)'};
  background: ${props => (props.active === 1 ? 'var(--theme-little-gray)' : 'transparent')};
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  position: relative;
  gap: 3px;
  cursor: pointer;
`;

const AddOnInput = styled(Input)`
  display: none;
  &:checked + label::before {
    background: var(--theme-purplish-blue) url('/icons/icon-checkmark.svg') center center no-repeat;
  }
`;

const AddOnLabel = styled(Label)`
  padding-left: 52px;
  color: var(--theme-marine-blue);
  font: normal 500 14px / normal Ubuntu;
  &::before {
    z-index: 100;
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    left: 16px;
    top: 19px;
    border: 1px solid var(--theme-light-gray);
    border-radius: 5px;
  }
`;

const Sub = styled.p`
  padding-left: 52px;
  color: var(--theme-cool-gray);
  font: normal 400 12px / 20px Ubuntu;
`;

const Info = styled.span`
  position: absolute;
  color: var(--theme-purplish-blue);
  font: normal 400 12px / 20px Ubuntu;
  left: 236px;
`;

export { PickAddOnsForm };
