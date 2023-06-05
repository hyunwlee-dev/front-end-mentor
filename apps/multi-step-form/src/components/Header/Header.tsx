import { HTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface IProps extends HTMLAttributes<HTMLHeadElement> {}
const Header: React.FC<IProps> = ({ children, ...restProps }) => {
  return <header {...restProps}>{children}</header>;
};

const StyledHeader = styled(Header)`
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 172px;
  background: var(--theme-background-image) no-repeat;
  background-size: cover;
  @media (min-width: 992px) {
    margin: 16px;
    width: 274px;
    height: 568px;
  }
`;

export { Header, StyledHeader };
