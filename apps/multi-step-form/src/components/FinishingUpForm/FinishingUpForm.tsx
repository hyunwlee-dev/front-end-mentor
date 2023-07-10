import { Container } from '@front-end-mentor/ui';
import { styled } from 'styled-components';

const FinishingUpForm = () => {
  return (
    <StyledContainer>
      <H2>Finishing up</H2>
      <P>Double-check everything is looks OK before confirming.</P>
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

export { FinishingUpForm };
