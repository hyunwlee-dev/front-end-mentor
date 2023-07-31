import { Container } from '@hyunwlee/ui';
import { styled } from 'styled-components';

const StyledContainer = styled(Container)`
  width: 100%;
  height: 100%;
  outline: 3px solid red;
  @media (min-width: 992px) {
    display: none;
  }
`;

export { StyledContainer };
