import { A11yHidden, Button, Container } from '@hyunwlee/ui';
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import * as React from 'react';
import { styled } from 'styled-components';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  prev: () => void;
}

const SubscriptionCompleteCard: React.FC<IProps> = ({ prev }) => {
  return (
    <StyledContainer>
      <A11yHidden as="h2">subscription complete</A11yHidden>
      <ThankYouImage src='/icons/icon-thank-you.svg' width={56} height={56} alt='thank you'/>
      <PTitle>Thank you!</PTitle>
      <PContent>{"Thanks for confirming your subscription!\nWe hope you have fun using our platform.\nIf you ever need support, please feel free to email us at support@loremgaming.com."}</PContent>
      <PrevButton type='button' onClick={prev}>Go back</PrevButton>
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


const StyledContainer = styled(Container)`
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const ThankYouImage = styled(Image)`
  display: block;
  margin: 79px auto 24px auto;
`;

const PTitle = styled.p`
  text-align: center;
  color: var(--theme-marine-blue);
  font: normal 700 24px / normal Ubuntu;
`;

const PContent = styled.p`
  margin: 9px 0 79px 0;
  color: var(--theme-cool-gray);
  text-align: center;
  font: normal 400 16px / 25px Ubuntu;
  white-space: pre-wrap;
  max-width: 450px;
`;

export { SubscriptionCompleteCard };
