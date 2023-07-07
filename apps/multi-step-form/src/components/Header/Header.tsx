import { Button } from '@front-end-mentor/ui';
import { HTMLAttributes } from 'react';
import * as React from 'react';
import { styled } from 'styled-components';
import { IStepObj } from '@/container/MultiStepFormContainer';

interface IProps extends HTMLAttributes<HTMLHeadElement> {
  stepObjs: IStepObj[];
  step: number;
}

const Header: React.FC<IProps> = ({ stepObjs, step, ...restProps }) => {
  return (
    <StyledHeader {...restProps}>
      <IndexButtonUl>
        {stepObjs.map(obj => (
          <IndexButtonLi key={obj.description}>
            <IndexButton>{obj.step}</IndexButton>
            <Step>{`step ${obj.step}`}</Step>
            <Info>{obj.description}</Info>
          </IndexButtonLi>
        ))}
      </IndexButtonUl>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
`;

const IndexButton = styled(Button)`
  border: 0;
  background: transparent;
  cursor: pointer;
  outline: 1px solid var(--theme-white);
  width: 33px;
  height: 33px;
  border-radius: 50%;
  color: var(--theme-white);
  cursor: pointer;
  @media (min-width: 992px) {
  }
`;

const Step = styled.span`
  display: none;
  @media (min-width: 992px) {
    display: block;
    position: absolute;
    left: 49px;
    top: 0;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-transform: uppercase;
    color: var(--theme-pastel-blue);
  }
`;
const Info = styled.span`
  display: none;
  @media (min-width: 992px) {
    display: block;
    position: absolute;
    left: 49px;
    top: 20px;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--theme-white);
  }
`;

const IndexButtonLi = styled.li`
  list-style: none;
  @media (min-width: 992px) {
    width: 153px;
    height: 33px;
    background: ;
    position: relative;
  }
`;

const IndexButtonUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 180px;
  height: 99px;
  @media (min-width: 992px) {
    flex-flow: column nowrap;
    width: 153px;
    height: 228px;
    margin: 40px 32px;
  }
`;

export { Header };
