import { A11yHidden, Button, Container, Input, Label } from '@hyunwlee/ui';
import { useId, HTMLAttributes } from 'react';
import * as React from 'react';
import { styled } from 'styled-components';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  username: string;
  email: string;
  phone: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  next: () => void;
}

const PersonalInfoForm: React.FC<IProps> = ({ username, email, phone, onNameChange, onEmailChange, onPhoneChange, next }) => {
  const usernameId = useId();
  const emailAddressId = useId();
  const phoneNumberId = useId();
  return (
    <StyledContainer>
      <H2>Personal info</H2>
      <P>Please provide your name, email, address, and phone number.</P>
      <Form>
        <A11yHidden as="legend">name, email, phone form</A11yHidden>
        <StyledLabel htmlFor={usernameId}>Name</StyledLabel>
        <StyledInput id={usernameId} value={username} onChange={onNameChange} placeholder="e.g Stephen King" />
        <StyledLabel htmlFor={emailAddressId}>Email Address</StyledLabel>
        <StyledInput
          id={emailAddressId}
          value={email}
          onChange={onEmailChange}
          placeholder="e.g stephenking@lorem.com"
        />
        <StyledLabel htmlFor={phoneNumberId}>Phone Number</StyledLabel>
        <StyledInput id={phoneNumberId} value={phone} onChange={onPhoneChange} placeholder="e.g +1 234 567 890" />
      </Form>
      <NextButton type='button' onClick={next}>Next step</NextButton>
    </StyledContainer>
  );
};

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
    background: var(--theme-marine-blue);
  }
`;

const StyledContainer = styled(Container)`
  padding: 32px 24px;
  @media (min-width: 992px) {
    width: 450px;
  }
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

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
`;

const StyledLabel = styled(Label)`
  margin-top: 22px;
  color: var(--theme-marine-blue);
  font: normal 400 12px / normal Ubuntu;
`;

const StyledInput = styled(Input)`
  margin-top: 3px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid var(--theme-light-gray);
  color: var(--theme-cool-gray);
  font: normal 500 15px / normal Ubuntu;
  padding: 16px 11px;
  &::placeholder {
    color: var(--theme-light-gray);
  }
`;
export { PersonalInfoForm };
